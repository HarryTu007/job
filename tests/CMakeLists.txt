set(TEST_SOURCES
  ${CMAKE_CURRENT_LIST_DIR}/test_main.cpp
  ${CMAKE_CURRENT_LIST_DIR}/test_core.cpp
)

add_executable(core_tests ${TEST_SOURCES})

target_link_libraries(core_tests PRIVATE force_core)

target_include_directories(core_tests PRIVATE ${CMAKE_CURRENT_LIST_DIR} ${CMAKE_CURRENT_LIST_DIR}/../src/core)

add_test(NAME core_tests COMMAND core_tests)