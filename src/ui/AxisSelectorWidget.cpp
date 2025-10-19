#include "AxisSelectorWidget.h"

AxisSelectorWidget::AxisSelectorWidget(int numAxes, QWidget* parent)
    : QWidget(parent) {
  auto* layout = new QGridLayout(this);
  layout->setContentsMargins(0, 0, 0, 0);
  int cols = 7; // 1..14 displayed as 2 rows of 7
  for (int i = 0; i < numAxes; ++i) {
    auto* box = new QCheckBox(QString::number(i + 1), this);
    box->setChecked(i < 4); // default select first few axes
    connect(box, SIGNAL(stateChanged(int)), this, SLOT(onAnyChanged(int)));
    _boxes.push_back(box);
    int r = i / cols;
    int c = i % cols;
    layout->addWidget(box, r, c);
  }
  setLayout(layout);
}

QVector<int> AxisSelectorWidget::selectedAxes() const {
  QVector<int> out;
  for (int i = 0; i < _boxes.size(); ++i) {
    if (_boxes[i]->isChecked()) out.push_back(i);
  }
  return out;
}

void AxisSelectorWidget::onAnyChanged(int) {
  emit selectionChanged(selectedAxes());
}
