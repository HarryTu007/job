#include "MainWindow.h"

#include "../core/ForceDataModel.h"

#include <QtCharts/QChart>
#include <QtCharts/QChartView>
#include <QtCharts/QLineSeries>
#include <QtCharts/QValueAxis>
#include <QCheckBox>
#include <QGridLayout>
#include <QHeaderView>
#include <QHBoxLayout>
#include <QLabel>
#include <QMap>
#include <QPushButton>
#include <QTableWidget>
#include <QTimer>
#include <QVBoxLayout>
#include <QVector>

using namespace QtCharts;

MainWindow::MainWindow(ForceDataModel* model, QWidget* parent)
  : QMainWindow(parent), model_(model) {
  setupUi();
}

MainWindow::~MainWindow() = default;

void MainWindow::setupUi() {
  central_ = new QWidget(this);
  auto* root = new QHBoxLayout(central_);

  // Left: axis selection
  auto* leftPanel = new QWidget(central_);
  auto* leftLayout = new QVBoxLayout(leftPanel);
  auto* title = new QLabel(tr("选择显示的轴 (1~14)"), leftPanel);
  leftLayout->addWidget(title);

  auto* grid = new QGridLayout();
  for (int i = 0; i < 14; ++i) {
    auto* cb = new QCheckBox(tr("轴 %1").arg(i + 1), leftPanel);
    cb->setChecked(i < static_cast<int>(model_->getNumAxes()) ? model_->isAxisSelected(i) : false);
    axisChecks_.push_back(cb);
    const int row = i / 2;
    const int col = i % 2;
    grid->addWidget(cb, row, col);
    connect(cb, &QCheckBox::toggled, this, [this, i](bool checked) { onAxisToggled(i, checked); });
  }
  leftLayout->addLayout(grid);

  auto* btnRow = new QHBoxLayout();
  auto* btnAll = new QPushButton(tr("全选"), leftPanel);
  auto* btnNone = new QPushButton(tr("全不选"), leftPanel);
  btnRow->addWidget(btnAll);
  btnRow->addWidget(btnNone);
  leftLayout->addLayout(btnRow);
  connect(btnAll, &QPushButton::clicked, this, &MainWindow::selectAll);
  connect(btnNone, &QPushButton::clicked, this, &MainWindow::clearAll);

  // Right: values table + chart
  auto* rightPanel = new QWidget(central_);
  auto* rightLayout = new QVBoxLayout(rightPanel);

  table_ = new QTableWidget(rightPanel);
  table_->setColumnCount(2);
  table_->setHorizontalHeaderLabels({tr("轴"), tr("实时力值")});
  table_->horizontalHeader()->setStretchLastSection(true);
  table_->verticalHeader()->setVisible(false);
  table_->setEditTriggers(QAbstractItemView::NoEditTriggers);
  table_->setSelectionMode(QAbstractItemView::NoSelection);
  rightLayout->addWidget(table_);

  chart_ = new QChart();
  chart_->setTitle(tr("历史反馈曲线"));
  chartView_ = new QChartView(chart_, rightPanel);
  chartView_->setRenderHint(QPainter::Antialiasing);
  rightLayout->addWidget(chartView_, 1);

  root->addWidget(leftPanel);
  root->addWidget(rightPanel, 1);
  setCentralWidget(central_);

  ensureSeries();

  timer_ = new QTimer(this);
  timer_->setInterval(50);
  connect(timer_, &QTimer::timeout, this, &MainWindow::refreshUi);
  timer_->start();
}

