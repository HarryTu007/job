#pragma once

#include <cstddef>
#include <vector>
#include <functional>

class ForceProvider {
public:
  virtual ~ForceProvider() = default;

  virtual std::size_t getAxisCount() const = 0;

  // Fill outForces with current force values for all axes.
  // Returns true on success; outForces.size() must become getAxisCount().
  virtual bool getForces(std::vector<double>& outForces) = 0;
};
