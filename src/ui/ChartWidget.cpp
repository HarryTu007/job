#include "ChartWidget.h"
#include "src/model/ForceModel.h"

#include <QtCharts/QChart>
#include <QtCharts/QValueAxis>

using namespace QtCharts;

ChartWidget::ChartWidget(ForceModel* model, QWidget* parent)
    : QWidget(parent), _model(model), _chart(new QChart()), _chartView(new QChartView(_chart)), _xAxis(new QValueAxis()), _yAxis(new QValueAxis()) {
  auto* layout = new QVBoxLayout(this);
  _chart->legend()->setVisible(true);
  _chartView->setRenderHint(QPainter::Antialiasing);

  _xAxis->setTitleText("Sample");
  _yAxis->setTitleText("Force");
  _chart->addAxis(_xAxis, Qt::AlignBottom);
  _chart->addAxis(_yAxis, Qt::AlignLeft);

  layout->addWidget(_chartView);
  setLayout(layout);
}

void ChartWidget::setVisibleAxes(const QVector<int>& axes) {
  _visibleAxes = axes;

  // Remove non-visible series
  for (auto it = _seriesByAxis.begin(); it != _seriesByAxis.end();) {
    if (!_visibleAxes.contains(it.key())) {
      _chart->removeSeries(it.value());
      delete it.value();
      it = _seriesByAxis.erase(it);
    } else {
      ++it;
    }
  }

  // Add new series for visible axes
  for (int axis : _visibleAxes) {
    if (!_seriesByAxis.contains(axis)) {
      auto* series = new QLineSeries();
      series->setName(QString("Axis %1").arg(axis + 1));
      _chart->addSeries(series);
      series->attachAxis(_xAxis);
      series->attachAxis(_yAxis);
      _seriesByAxis.insert(axis, series);
    }
  }
}

void ChartWidget::refresh() {
  // Update axis ranges
  int maxX = 0;
  double minY = std::numeric_limits<double>::infinity();
  double maxY = -std::numeric_limits<double>::infinity();

  for (int axis : _visibleAxes) {
    auto* series = _seriesByAxis.value(axis, nullptr);
    if (!series) continue;

    const QVector<double> hist = _model->historyForAxis(axis);
    QVector<QPointF> points;
    points.reserve(hist.size());
    for (int i = 0; i < hist.size(); ++i) {
      points.push_back(QPointF(i, hist[i]));
      minY = std::min(minY, hist[i]);
      maxY = std::max(maxY, hist[i]);
    }
    maxX = std::max(maxX, hist.size());
    series->replace(points);
  }

  _xAxis->setRange(0, std::max(10, maxX));
  if (minY == std::numeric_limits<double>::infinity()) {
    minY = -1.0;
    maxY = 1.0;
  }
  // Add some margin
  const double margin = (maxY - minY) * 0.1 + 1e-6;
  _yAxis->setRange(minY - margin, maxY + margin);
}
