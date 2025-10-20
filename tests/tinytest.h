#pragma once

#include <cstdio>
#include <cstdlib>
#include <functional>
#include <string>
#include <vector>
#include <cmath>

namespace tinytest {
struct TestCase { const char* name; std::function<void()> fn; };
inline std::vector<TestCase>& registry() { static std::vector<TestCase> r; return r; }
struct Registrar { Registrar(const char* n, std::function<void()> f) { registry().push_back({n, std::move(f)}); } };
}

#define TEST(name) void name(); static tinytest::Registrar reg_##name(#name, name); void name()

#define ASSERT_TRUE(x) do { if (!(x)) { std::fprintf(stderr, "ASSERT_TRUE failed: %s at %s:%d\n", #x, __FILE__, __LINE__); std::fflush(stderr); std::abort(); } } while(0)
#define ASSERT_EQ(a,b) do { if (!((a)==(b))) { std::fprintf(stderr, "ASSERT_EQ failed: %s vs %s at %s:%d\n", #a, #b, __FILE__, __LINE__); std::fflush(stderr); std::abort(); } } while(0)
#define ASSERT_NEAR(a,b,eps) do { if (std::fabs((a)-(b)) > (eps)) { std::fprintf(stderr, "ASSERT_NEAR failed: |%s-%s|>%g at %s:%d\n", #a, #b, (eps), __FILE__, __LINE__); std::fflush(stderr); std::abort(); } } while(0)
