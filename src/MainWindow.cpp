#include "MainWindow.h"

#include <QtCharts/QChart>
#include <QtCharts/QValueAxis>
#include <QtCore/QRandomGenerator>
#include <QtCore/QTimer>
#include <QtWidgets/QAbstractItemView>
#include <QtWidgets/QComboBox>
#include <QtWidgets/QFrame>
#include <QtWidgets/QGroupBox>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLabel>
#include <QtWidgets/QSizePolicy>
#include <QtWidgets/QTableWidget>
#include <QtWidgets/QVBoxLayout>

#include <cmath>

namespace
{
    constexpr int SampleCount = 120;
    constexpr qreal DistalRange = 20.0; // grams
    constexpr qreal HandleRange = 10.0; // newtons
}

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , m_handleSelector(new QComboBox(this))
    , m_activeHandleLabel(new QLabel(this))
    , m_totalForceLabel(new QLabel(QStringLiteral("0.0"), this))
    , m_axialForceLabel(new QLabel(QStringLiteral("0.0"), this))
    , m_lateralForceLabel(new QLabel(QStringLiteral("0.0"), this))
    , m_handleForceLabel(new QLabel(QStringLiteral("0.0"), this))
    , m_handleUnitLabel(new QLabel(QStringLiteral("N"), this))
    , m_distalChartView(new QChartView(this))
    , m_handleChartView(new QChartView(this))
    , m_distalSeries(new QLineSeries(this))
    , m_handleSeries(new QLineSeries(this))
    , m_dataTimer(new QTimer(this))
    , m_timeElapsed(0.0)
{
    m_handles = {
        {QStringLiteral("1轴"), QStringLiteral(u"大鞭 P/A"), QStringLiteral("Nm"), 0.1, 0.2},
        {QStringLiteral("10轴"), QStringLiteral(u"夹子大臂开闭"), QStringLiteral("Nm"), 0.1, 0.2},
        {QStringLiteral("4轴"), QStringLiteral(u"套管前进退"), QStringLiteral("N"), 5.0, 10.0},
        {QStringLiteral("7轴"), QStringLiteral(u"输送导管前进退"), QStringLiteral("N"), 5.0, 10.0}
    };

    setupUi();
    setupCharts();
    setupTable();

    connect(m_handleSelector, QOverload<int>::of(&QComboBox::currentIndexChanged),
            this, &MainWindow::handleSelectionChanged);
    connect(m_dataTimer, &QTimer::timeout, this, &MainWindow::updateData);

    m_dataTimer->start(150);
    setActiveHandle(0);
}

MainWindow::~MainWindow() = default;

