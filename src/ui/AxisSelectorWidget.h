#pragma once

#include <QWidget>
#include <QVector>
#include <QCheckBox>
#include <QGridLayout>

class AxisSelectorWidget : public QWidget {
  Q_OBJECT
public:
  explicit AxisSelectorWidget(int numAxes, QWidget* parent = nullptr);

  QVector<int> selectedAxes() const;

signals:
  void selectionChanged(const QVector<int>& axes);

private slots:
  void onAnyChanged(int);

private:
  QVector<QCheckBox*> _boxes;
};