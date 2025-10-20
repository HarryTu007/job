#pragma once

#include <QMainWindow>
#include <QMap>
#include <QPointer>
#include <vector>

QT_BEGIN_NAMESPACE
class QCheckBox;
class QGridLayout;
class QTimer;
class QTableWidget;
QT_END_NAMESPACE

namespace QtCharts {
class QChart;
class QChartView;
class QLineSeries;
}

class ForceDataModel;

class MainWindow : public QMainWindow {
  Q_OBJECT
public:
  explicit MainWindow(ForceDataModel* model, QWidget* parent = nullptr);
  ~MainWindow() override;

private slots:
  void onAxisToggled(int axisIndex, bool checked);
  void refreshUi();
  void selectAll();
  void clearAll();

private:
  void setupUi();
  void ensureSeries();

  ForceDataModel* model_;
  QWidget* central_ = nullptr;

  // Left panel: checkboxes
  std::vector<QCheckBox*> axisChecks_;

  // Right panel: table and chart
  QTableWidget* table_ = nullptr;
  QtCharts::QChart* chart_ = nullptr;
  QtCharts::QChartView* chartView_ = nullptr;
  QMap<int, QtCharts::QLineSeries*> axisToSeries_;
  QTimer* timer_ = nullptr;

  double historyWindowSeconds_ = 10.0;
};
