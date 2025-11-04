#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QtCharts/QChartView>
#include <QtCharts/QLineSeries>
#include <QtCharts/QValueAxis>
#include <QtWidgets/QComboBox>
#include <QtWidgets/QLabel>
#include <QtWidgets/QMainWindow>

QT_BEGIN_NAMESPACE
class QTableWidget;
class QTimer;
class QVBoxLayout;
QT_END_NAMESPACE

QT_CHARTS_USE_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = nullptr);
    ~MainWindow() override;

private slots:
    void handleSelectionChanged(int index);
    void updateData();

private:
    struct HandleInfo
    {
        QString axis;
        QString name;
        QString unit;
        double minValue;
        double maxValue;
    };

    void setupUi();
    void setupTable();
    void setupCharts();
    void setActiveHandle(int index);
    void appendPoint(QLineSeries *series, qreal value);

    QVector<HandleInfo> m_handles;
    QComboBox *m_handleSelector;
    QLabel *m_activeHandleLabel;
    QLabel *m_totalForceLabel;
    QLabel *m_axialForceLabel;
    QLabel *m_lateralForceLabel;
    QLabel *m_handleForceLabel;
    QLabel *m_handleUnitLabel;
    QVBoxLayout *m_leftColumn;

    QChartView *m_distalChartView;
    QChartView *m_handleChartView;
    QLineSeries *m_distalSeries;
    QLineSeries *m_handleSeries;
    QValueAxis *m_distalAxisY;
    QValueAxis *m_handleAxisY;

    QTimer *m_dataTimer;
    qreal m_timeElapsed;
};

#endif // MAINWINDOW_H
