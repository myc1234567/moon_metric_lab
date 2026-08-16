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

## 复现协议

1. 将数据集转换为内存中的 `Array[Int]` 或 `Array[Double]`，明确记录标签编码、缺失值处理和排序方向。
2. 对每个场景固定数据切分、随机种子（如使用外部切分器）和 `k`/阈值，先运行核心指标，再运行报告渲染。
3. 运行 `moon test --target wasm-gc`，再运行 `moon run --target wasm-gc cmd/main` 检查端到端输出。
4. 跨平台发布前，分别在具备 Node.js 和 C 编译器的环境运行 `moon test --target all`；本地环境缺少这些工具时，不把“未执行”写成“已通过”。

## 已覆盖的边界

核心测试覆盖空输入、长度不一致、越界切片、单类别分类、零方差、非法概率/阈值、负 `k`、单聚类、无效 delta、重复标签和报告任务不匹配。新增的 `hypothesis_testing` 测试还覆盖配对样本长度不一致、样本量不足和零方差效应量。

## 许可证与数据边界

指标公式是公开数学定义；本仓库的 MoonBit 实现按根目录 Apache-2.0 许可证发布。上表数据集均为外部资料，使用者必须遵守对应数据集的条款；仓库只提供来源说明和小型测试样例，不声称拥有这些数据集的版权。
