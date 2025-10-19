#pragma once

#include <QWidget>
#include <QtCharts/QChartView>
#include <QtCharts/QLineSeries>
#include <QtCharts/QValueAxis>
#include <QMap>

class ForceModel;

class ChartWidget : public QWidget {
  Q_OBJECT
public:
  explicit ChartWidget(ForceModel* model, QWidget* parent = nullptr);

public slots:
  void setVisibleAxes(const QVector<int>& axes);
  void refresh();

private:
  ForceModel* _model;
  QtCharts::QChart* _chart;
  QtCharts::QChartView* _chartView;
  QtCharts::QValueAxis* _xAxis;
  QtCharts::QValueAxis* _yAxis;
  QMap<int, QtCharts::QLineSeries*> _seriesByAxis; // key: axis index
  QVector<int> _visibleAxes;
};