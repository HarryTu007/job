#include "ForceHistoryBuffer.h"
#include <algorithm>
#include <stdexcept>

ForceHistoryBuffer::ForceHistoryBuffer(std::size_t numAxes, std::size_t capacityPerAxis) {
  configure(numAxes, capacityPerAxis);
}

void ForceHistoryBuffer::configure(std::size_t numAxes, std::size_t capacityPerAxis) {
  series_.clear();
  series_.resize(numAxes);
  capacityPerAxis_ = capacityPerAxis;
  for (auto& dq : series_) {
    dq.clear();
  }
}

void ForceHistoryBuffer::addSample(double tSeconds, const std::vector<double>& values) {
  if (series_.empty()) return;
  const std::size_t n = std::min(values.size(), series_.size());
  for (std::size_t i = 0; i < n; ++i) {
    auto& dq = series_[i];
    dq.emplace_back(tSeconds, values[i]);
    while (dq.size() > capacityPerAxis_) {
      dq.pop_front();
    }
  }
}

std::vector<std::pair<double, double>> ForceHistoryBuffer::getSeries(std::size_t axisIndex,
                                                                     double fromTimeSeconds) const {
  if (axisIndex >= series_.size()) return {};
  const auto& dq = series_[axisIndex];
  if (dq.empty()) return {};
  // Find first element with t >= fromTimeSeconds
  auto it = std::lower_bound(dq.begin(), dq.end(), fromTimeSeconds,
    [](const std::pair<double,double>& elem, double t) { return elem.first < t; });
  return std::vector<std::pair<double,double>>(it, dq.end());
}

void ForceHistoryBuffer::clear() {
  for (auto& dq : series_) dq.clear();
}
