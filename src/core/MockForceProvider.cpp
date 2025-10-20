#include "MockForceProvider.h"
#include <chrono>

static constexpr double PI = 3.14159265358979323846;

MockForceProvider::MockForceProvider(std::size_t axisCount, TimeSecondsProvider timeProvider)
  : axisCount_(axisCount), timeProvider_(std::move(timeProvider)) {}

MockForceProvider::TimeSecondsProvider MockForceProvider::defaultTimeProvider() {
  using clock = std::chrono::steady_clock;
  const auto start = clock::now();
  return [start]() -> double {
    const auto now = clock::now();
    const auto dt = std::chrono::duration<double>(now - start).count();
    return dt;
  };
}

bool MockForceProvider::getForces(std::vector<double>& outForces) {
  outForces.resize(axisCount_);
  const double t = timeProvider_ ? timeProvider_() : 0.0;
  for (std::size_t i = 0; i < axisCount_; ++i) {
    const double baseFreq = 0.4 + 0.15 * static_cast<double>(i);
    const double amplitude = 10.0 + 0.5 * static_cast<double>(i);
    const double phase = 0.3 * static_cast<double>(i);
    const double slowMod = 0.3 * std::cos(2.0 * PI * 0.05 * static_cast<double>(i + 1) * t);
    outForces[i] = amplitude * std::sin(2.0 * PI * baseFreq * t + phase) + slowMod;
  }
  return true;
}
