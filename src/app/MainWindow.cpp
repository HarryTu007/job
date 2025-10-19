#include "MainWindow.h"

#include <QDockWidget>
#include <QHBoxLayout>
#include <QHeaderView>
#include <QTableView>
#include <QTimer>
#include <QToolBar>
#include <QStatusBar>
#include <QSpinBox>
#include <QLabel>

#include "src/common/Constants.h"
#include "src/data/MockForceDataSource.h"
#include "src/model/ForceModel.h"
#include "src/ui/AxisSelectorWidget.h"
#include "src/ui/ChartWidget.h"
#include "src/ui/ForceTableModel.h"

MainWindow::MainWindow(QWidget* parent) : QMainWindow(parent) {
  const int numAxes = constants::kMaxAxes; // 14
  const int history = constants::kDefaultHistoryLength;

  _model = new ForceModel(numAxes, history, this);
  _dataSource = new MockForceDataSource(numAxes, this);

  buildUi();
  connectSignals();

  // default selection update
  onAxesSelectionChanged(_axisSelector->selectedAxes());

  _dataSource->setSampleIntervalMs(constants::kDefaultSampleIntervalMs);
  _dataSource->start();
}

MainWindow::~MainWindow() { _dataSource->stop(); }

void MainWindow::buildUi() {
  _axisSelector = new AxisSelectorWidget(constants::kMaxAxes, this);
  _chart = new ChartWidget(_model, this);

  _tableModel = new ForceTableModel(_model, this);
  _table = new QTableView(this);
  _table->setModel(_tableModel);
  _table->horizontalHeader()->setStretchLastSection(true);
  _table->verticalHeader()->setVisible(false);

  auto* central = new QWidget(this);
  auto* layout = new QVBoxLayout(central);

  // Toolbar
  auto* toolbar = addToolBar("Controls");
  toolbar->setMovable(false);
  auto* sampleLabel = new QLabel("Interval(ms):", toolbar);
  auto* intervalSpin = new QSpinBox(toolbar);
  intervalSpin->setRange(5, 1000);
  intervalSpin->setValue(constants::kDefaultSampleIntervalMs);
  toolbar->addWidget(sampleLabel);
  toolbar->addWidget(intervalSpin);

  connect(intervalSpin, QOverload<int>::of(&QSpinBox::valueChanged), this, [this](int v) {
    if (_dataSource) _dataSource->setSampleIntervalMs(v);
  });

  layout->addWidget(_chart, /*stretch*/ 4);
  layout->addWidget(_table, /*stretch*/ 1);

  central->setLayout(layout);
  setCentralWidget(central);

  // Dock for axis selector
  auto* dock = new QDockWidget("Axes", this);
  dock->setWidget(_axisSelector);
  addDockWidget(Qt::LeftDockWidgetArea, dock);

  statusBar()->showMessage("Running mock data source");
}

void MainWindow::connectSignals() {
  connect(_axisSelector, &AxisSelectorWidget::selectionChanged, this, &MainWindow::onAxesSelectionChanged);
  connect(_dataSource, SIGNAL(sampleReady(QVector<double>)), this, [this](const QVector<double>& v) {
    _model->appendSample(v);
  });
  connect(_model, &ForceModel::updated, this, &MainWindow::onModelUpdated);
}

void MainWindow::onAxesSelectionChanged(const QVector<int>& axes) {
  if (_chart) _chart->setVisibleAxes(axes);
}

void MainWindow::onModelUpdated() {
  if (_chart) _chart->refresh();
  if (_tableModel) {
    // More efficient to emit dataChanged, but for simplicity reset
    _tableModel->beginResetModel();
    _tableModel->endResetModel();
  }
}
