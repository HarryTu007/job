#pragma once

#include <QObject>
#include <QVector>
#include <deque>
#include <array>

#include "src/common/Constants.h"

// Holds recent samples per axis and the latest values
class ForceModel : public QObject {
  Q_OBJECT
public:
  explicit ForceModel(int numAxes, int historyLength, QObject* parent = nullptr);

  int numAxes() const { return _numAxes; }

  // Append new sample for all axes
  void appendSample(const QVector<double>& values);

  // Current values per axis
  const QVector<double>& currentValues() const { return _currentValues; }

  // Copy of history for axis
  QVector<double> historyForAxis(int axisIndex) const;

  int historyLength() const { return _historyLength; }

signals:
  void updated();

private:
  int _numAxes;
  int _historyLength;
  QVector<double> _currentValues;
  std::vector<std::deque<double>> _history; // per-axis deques
};
