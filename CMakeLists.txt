cmake_minimum_required(VERSION 3.16)

project(ForceFeedbackMonitor LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTORCC ON)

find_package(Qt5 5.12.9 REQUIRED COMPONENTS Widgets Charts)

add_executable(${PROJECT_NAME}
    src/main.cpp
    src/MainWindow.cpp
    src/MainWindow.h
)

target_link_libraries(${PROJECT_NAME} PRIVATE
    Qt5::Widgets
    Qt5::Charts
)

if(MSVC)
    target_compile_options(${PROJECT_NAME} PRIVATE /utf-8)
endif()
