# 可复现基准与边界测试

本文件记录 MoonMetricLab 的真实数据基准来源、缩减后的可分发样例和复现方式。仓库不打包第三方数据集原文件，避免误带入未知再分发许可；示例数组只保留公开数据集的少量数值，用于验证指标方向和边界行为，不宣称替代完整数据集。

## 基准矩阵

| 场景 | 公开数据来源 | 本项目验证重点 | 当前仓库入口 |
| --- | --- | --- | --- |
| 二分类 | UCI Breast Cancer Wisconsin (Diagnostic) | accuracy、F1、ROC-AUC、Brier、阈值扫描 | `classification/` 与 `examples/binary_demo/` |
| 多分类 | UCI Iris | macro/micro/weighted 汇总、混淆矩阵 | `classification/` |
| 回归 | UCI Wine Quality | MAE、RMSE、R²、Huber、Pinball | `regression/` |
| 聚类 | UCI Iris / Wine Quality 的无监督划分 | Silhouette、CH、DB、ARI、NMI、FMI | `clustering/` |
| 排序 | LETOR 4.0 MQ2008（仅引用数据集，不随库分发） | DCG/NDCG@K、MRR、MAP | `ranking/` |
| 发布门禁 | 上述场景的四折紧凑夹具 | 均值、标准差、基线/候选差异、稳定性与部署决策 | `workflow/` 与 `cmd/main/` |

## 复现协议

1. 将数据集转换为内存中的 `Array[Int]` 或 `Array[Double]`，明确记录标签编码、缺失值处理和排序方向。
2. 对每个场景固定数据切分、随机种子（如使用外部切分器）和 `k`/阈值，先运行核心指标，再运行报告渲染。
3. 运行 `moon test --target wasm-gc`，再运行 `moon run --target wasm-gc cmd/main` 检查端到端输出。
4. 跨平台发布前，分别在具备 Node.js 和 C 编译器的环境运行 `moon test --target all`；本地环境缺少这些工具时，不把“未执行”写成“已通过”。

## 真实应用工作链

`workflow` 包把一次模型评估落成可审计的发布证据：训练任务把每个折或随机种子的指标写入 `FoldObservation`，`summarize` 计算均值、总体标准差、最小值和最大值，`compare` 按指标方向识别候选改进，`evaluate_gate` 检查最低质量、最高误差和稳定性，最后 `deployment_report` 输出 Markdown，`summaries_to_csv` 输出仪表盘可读的 CSV。

仓库夹具覆盖三个真实任务形状：UCI Breast Cancer Wisconsin 二分类、UCI Iris 多分类、UCI Wine Quality 回归，以及 LETOR MQ2008 排序。夹具只保留用于验证数据形状和决策逻辑的少量数字，不替代外部数据集，也不改变其许可边界。测试同时验证缺失指标、重复折编号、空输入、跨任务比较、无共同指标、CSV 引号转义和不稳定候选拒绝等边界。

## 已覆盖的边界

核心测试覆盖空输入、长度不一致、越界切片、单类别分类、零方差、非法概率/阈值、负 `k`、单聚类、无效 delta、重复标签和报告任务不匹配。新增的 `hypothesis_testing` 测试还覆盖配对样本长度不一致、样本量不足和零方差效应量。

## 许可证与数据边界

指标公式是公开数学定义；本仓库的 MoonBit 实现按根目录 Apache-2.0 许可证发布。上表数据集均为外部资料，使用者必须遵守对应数据集的条款；仓库只提供来源说明和小型测试样例，不声称拥有这些数据集的版权。