void MainWindow::setupUi()
{
    auto *central = new QWidget(this);
    auto *rootLayout = new QHBoxLayout(central);
    rootLayout->setContentsMargins(16, 16, 16, 16);
    rootLayout->setSpacing(24);

    // Left column: selector, label, charts, table
    m_leftColumn = new QVBoxLayout();
    m_leftColumn->setSpacing(16);

    auto *selectorLayout = new QHBoxLayout();
    selectorLayout->addWidget(new QLabel(QStringLiteral(u"当前手柄"), this));
    m_handleSelector->setSizePolicy(QSizePolicy::Expanding, QSizePolicy::Fixed);
    for (const auto &handle : m_handles) {
        m_handleSelector->addItem(QStringLiteral("%1 - %2").arg(handle.axis, handle.name));
    }
    selectorLayout->addWidget(m_handleSelector);
    selectorLayout->addStretch();
    m_leftColumn->addLayout(selectorLayout);

    auto *activeLabel = new QLabel(QStringLiteral(u"操控手柄"), this);
    activeLabel->setStyleSheet(QStringLiteral("font-size: 18pt; font-weight: 600;"));
    m_leftColumn->addWidget(activeLabel);

    m_activeHandleLabel->setStyleSheet(QStringLiteral("font-size: 22pt; color: #f3c305; font-weight: 700;"));
    m_activeHandleLabel->setAlignment(Qt::AlignLeft | Qt::AlignVCenter);
    m_leftColumn->addWidget(m_activeHandleLabel);

    // Charts stacked vertically
    auto *chartContainer = new QVBoxLayout();
    chartContainer->setSpacing(12);

    auto *distalTitle = new QLabel(QStringLiteral(u"输送导管头端"), this);
    distalTitle->setStyleSheet(QStringLiteral("font-size: 14pt;"));
    chartContainer->addWidget(distalTitle);
    chartContainer->addWidget(m_distalChartView, 1);

    auto *handleTitle = new QLabel(QStringLiteral(u"操控手柄"), this);
    handleTitle->setStyleSheet(QStringLiteral("font-size: 14pt;"));
    chartContainer->addWidget(handleTitle);
    chartContainer->addWidget(m_handleChartView, 1);

    m_leftColumn->addLayout(chartContainer, 2);

    rootLayout->addLayout(m_leftColumn, 3);

    // Right column: metrics panel
    auto *rightColumn = new QVBoxLayout();
    rightColumn->setSpacing(16);

    auto createValueBox = [&](const QString &title, QLabel *valueLabel, const QString &unit) {
        auto *box = new QGroupBox(title, this);
        box->setStyleSheet(QStringLiteral("QGroupBox { font-size: 14pt; font-weight: 600; }"));

        auto *layout = new QVBoxLayout(box);
        valueLabel->setAlignment(Qt::AlignCenter);
        valueLabel->setStyleSheet(QStringLiteral("font-size: 20pt; font-weight: 700; color: #f3c305;"));
        auto *unitLabel = new QLabel(unit, this);
        unitLabel->setAlignment(Qt::AlignCenter);
        unitLabel->setStyleSheet(QStringLiteral("font-size: 11pt; color: #bbbbbb;"));

        layout->addWidget(valueLabel);
        layout->addWidget(unitLabel);

        rightColumn->addWidget(box);
    };

    createValueBox(QStringLiteral(u"合力"), m_totalForceLabel, QStringLiteral("g"));
    createValueBox(QStringLiteral(u"轴向力"), m_axialForceLabel, QStringLiteral("g"));
    createValueBox(QStringLiteral(u"横向力"), m_lateralForceLabel, QStringLiteral("g"));

    auto *forceBox = new QGroupBox(QStringLiteral(u"力值"), this);
    forceBox->setStyleSheet(QStringLiteral("QGroupBox { font-size: 14pt; font-weight: 600; }"));
    auto *forceLayout = new QVBoxLayout(forceBox);
    m_handleForceLabel->setAlignment(Qt::AlignCenter);
    m_handleForceLabel->setStyleSheet(QStringLiteral("font-size: 24pt; font-weight: 700; color: #f3c305;"));
    m_handleUnitLabel->setAlignment(Qt::AlignCenter);
    m_handleUnitLabel->setStyleSheet(QStringLiteral("font-size: 12pt; color: #bbbbbb;"));
    forceLayout->addWidget(m_handleForceLabel);
    forceLayout->addWidget(m_handleUnitLabel);
    rightColumn->addWidget(forceBox);

    rightColumn->addStretch(1);

    rootLayout->addLayout(rightColumn, 1);

    setCentralWidget(central);
    setWindowTitle(QStringLiteral(u"力反馈监测"));
    resize(1280, 720);
}

void MainWindow::setupTable()
{
    auto *tableTitle = new QLabel(QStringLiteral(u"表1 螺控手柄界面信息要求表"), this);
    tableTitle->setStyleSheet(QStringLiteral("font-size: 13pt; font-weight: 600;"));
    m_leftColumn->addWidget(tableTitle);

    auto *table = new QTableWidget(static_cast<int>(m_handles.size()), 4, this);
    table->setEditTriggers(QAbstractItemView::NoEditTriggers);
    table->horizontalHeader()->setStretchLastSection(true);
    table->verticalHeader()->setVisible(false);
    table->setHorizontalHeaderLabels({QStringLiteral(u"轴"), QStringLiteral(u"手柄名称"),
                                      QStringLiteral(u"输出力单位"), QStringLiteral(u"力值参考范围")});

    for (int row = 0; row < m_handles.size(); ++row) {
        const auto &info = m_handles[row];
        table->setItem(row, 0, new QTableWidgetItem(info.axis));
        table->setItem(row, 1, new QTableWidgetItem(info.name));
        table->setItem(row, 2, new QTableWidgetItem(info.unit));
        table->setItem(row, 3,
                       new QTableWidgetItem(QStringLiteral("%1 - %2 %3")
                                                .arg(info.minValue, 0, 'f', 1)
                                                .arg(info.maxValue, 0, 'f', 1)
                                                .arg(info.unit)));
    }

    table->setMaximumHeight(200);
    m_leftColumn->addWidget(table);
}

