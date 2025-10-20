#pragma once

#include "ForceProvider.h"
#include "ForceHistoryBuffer.h"

#include <atomic>
#include <cstddef>
#include <functional>
#include <memory>
#include <mutex>
#include <thread>
#include <vector>

class ForceDataModel {
public:
  using TimeSecondsProvider = std::function<double()>;

  ForceDataModel(std::shared_ptr<ForceProvider> provider,
                 double sampleRateHz = 100.0,
                 double historySeconds = 30.0,
                 TimeSecondsProvider timeProvider = nullptr);

  ~ForceDataModel();

  void start();
  void stop();

  void setAxisSelected(std::size_t axisIndex, bool selected);
  bool isAxisSelected(std::size_t axisIndex) const;

  std::size_t getNumAxes() const;

  std::vector<double> getLatestValues() const;

  // Returns series for axis in [now - secondsBack, now]
  std::vector<std::pair<double,double>> getHistoryForAxis(std::size_t axisIndex,
                                                          double secondsBack) const;

  // Test helper: perform one sampling step without threading
  void sampleOnce();

private:
  void samplingLoop();

  std::shared_ptr<ForceProvider> provider_;
  double sampleRateHz_;
  double historySeconds_;
  TimeSecondsProvider timeProvider_;

  mutable std::mutex mutex_;
  std::vector<bool> axisSelected_;
  std::vector<double> latestValues_;
  ForceHistoryBuffer history_;

  std::atomic<bool> running_{false};
  std::thread samplingThread_;
};
