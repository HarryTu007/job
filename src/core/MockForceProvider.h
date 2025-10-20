#pragma once

#include "ForceProvider.h"
#include <cmath>
#include <vector>
#include <functional>

class MockForceProvider : public ForceProvider {
public:
  using TimeSecondsProvider = std::function<double()>;

  explicit MockForceProvider(std::size_t axisCount = 14,
                             TimeSecondsProvider timeProvider = defaultTimeProvider());

  std::size_t getAxisCount() const override { return axisCount_; }

  bool getForces(std::vector<double>& outForces) override;

  static TimeSecondsProvider defaultTimeProvider();

private:
  std::size_t axisCount_;
  TimeSecondsProvider timeProvider_;
};
