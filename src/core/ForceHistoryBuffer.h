#pragma once

#include <cstddef>
#include <deque>
#include <utility>
#include <vector>

class ForceHistoryBuffer {
public:
  ForceHistoryBuffer() = default;
  ForceHistoryBuffer(std::size_t numAxes, std::size_t capacityPerAxis);

  void configure(std::size_t numAxes, std::size_t capacityPerAxis);

  // Add a sample at time tSeconds since start, for all axes.
  void addSample(double tSeconds, const std::vector<double>& values);

  // Returns a copy of (t,value) pairs for a single axis, filtered by fromTimeSeconds.
  std::vector<std::pair<double, double>> getSeries(std::size_t axisIndex,
                                                   double fromTimeSeconds) const;

  std::size_t getNumAxes() const { return series_.size(); }

  void clear();

private:
  std::vector<std::deque<std::pair<double, double>>> series_;
  std::size_t capacityPerAxis_ = 0; // max number of samples per axis
};