void MainWindow::setupCharts()
{
    auto *distalChart = new QChart();
    distalChart->legend()->hide();
    distalChart->addSeries(m_distalSeries);
    distalChart->setBackgroundRoundness(8);
    distalChart->setBackgroundBrush(QColor(16, 18, 24));
    distalChart->setTitleBrush(QBrush(Qt::white));

    auto *distalAxisX = new QValueAxis();
    distalAxisX->setRange(0, SampleCount);
    distalAxisX->setLabelsVisible(false);
    distalAxisX->setGridLineVisible(false);

    m_distalAxisY = new QValueAxis();
    m_distalAxisY->setRange(0, DistalRange);
    m_distalAxisY->setTitleText(QStringLiteral("g"));
    m_distalAxisY->setLabelFormat("%.0f");

    distalChart->addAxis(distalAxisX, Qt::AlignBottom);
    distalChart->addAxis(m_distalAxisY, Qt::AlignLeft);
    m_distalSeries->attachAxis(distalAxisX);
    m_distalSeries->attachAxis(m_distalAxisY);
    m_distalSeries->setUseOpenGL(true);

    m_distalChartView->setChart(distalChart);
    m_distalChartView->setRenderHint(QPainter::Antialiasing);

    auto *handleChart = new QChart();
    handleChart->legend()->hide();
    handleChart->addSeries(m_handleSeries);
    handleChart->setBackgroundRoundness(8);
    handleChart->setBackgroundBrush(QColor(16, 18, 24));
    handleChart->setTitleBrush(QBrush(Qt::white));

    auto *handleAxisX = new QValueAxis();
    handleAxisX->setRange(0, SampleCount);
    handleAxisX->setLabelsVisible(false);
    handleAxisX->setGridLineVisible(false);

    m_handleAxisY = new QValueAxis();
    m_handleAxisY->setRange(0, HandleRange);
    m_handleAxisY->setTitleText(QStringLiteral("N"));
    m_handleAxisY->setLabelFormat("%.0f");

    handleChart->addAxis(handleAxisX, Qt::AlignBottom);
    handleChart->addAxis(m_handleAxisY, Qt::AlignLeft);
    m_handleSeries->attachAxis(handleAxisX);
    m_handleSeries->attachAxis(m_handleAxisY);
    m_handleSeries->setUseOpenGL(true);

    m_handleChartView->setChart(handleChart);
    m_handleChartView->setRenderHint(QPainter::Antialiasing);
}

void MainWindow::setActiveHandle(int index)
{
    if (index < 0 || index >= m_handles.size()) {
        return;
    }

    const auto &info = m_handles[index];
    m_activeHandleLabel->setText(QStringLiteral("%1 %2").arg(info.axis, info.name));
    m_handleUnitLabel->setText(info.unit);

    if (m_handleAxisY) {
        const double span = qMax(0.5, info.maxValue - info.minValue);
        const double minRange = qMax(0.0, info.minValue - span * 0.25);
        const double maxRange = info.maxValue + span * 0.25;
        m_handleAxisY->setRange(minRange, maxRange);
        m_handleAxisY->setTitleText(info.unit);
        if (info.unit == QStringLiteral("Nm")) {
            m_handleAxisY->setLabelFormat("%.2f");
        } else {
            m_handleAxisY->setLabelFormat("%.0f");
        }
    }
}

void MainWindow::handleSelectionChanged(int index)
{
    setActiveHandle(index);
}

void MainWindow::appendPoint(QLineSeries *series, qreal value)
{
    auto points = series->pointsVector();
    if (points.size() >= SampleCount) {
        points.pop_front();
        for (auto &point : points) {
            point.setX(point.x() - 1.0);
        }
    }
    points.append(QPointF(static_cast<qreal>(points.size()), value));
    series->replace(points);

    auto *chart = series->chart();
    if (chart) {
        auto *axisX = qobject_cast<QValueAxis *>(chart->axisX());
        if (axisX) {
            axisX->setRange(0, qMax(points.size(), SampleCount));
        }
    }
}

void MainWindow::updateData()
{
    m_timeElapsed += 0.15;
    const auto *handleInfo = &m_handles[qMax(0, m_handleSelector->currentIndex())];

    auto generateValue = [&](double base, double amplitude, double frequency) {
        const double phaseNoise = QRandomGenerator::global()->generateDouble() * 0.3;
        const double noise = (QRandomGenerator::global()->generateDouble() - 0.5) * amplitude * 0.2;
        return base + amplitude * std::sin(frequency * m_timeElapsed + phaseNoise) + noise;
    };

    const double distalBase = DistalRange * 0.45;
    const double distalAmplitude = DistalRange * 0.4;
    const double distalValue = qBound(0.0, generateValue(distalBase, distalAmplitude, 0.9), DistalRange);

    const double handleBase = (handleInfo->minValue + handleInfo->maxValue) / 2.0;
    const double handleAmplitude = (handleInfo->maxValue - handleInfo->minValue) / 2.0;
    const double handleValue = qBound(handleInfo->minValue,
                                      generateValue(handleBase, handleAmplitude, 1.3),
                                      handleInfo->maxValue);

    appendPoint(m_distalSeries, distalValue);
    appendPoint(m_handleSeries, handleValue);

    const double axial = distalValue * 0.6;
    const double lateral = distalValue * 0.4;
    const double total = std::sqrt(axial * axial + lateral * lateral);

    m_totalForceLabel->setText(QString::number(total, 'f', 1));
    m_axialForceLabel->setText(QString::number(axial, 'f', 1));
    m_lateralForceLabel->setText(QString::number(lateral, 'f', 1));
    m_handleForceLabel->setText(QString::number(handleValue, 'f', 2));
}
