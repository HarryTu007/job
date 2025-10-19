## ForceFeedbackViewer

**功能**
- **轴选择**: 在 1~14 个轴中选择需要显示的轴。
- **实时数值**: 表格实时显示各轴的力反馈数值。
- **历史曲线**: 使用 Qt Charts 绘制所选轴的历史曲线。
- **采样频率**: 工具栏可调整采样间隔（毫秒）。

**架构**
- **数据源抽象 (`IForceDataSource`)**: 统一的数据采集接口，便于替换为真实硬件实现。
- **模拟数据源 (`MockForceDataSource`)**: 产生可控的正弦+噪声数据，便于联调与演示。
- **数据模型 (`ForceModel`)**: 每轴一个环形历史缓冲，维护当前值与历史序列。
- **历史曲线组件 (`ChartWidget`)**: 基于 Qt Charts，展示多轴历史曲线。
- **轴选择组件 (`AxisSelectorWidget`)**: 选择需要显示的轴集合。
- **实时表格 (`ForceTableModel`)**: `QAbstractTableModel` 展示当前值。
- **主窗体 (`MainWindow`)**: 组装 UI 与数据通路，提供采样间隔控制。

---

## Windows 编译（VS 2022 + Qt 5.12.9）

前置条件：
- 已安装 Visual Studio 2022（C++ 桌面开发组件）。
- 已安装 Qt 5.12.9 对应 MSVC x64 工具链（例如 `msvc2017_64`）。
- 已安装 CMake ≥ 3.16。

设置环境：
- 打开 “x64 Native Tools Command Prompt for VS 2022”。
- 确认 Qt 目录（示例）：`C:\Qt\5.12.9\msvc2017_64`。
- `Qt5_DIR` 指向 `lib/cmake/Qt5` 目录。

配置与编译：
```bash
cmake -S . -B build -G "Visual Studio 17 2022" -A x64 \
  -DQt5_DIR="C:/Qt/5.12.9/msvc2017_64/lib/cmake/Qt5"
cmake --build build --config Release
```

运行时部署（拷贝 Qt 依赖）：
```bash
"C:/Qt/5.12.9/msvc2017_64/bin/windeployqt.exe" build/Release/ForceFeedbackViewer.exe
```

提示：
- 也可在 VS 中打开 `build/ForceFeedbackViewer.sln` 进行开发与调试。
- 如果使用 Debug 配置，请对 Debug 可执行文件运行 `windeployqt`，或将环境变量/Qt bin 目录加入 PATH。

---

## 使用说明

- 启动后，左侧 Dock 面板为 **轴选择**，可勾选需要显示的轴（1~14）。
- 中部为 **历史曲线**，显示已选轴的历史数据；纵轴为力值，横轴为样本序号。
- 底部为 **实时表格**，显示每个轴的当前力反馈值。
- 工具栏的 **Interval(ms)** 可调整采样间隔（默认 20ms）。

---

## 替换为真实硬件数据源

- 在 `src/data` 下实现一个派生自 `IForceDataSource` 的类（如 `HidForceDataSource` 或 `SerialForceDataSource`）。
- 在 `MainWindow` 中替换 `MockForceDataSource` 的实例化为你的数据源即可：
  - 需要在 `sampleReady(const QVector<double>& values)` 信号中按固定轴数（1~14）周期性发出采样数据。
  - 可以通过 `setSampleIntervalMs(int)` 控制采样频率。

---

## 工程结构

```
src/
  app/                # MainWindow
  common/             # 常量定义
  data/               # 数据源接口与实现
  model/              # 数据模型（环形历史缓冲）
  ui/                 # UI 组件（曲线、表格、轴选择）
CMakeLists.txt
```

默认参数可在 `src/common/Constants.h` 中调整：
- `kMaxAxes`：最大轴数（默认 14）
- `kDefaultHistoryLength`：每轴历史样本数（默认 512）
- `kDefaultSampleIntervalMs`：默认采样间隔毫秒（默认 20）
