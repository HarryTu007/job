cmake_minimum_required(VERSION 3.16)

project(ForceFeedbackViewer LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)

option(BUILD_GUI "Build Qt GUI application" ON)
option(BUILD_TESTS "Build tests" ON)

# Enable compile_commands.json for tooling
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

add_subdirectory(src/core)

if (BUILD_GUI)
  add_subdirectory(src/app)
endif()

if (BUILD_TESTS)
  enable_testing()
  add_subdirectory(tests)
endif()