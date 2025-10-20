#include "tinytest.h"
#include "../src/core/ForceHistoryBuffer.h"
#include "../src/core/ForceDataModel.h"
#include "../src/core/MockForceProvider.h"

#include <cmath>
#include <vector>

TEST(test_history_buffer_capacity) {
  ForceHistoryBuffer buf(2, 10);
  for (int i = 0; i < 25; ++i) {
    std::vector<double> v = {static_cast<double>(i), static_cast<double>(-i)};
    buf.addSample(static_cast<double>(i), v);
  }
  const auto s0 = buf.getSeries(0, 0.0);
  const auto s1 = buf.getSeries(1, 0.0);
  ASSERT_EQ(s0.size(), 10u);
  ASSERT_EQ(s1.size(), 10u);
  ASSERT_EQ(s0.front().first, 15.0);
  ASSERT_EQ(s0.back().first, 24.0);
}

TEST(test_data_model_sampling_manual) {
  // Controlled time provider
  double t = 0.0;
  auto timeProv = [&t]() { return t; };
  auto provider = std::make_shared<MockForceProvider>(14, timeProv);

  ForceDataModel model(provider, /*rate*/10.0, /*history*/5.0, timeProv);

  // Initially zeros
  auto latest = model.getLatestValues();
  ASSERT_EQ(latest.size(), provider->getAxisCount());
  for (double v : latest) ASSERT_EQ(v, 0.0);

  // Step time and sample
  t = 0.0; model.sampleOnce();
  latest = model.getLatestValues();
  ASSERT_EQ(latest.size(), provider->getAxisCount());

  t = 0.1; model.sampleOnce();
  t = 0.2; model.sampleOnce();

  const auto series0 = model.getHistoryForAxis(0, 1.0);
  ASSERT_TRUE(series0.size() >= 3u);
  ASSERT_NEAR(series0.front().first, 0.0, 1e-9);
}
