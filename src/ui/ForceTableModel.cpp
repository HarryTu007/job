#include "ForceTableModel.h"
#include "src/model/ForceModel.h"

ForceTableModel::ForceTableModel(ForceModel* model, QObject* parent)
    : QAbstractTableModel(parent), _model(model) {}

int ForceTableModel::rowCount(const QModelIndex&) const { return _model->numAxes(); }
int ForceTableModel::columnCount(const QModelIndex&) const { return 2; }

QVariant ForceTableModel::data(const QModelIndex& index, int role) const {
  if (!index.isValid() || role != Qt::DisplayRole) return {};
  const int r = index.row();
  const int c = index.column();
  if (c == 0) return r + 1; // axis index 1-based
  if (c == 1) {
    const auto& vals = _model->currentValues();
    if (r >= 0 && r < vals.size()) return vals[r];
  }
  return {};
}

QVariant ForceTableModel::headerData(int section, Qt::Orientation orientation, int role) const {
  if (role != Qt::DisplayRole) return {};
  if (orientation == Qt::Horizontal) {
    return section == 0 ? "Axis" : "Force";
  }
  return section + 1;
}
