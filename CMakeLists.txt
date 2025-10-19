cmake_minimum_required(VERSION 3.16)
project(ForceFeedbackViewer LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Enable Qt's automatic processing
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

# Qt5
find_package(Qt5 5.12 REQUIRED COMPONENTS Widgets Charts)

add_definitions(-DQT_NO_KEYWORDS)

set(SRC
  src/main.cpp
  src/app/MainWindow.cpp
  src/ui/AxisSelectorWidget.cpp
  src/ui/ChartWidget.cpp
  src/model/ForceModel.cpp
  src/data/MockForceDataSource.cpp
  src/ui/ForceTableModel.cpp
)

set(HDR
  src/app/MainWindow.h
  src/ui/AxisSelectorWidget.h
  src/ui/ChartWidget.h
  src/model/ForceModel.h
  src/data/IForceDataSource.h
  src/data/MockForceDataSource.h
  src/ui/ForceTableModel.h
  src/common/Constants.h
)

# Use WIN32 on Windows to avoid console window
add_executable(${PROJECT_NAME} WIN32 ${SRC} ${HDR})

target_include_directories(${PROJECT_NAME} PRIVATE src)

target_link_libraries(${PROJECT_NAME}
  PRIVATE
  Qt5::Widgets
  Qt5::Charts
)
