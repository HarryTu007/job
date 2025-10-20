# Attempt to find Qt5 (Widgets + Charts)
set(QT_MIN_VERSION 5.12.0)
find_package(Qt5 ${QT_MIN_VERSION} COMPONENTS Widgets Charts QUIET)

if (NOT Qt5_FOUND)
  message(WARNING "Qt5 (Widgets, Charts) not found. Skipping GUI build.")
  return()
endif()

set(APP_SOURCES
  ${CMAKE_CURRENT_LIST_DIR}/main.cpp
  ${CMAKE_CURRENT_LIST_DIR}/MainWindow.h
  ${CMAKE_CURRENT_LIST_DIR}/MainWindow.cpp
)

add_executable(force_viewer ${APP_SOURCES})

target_link_libraries(force_viewer PRIVATE force_core Qt5::Widgets Qt5::Charts)

target_include_directories(force_viewer PRIVATE ${CMAKE_CURRENT_LIST_DIR})

if (MSVC)
  target_compile_options(force_viewer PRIVATE /W4 /permissive- /MP)
else()
  target_compile_options(force_viewer PRIVATE -Wall -Wextra -Wpedantic)
endif()

# On Windows, ensure proper subsystem
if (WIN32)
  set_target_properties(force_viewer PROPERTIES WIN32_EXECUTABLE TRUE)
endif()