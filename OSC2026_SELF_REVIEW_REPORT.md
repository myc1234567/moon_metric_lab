# OSC 2026 参赛项目自查与验收准备报告

## 总体判断

本报告只记录仓库和命令可以证明的事实，不把未执行的远端 CI 或未确认的发布状态写成“已通过”。项目模块名为 `myc1234567/moon_metric_lab`，当前发布版本为 `0.1.2`；上一版 `0.1.1` 也已存在于 mooncakes.io。

组委会邮件要求已拆解为以下工程任务：

1. CI 覆盖格式化、检查、构建和测试；
2. 按根模块名准备 mooncakes.io 发布；
3. README 清楚说明安装、依赖接入、使用和示例；
4. 补充多折统计与显著性/效应量比较；
5. 清理 `_build` 产物，修复新工具链编译警告并提交格式化源码。

申报书文件不属于本轮同步范围，未纳入本轮修订提交。

## 已检查的证据

| 检查项 | 本地证据 | 结果 |
| --- | --- | --- |
| MoonBit 工具链 | `moon version --all`：MoonBit 0.1.20260807，moonc 0.10.7 | 通过 |
| 模块配置 | `moon.mod` 使用 `myc1234567/moon_metric_lab`、Apache-2.0、README 和仓库地址 | 通过 |
| 严格编译 | `moon check --deny-warn` | 通过 |
| Wasm-GC 测试 | `moon test --target wasm-gc --deny-warn`，43/43 | 通过 |
| Wasm 测试 | `moon test --target wasm --deny-warn`，43/43 | 通过 |
| 格式与接口 | `moon fmt --check`、`moon info`、生成接口已更新 | 通过 |
| 运行示例 | `moon run --target wasm-gc cmd/main` | 通过 |
| 代码规模 | 3,134 行有效 MoonBit 源码，排除生成接口和构建产物 | 达标参考 |
| 许可证 | 根目录 `LICENSE` 为 Apache-2.0，来源边界见 `THIRD_PARTY_NOTICES.md` | 通过 |
| 数据边界 | `BENCHMARKS.md` 记录公开数据集来源、缩减样例和不再分发原始数据的约束 | 通过 |
| 构建产物 | `.gitignore` 忽略 `_build/`，已从 Git 跟踪集合移除 | 通过 |
| 远端 CI | GitHub Actions `f828aca` 的 Linux/macOS/Windows 三个矩阵任务均 Success | 通过 |
| 发布与安装 | `moon publish` 发布 `0.1.2`；干净消费者成功 `moon add`、严格检查和 Wasm-GC 测试 | 通过 |

## 功能范围与新增能力

- `classification`：二分类、多分类、混淆矩阵、ROC/PR 和阈值扫描；
- `regression`：连续误差与鲁棒损失；
- `clustering`：内部聚类分离度和外部标签一致性；
- `ranking`：DCG/NDCG、MRR、MAP；
- `report` 与 `visualization`：模型对比、差异报告和多格式导出；
- `hypothesis_testing`：均值、方差、Welch t 统计量、多折均值、配对均值差、标准误和 Cohen's d；
- CLI 和 examples 提供可运行展示，README 代码块可作为文档测试。

新增的统计 API 实现放在正式源文件 `hypothesis_testing/statistics.mbt` 与 `hypothesis_testing/effect_sizes.mbt`，不再放在测试后缀文件中，保证发布包的公开接口真实可用。

## CI 与发布准备

`.github/workflows/test.yml` 现在覆盖 Linux、macOS、Windows，并执行：

- `moon fmt --check`；
- `moon check --target all --deny-warn`；
- `moon test --target all --deny-warn`；
- Wasm-GC CLI showcase；
- `moon info` 后检查 `pkg.generated.mbti` 无差异。

本地机器没有 Node.js、gcc、clang 或 MSVC，因此 JS/Native 的运行测试无法在本机完成；CI runner 应负责完成这些目标。远端 CI 最后一次运行结果需在推送后从 GitHub Actions 和 Gitlink 页面复核。

`moon publish --dry-run` 先完成了 `0.1.2` 的打包检查；随后 `moon publish` 返回 200 OK。干净消费者模块已用 `moon add myc1234567/moon_metric_lab@0.1.2` 安装，并通过 `moon check --deny-warn` 和 `moon test --target wasm-gc --deny-warn`。

## 远端仓库核验

- GitHub：`https://github.com/myc1234567/moon_metric_lab`，默认分支 `main`；
- Gitlink：`https://gitlink.org.cn/myc1234567/moon_metric_lab`，默认分支 `main`；
- GitHub 和 Gitlink 的 `main` 当前均指向 `f828aca`，并包含本轮修订；
- 推送时只同步代码、README、CI、许可证说明、测试和构建清理，不同步申报书文件。

## 最终结论

本轮本地严格验收、GitHub Actions 全矩阵 CI、mooncakes.io 发布和干净消费者安装均已完成并通过。GitHub/Gitlink 默认分支均为 `main` 且提交一致；仓库中没有 `_build` 产物，README、许可证、CI、测试和来源边界说明已同步。申报书未纳入本轮修改。
