#include "tinytest.h"

int main() {
  std::printf("Running %zu tests...\n", tinytest::registry().size());
  for (const auto& t : tinytest::registry()) {
    std::printf("[ RUN      ] %s\n", t.name);
    t.fn();
    std::printf("[       OK ] %s\n", t.name);
  }
  std::puts("All tests passed.");
  return 0;
}