void MainWindow::ensureSeries() {
  // Create or remove series based on selection
  const int axes = static_cast<int>(model_->getNumAxes());

  for (int i = 0; i < axes; ++i) {
    const bool selected = model_->isAxisSelected(static_cast<std::size_t>(i));
    const bool exists = axisToSeries_.contains(i);
    if (selected && !exists) {
      auto* s = new QLineSeries(chart_);
      s->setName(tr("轴 %1").arg(i + 1));
      chart_->addSeries(s);
      axisToSeries_.insert(i, s);
    } else if (!selected && exists) {
      auto* s = axisToSeries_.take(i);
      chart_->removeSeries(s);
      s->deleteLater();
    }
  }

  // Axes for chart
  auto* axisX = new QValueAxis();
  auto* axisY = new QValueAxis();
  axisX->setTitleText(tr("时间 (s)"));
  axisY->setTitleText(tr("力值"));

  chart_->removeAxis(axisX); // ensure clean
  chart_->removeAxis(axisY);

  chart_->addAxis(axisX, Qt::AlignBottom);
  chart_->addAxis(axisY, Qt::AlignLeft);

  for (auto* s : axisToSeries_) {
    s->attachAxis(axisX);
    s->attachAxis(axisY);
  }
}

void MainWindow::onAxisToggled(int axisIndex, bool checked) {
  model_->setAxisSelected(static_cast<std::size_t>(axisIndex), checked);
  ensureSeries();
}

void MainWindow::selectAll() {
  for (int i = 0; i < static_cast<int>(axisChecks_.size()); ++i) {
    axisChecks_[i]->setChecked(true);
  }
}

void MainWindow::clearAll() {
  for (int i = 0; i < static_cast<int>(axisChecks_.size()); ++i) {
    axisChecks_[i]->setChecked(false);
  }
}

void MainWindow::refreshUi() {
  // Update table for selected axes
  const int axes = static_cast<int>(model_->getNumAxes());
  const auto latest = model_->getLatestValues();

  // Rebuild table with selected axes
  std::vector<int> selected;
  selected.reserve(axes);
  for (int i = 0; i < axes; ++i) {
    if (model_->isAxisSelected(static_cast<std::size_t>(i))) selected.push_back(i);
  }

  table_->setRowCount(static_cast<int>(selected.size()));
  for (int row = 0; row < static_cast<int>(selected.size()); ++row) {
    const int axis = selected[row];
    auto* itemAxis = new QTableWidgetItem(QString::number(axis + 1));
    auto* itemValue = new QTableWidgetItem(QString::number(axis < static_cast<int>(latest.size()) ? latest[axis] : 0.0, 'f', 3));
    table_->setItem(row, 0, itemAxis);
    table_->setItem(row, 1, itemValue);
  }

  // Update chart data
  double minY = 1e9, maxY = -1e9;
  double minX = 1e9, maxX = 0.0;
  for (auto it = axisToSeries_.begin(); it != axisToSeries_.end(); ++it) {
    const int axis = it.key();
    auto* s = it.value();
    const auto series = model_->getHistoryForAxis(static_cast<std::size_t>(axis), historyWindowSeconds_);
    s->clear();
    QVector<QPointF> pts;
    pts.reserve(static_cast<int>(series.size()));
    for (const auto& p : series) {
      pts.append(QPointF(p.first, p.second));
      minY = std::min(minY, p.second);
      maxY = std::max(maxY, p.second);
      minX = std::min(minX, p.first);
      maxX = std::max(maxX, p.first);
    }
    s->replace(pts);
  }

  if (minX > maxX) {
    minX = 0.0; maxX = historyWindowSeconds_;
  } else {
    // Keep a fixed-width window ending at maxX
    minX = std::max(0.0, maxX - historyWindowSeconds_);
  }
  if (minY > maxY) {
    minY = -12.0; maxY = 12.0;
  } else {
    const double pad = 0.1 * std::max(1.0, maxY - minY);
    minY -= pad; maxY += pad;
  }

  auto* axisX = qobject_cast<QValueAxis*>(chart_->axisX());
  auto* axisY = qobject_cast<QValueAxis*>(chart_->axisY());
  if (axisX) {
    axisX->setRange(minX, maxX);
  }
  if (axisY) {
    axisY->setRange(minY, maxY);
  }
}
