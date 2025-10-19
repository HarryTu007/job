#include "MockForceDataSource.h"
#include <QtMath>

MockForceDataSource::MockForceDataSource(int numAxes, QObject* parent)
    : IForceDataSource(parent), _numAxes(numAxes) {
  _timer.setTimerType(Qt::PreciseTimer);
  connect(&_timer, &QTimer::timeout, this, &MockForceDataSource::onTick);
}

void MockForceDataSource::start() {
  if (!_timer.isActive()) {
    _timer.start(_timer.interval() > 0 ? _timer.interval() : 20);
  }
}

void MockForceDataSource::stop() { _timer.stop(); }

void MockForceDataSource::setSampleIntervalMs(int intervalMs) {
  bool running = _timer.isActive();
  _timer.stop();
  _timer.start(intervalMs);
}

void MockForceDataSource::onTick() {
  ++_tick;
  QVector<double> values;
  values.reserve(_numAxes);
  for (int i = 0; i < _numAxes; ++i) {
    double base = qSin((_tick + i * 10) * 0.05);
    double noise = qCos((_tick * 3 + i * 17) * 0.031) * 0.1;
    values.push_back(base + noise);
  }
  emit sampleReady(values);
}
