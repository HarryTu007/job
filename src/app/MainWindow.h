#pragma once

#include <QMainWindow>

class AxisSelectorWidget;
class ChartWidget;
class ForceTableModel;
class ForceModel;
class IForceDataSource;

class MainWindow : public QMainWindow {
  Q_OBJECT
public:
  explicit MainWindow(QWidget* parent = nullptr);
  ~MainWindow() override;

private slots:
  void onAxesSelectionChanged(const QVector<int>& axes);
  void onModelUpdated();

private:
  void buildUi();
  void connectSignals();

  AxisSelectorWidget* _axisSelector{nullptr};
  ChartWidget* _chart{nullptr};
  QTableView* _table{nullptr};
  ForceTableModel* _tableModel{nullptr};

  ForceModel* _model{nullptr};
  IForceDataSource* _dataSource{nullptr};
};