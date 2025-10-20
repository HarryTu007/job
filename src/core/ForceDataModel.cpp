#include "ForceDataModel.h"

#include <algorithm>
#include <chrono>
#include <cmath>
#include <thread>

namespace {
static ForceDataModel::TimeSecondsProvider makeDefaultTimeProvider() {
  using clock = std::chrono::steady_clock;
  const auto start = clock::now();
  return [start]() -> double {
    const auto now = clock::now();
    return std::chrono::duration<double>(now - start).count();
  };
}
}

ForceDataModel::ForceDataModel(std::shared_ptr<ForceProvider> provider,
                               double sampleRateHz,
                               double historySeconds,
                               TimeSecondsProvider timeProvider)
  : provider_(std::move(provider)),
    sampleRateHz_(sampleRateHz),
    historySeconds_(historySeconds),
    timeProvider_(timeProvider ? std::move(timeProvider) : makeDefaultTimeProvider()) {
  const std::size_t axes = getNumAxes();
  axisSelected_.assign(axes, true);
  latestValues_.assign(axes, 0.0);
  const std::size_t capacity = static_cast<std::size_t>(std::ceil(historySeconds_ * sampleRateHz_)) + 8;
  history_.configure(axes, capacity);
}

ForceDataModel::~ForceDataModel() {
  stop();
}

void ForceDataModel::start() {
  bool expected = false;
  if (!running_.compare_exchange_strong(expected, true)) {
    return; // already running
  }
  samplingThread_ = std::thread(&ForceDataModel::samplingLoop, this);
}

void ForceDataModel::stop() {
  bool expected = true;
  if (!running_.compare_exchange_strong(expected, false)) {
    return; // not running
  }
  if (samplingThread_.joinable()) {
    samplingThread_.join();
  }
}

void ForceDataModel::setAxisSelected(std::size_t axisIndex, bool selected) {
  std::lock_guard<std::mutex> lk(mutex_);
  if (axisIndex < axisSelected_.size()) {
    axisSelected_[axisIndex] = selected;
  }
}

bool ForceDataModel::isAxisSelected(std::size_t axisIndex) const {
  std::lock_guard<std::mutex> lk(mutex_);
  if (axisIndex < axisSelected_.size()) {
    return axisSelected_[axisIndex];
  }
  return false;
}

std::size_t ForceDataModel::getNumAxes() const {
  return provider_ ? provider_->getAxisCount() : 0;
}

std::vector<double> ForceDataModel::getLatestValues() const {
  std::lock_guard<std::mutex> lk(mutex_);
  return latestValues_;
}

std::vector<std::pair<double,double>> ForceDataModel::getHistoryForAxis(std::size_t axisIndex,
                                                                        double secondsBack) const {
  const double nowSec = timeProvider_ ? timeProvider_() : 0.0;
  const double from = std::max(0.0, nowSec - std::max(secondsBack, 0.0));
  std::lock_guard<std::mutex> lk(mutex_);
  return history_.getSeries(axisIndex, from);
}

void ForceDataModel::sampleOnce() {
  if (!provider_) return;
  std::vector<double> values;
  if (!provider_->getForces(values)) return;
  const double nowSec = timeProvider_ ? timeProvider_() : 0.0;
  {
    std::lock_guard<std::mutex> lk(mutex_);
    if (values.size() != latestValues_.size()) {
      latestValues_.assign(values.begin(), values.end());
      history_.configure(values.size(), static_cast<std::size_t>(std::ceil(historySeconds_ * sampleRateHz_)) + 8);
    } else {
      latestValues_ = values;
    }
    history_.addSample(nowSec, values);
  }
}

void ForceDataModel::samplingLoop() {
  const double intervalSec = 1.0 / std::max(1e-6, sampleRateHz_);
  using namespace std::chrono;
  auto nextTime = steady_clock::now();
  while (running_.load()) {
    sampleOnce();
    nextTime += duration_cast<steady_clock::duration>(duration<double>(intervalSec));
    std::this_thread::sleep_until(nextTime);
  }
}
