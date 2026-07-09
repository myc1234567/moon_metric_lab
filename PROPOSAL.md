# moon_metric_lab 项目申报书

**基本信息**
- 项目名称：MoonMetricLab：机器学习评估指标与实验对比框架
- 参赛者 / 创作者：mycmyc (莫延春 / 2412158932@qq.com / GitHub: myc1234567)
- 联系方式：2412158932@qq.com
- GitHub 仓库链接：https://github.com/myc1234567/moon_metric_lab
- Gitlink 仓库链接：https://gitlink.org.cn/mycmyc/moon_metric_lab
- 项目方向：工程基础设施与应用生态 / 高性能通用科学计算与机器学习评估基础库
- 是否为原创与移植交叉项目：否（完全原创设计与实现：本项目全功能 2,897 行源文件全权由创作者 mycmyc 使用纯 MoonBit 语言自底向上从零原创编写，**未移植、未复制代码、未引用**任何第三方开源软件如 `scikit-learn` 或 `SciPy` 的底层源码；项目中所涵盖的统计学公式仅参考公开的无版权争议数学原理与数理统计公式定义，算法架构、零拷贝视图、防溢出保护与底层逻辑实现均为 100% 独立自主创新）

**项目简介**

MoonMetricLab (月度度量实验舱) 是一个面向 MoonBit 现代开发者与 AI 时代的纯函数式、零外部依赖机器学习模型评估与多轮实验对比分析框架。本项目旨在填补 MoonBit 生态中 (`mooncakes.io`) 缺乏标准化模型度量工具与基准评估框架的空白。通过纯 MoonBit 原生实现，本项目不仅能对分类、回归、聚类和排序模型提供 30+ 种标准指标与混淆矩阵运算，而且不依赖任何 C/C++ 动态库或庞大的深度学习框架，可无缝编译运行于 `native`、`wasm-gc` 和 `js` 多端，为前端看板、后端批处理服务及边缘设备提供可复用的实验对决与数据报告引擎。

**核心功能范围**
- 提供张量切片视图 `Vector[T]` / `Matrix[T]` 与数值安全容错机制，防止浮点数除零与维度失衡溢出；
- 支持二分类与多分类全面度量：`Accuracy`、`Precision`、`Recall`、`F1` (Macro/Micro/Weighted)、`LogLoss`、`MCC`；
- 支持高级分类可视化分析：`ConfusionMatrix` 自动构建与归一化、分类阈值扫描器、`ROC-PR` 曲线及 AUC 计算；
- 支持连续回归误差与稳健分析：`MAE`、`MSE`、`RMSE`、`R2 Score`、`MAPE`、`Huber Loss`、`Pinball Loss`；
- 支持内外聚类与信息检索评估：`Silhouette Score`、`CH`、`DBI`、`ARI`、`NMI` 以及推荐系统 `NDCG@K`；
- 提供多模型对弈与统计显著性框架：`BenchmarkComparison` 支持多种子/多折均值方差计算与基线绝对值差距 ($\Delta$) 对比；
- 支持多模态可视化导出：终端 ASCII 图表对决、Markdown 标准化评估报告表、自包含交互式 SVG 图表及 JSON/CSV 输出；
- 提供完整的黑盒/白盒测试驱动套件与 `README.mbt.md` 针对性文档测试，确保 100% 可复现。

**创新性与生态价值说明**
相比传统的 Python `scikit-learn` 或 R 语言工具包，`MoonMetricLab` 充分利用 MoonBit 现代代数数据类型 (`enum Error`)、无绑定泛型与纯粹的模块隔离特性，提供极高的类型安全性与极速执行效率。作为 MoonBit 机器学习生态（MoonBit ML Ecosystem）的基础组件，本项目可直接为后续的 MoonBit 训练库、特征工程工具及低代码 BI 系统提供底座支撑。
