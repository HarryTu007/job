#include "ForceModel.h"

#include <algorithm>

ForceModel::ForceModel(int numAxes, int historyLength, QObject* parent)
    : QObject(parent), _numAxes(numAxes), _historyLength(historyLength), _currentValues(numAxes, 0.0), _history() {
  _history.resize(static_cast<size_t>(numAxes));
}

void ForceModel::appendSample(const QVector<double>& values) {
  if (values.size() != _numAxes) {
    return; // ignore invalid samples
  }
  _currentValues = values;
  for (int i = 0; i < _numAxes; ++i) {
    auto& dq = _history[static_cast<size_t>(i)];
    dq.push_back(values[i]);
    if (static_cast<int>(dq.size()) > _historyLength) {
      dq.pop_front();
    }
  }
  emit updated();
}

QVector<double> ForceModel::historyForAxis(int axisIndex) const {
  QVector<double> out;
  if (axisIndex < 0 || axisIndex >= _numAxes) return out;
  const auto& dq = _history[static_cast<size_t>(axisIndex)];
  out.reserve(static_cast<int>(dq.size()));
  for (double v : dq) out.push_back(v);
  return out;
}
