set(CORE_SOURCES
  ${CMAKE_CURRENT_LIST_DIR}/ForceProvider.h
  ${CMAKE_CURRENT_LIST_DIR}/MockForceProvider.h
  ${CMAKE_CURRENT_LIST_DIR}/MockForceProvider.cpp
  ${CMAKE_CURRENT_LIST_DIR}/ForceHistoryBuffer.h
  ${CMAKE_CURRENT_LIST_DIR}/ForceHistoryBuffer.cpp
  ${CMAKE_CURRENT_LIST_DIR}/ForceDataModel.h
  ${CMAKE_CURRENT_LIST_DIR}/ForceDataModel.cpp
)

add_library(force_core ${CORE_SOURCES})

target_include_directories(force_core PUBLIC ${CMAKE_CURRENT_LIST_DIR})

# Threads for sampling thread
find_package(Threads REQUIRED)

target_link_libraries(force_core PUBLIC Threads::Threads)

# On MSVC, enable multi-processor compilation and warnings
if (MSVC)
  target_compile_options(force_core PRIVATE /W4 /permissive- /MP)
else()
  target_compile_options(force_core PRIVATE -Wall -Wextra -Wpedantic)
endif()