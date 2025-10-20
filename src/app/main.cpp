#include <QApplication>

#include "../core/ForceDataModel.h"
#include "../core/MockForceProvider.h"
#include "MainWindow.h"

int main(int argc, char** argv) {
  QApplication app(argc, argv);

  auto provider = std::make_shared<MockForceProvider>(14, MockForceProvider::defaultTimeProvider());
  ForceDataModel model(provider, 100.0, 30.0);
  model.start();

  MainWindow w(&model);
  w.resize(1200, 700);
  w.show();

  const int ret = app.exec();
  model.stop();
  return ret;
}
