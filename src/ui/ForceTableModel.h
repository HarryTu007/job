#pragma once

#include <QAbstractTableModel>
#include <QVector>

class ForceModel;

class ForceTableModel : public QAbstractTableModel {
  Q_OBJECT
public:
  explicit ForceTableModel(ForceModel* model, QObject* parent = nullptr);

  int rowCount(const QModelIndex& parent = QModelIndex()) const override;
  int columnCount(const QModelIndex& parent = QModelIndex()) const override;
  QVariant data(const QModelIndex& index, int role = Qt::DisplayRole) const override;
  QVariant headerData(int section, Qt::Orientation orientation, int role) const override;

private:
  ForceModel* _model;
};