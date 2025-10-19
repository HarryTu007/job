#pragma once

#include "IForceDataSource.h"
#include <QTimer>

class MockForceDataSource : public IForceDataSource {
  Q_OBJECT
public:
  explicit MockForceDataSource(int numAxes, QObject* parent = nullptr);

  void start() override;
  void stop() override;
  void setSampleIntervalMs(int intervalMs) override;

private slots:
  void onTick();

private:
  QTimer _timer;
  int _numAxes;
  int _tick{0};
};
