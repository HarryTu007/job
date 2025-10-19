#pragma once

#include <QObject>
#include <QVector>

class IForceDataSource : public QObject {
  Q_OBJECT
public:
  explicit IForceDataSource(QObject* parent = nullptr) : QObject(parent) {}
  ~IForceDataSource() override = default;

  virtual void start() = 0;
  virtual void stop() = 0;
  virtual void setSampleIntervalMs(int intervalMs) = 0;

signals:
  // Emitted for each sample; values.size() should be number of axes
  void sampleReady(const QVector<double>& values);
};
