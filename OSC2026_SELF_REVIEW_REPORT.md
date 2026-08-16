# OSC 2026 参赛项目自查与最终验收准备报告

## 总体判断

本报告只记录仓库、注册表、CI 和本地命令可以证明的事实，不把“自查通过”写成组委会已经作出的最终裁定。项目模块名为 `myc1234567/moon_metric_lab`，本轮版本为 `0.1.3`；本轮已完成代码增强、双仓库同步、mooncakes.io 发布、干净消费者安装和远端三平台 CI 验证。

组委会邮件中的驳回要求已拆解为以下工程任务：

1. CI 覆盖格式化、检查、构建和测试；
2. 按根模块名发布到 mooncakes.io；
3. README 清楚说明安装、依赖接入、使用和示例；
4. 补充多折统计、显著性/效应量比较及可复现真实场景；
5. 清理 `_build` 产物，修复编译警告并提交格式化源码。

申报书文件不属于本轮同步范围；工作区中已有的申报书和 `PROPOSAL.md` 修改未纳入任何本轮提交或推送。远端历史上已有 `PROPOSAL.md`，本轮不修改、不删除它。

## 验收证据矩阵

| 检查项 | 可复核证据 | 结果 |
| --- | --- | --- |
| MoonBit 工具链 | `moon version --all`：MoonBit 0.1.20260807，moonc 0.10.7 | 通过 |
| 模块配置 | `moon.mod` 使用 `myc1234567/moon_metric_lab`、版本 `0.1.3`、Apache-2.0、README 和 GitHub 仓库地址 | 通过 |
| 严格编译 | `moon check --deny-warn`；本地 `moon check --target all --deny-warn` | 通过 |
| Wasm-GC 测试 | `moon test --target wasm-gc --deny-warn`，54/54 | 通过 |
| Wasm 测试 | `moon test --target wasm --deny-warn`，54/54 | 通过 |
| JS/Native CI | GitHub Actions run #10 的 Ubuntu、macOS、Windows 矩阵任务均 success | 通过 |
| 格式与接口 | `moon fmt --check`、`moon info`、`git diff --exit-code -- '**/pkg.generated.mbti'` | 通过 |
| CLI 工作链 | `moon run --target wasm-gc cmd/main` 输出四折聚合、对比、质量门禁、Markdown 报告和 `Deployment ready: true` | 通过 |
| 示例工作链 | `examples/binary_demo`、`examples/comparison_demo` 均可运行 | 通过 |
| 代码规模 | 4,466 行有效 MoonBit 源码，排除生成接口和构建产物；54 个测试声明 | 通过 |
| 许可证 | 根目录 `LICENSE` 为 Apache-2.0，来源边界见 `THIRD_PARTY_NOTICES.md` | 通过 |
| 数据边界 | `BENCHMARKS.md` 记录 UCI/LETOR 来源、紧凑夹具和不再分发原始数据的约束 | 通过 |
| 构建产物 | `.gitignore` 忽略 `_build/`，`git ls-files` 检查跟踪数量为 0 | 通过 |
| mooncakes.io | `moon publish` 对 `0.1.3` 返回 `Server status: 200 OK` | 通过 |
| 干净消费者 | 新建消费者模块安装 `myc1234567/moon_metric_lab@0.1.3`，严格检查和工作流导入测试 1/1 通过 | 通过 |

## 功能范围与真实应用链

项目现有能力包括：

- `classification`：二分类、多分类、混淆矩阵、ROC/PR 和阈值扫描；
- `regression`：连续误差与鲁棒损失；
- `clustering`：内部聚类分离度和外部标签一致性；
- `ranking`：DCG/NDCG、MRR、MAP；
- `report` 与 `visualization`：模型对比、差异报告和多格式导出；
- `hypothesis_testing`：均值、方差、Welch t 统计量、多折均值、配对均值差、标准误和 Cohen's d；
- `workflow`：折级实验记录、均值/标准差/极值聚合、指标方向感知的基线/候选对比、确定性模型排名、最低/最高/稳定性门禁、部署决策、Markdown 审计报告和 CSV 导出；
- CLI 与 examples：提供可运行的指标展示、模型对比和从实验记录到发布门禁的完整链路。

本轮新增 `workflow` 包不是重复实现指标，而是把已有指标接入可审计的工程流程：训练任务写入 `FoldObservation`，`summarize` 产生跨折统计，`compare` 识别候选改进，`evaluate_gate` 检查质量与稳定性，`deployment_ready` 生成是否可部署的明确判定，最后输出评审和仪表盘可消费的报告。

真实任务形状测试覆盖 UCI Breast Cancer Wisconsin 二分类、UCI Iris 多分类、UCI Wine Quality 回归和 LETOR MQ2008 排序。仓库只保留用于验证数组形状、指标方向和边界行为的紧凑数字夹具，并在 README、`BENCHMARKS.md`、`THIRD_PARTY_NOTICES.md` 中声明外部数据的来源和许可边界，不将第三方原始数据伪装成原创或随库重新分发。

边界测试覆盖空输入、重复折编号、缺失指标、不稳定折、跨任务比较、无共同指标、CSV 引号转义、非法概率/阈值、零方差、单类别、越界切片、负 `k`、单聚类、无效 delta、配对样本长度不一致和样本量不足等情况。

## CI 与发布链

`.github/workflows/test.yml` 的矩阵为 `ubuntu-latest`、`macos-latest`、`windows-latest`，每个平台执行：

- `moon fmt --check`；
- `moon check --target all --deny-warn`；
- `moon test --target all --deny-warn`；
- `moon run --target wasm-gc cmd/main`；
- `moon info` 后检查生成接口无差异。

本地环境没有 `node.exe` 和 C 编译器，因此本地 `moon test --target all` 的 JS/Native 执行不冒充通过；远端 Actions run #10 已在三平台实际完成并成功。该区分保留了验收证据的可审计性。

发布链已经实际走通：版本从 `moon.mod` 的 `0.1.3` 打包，`moon publish` 返回 200；随后在全新消费者模块中用 `moon add` 拉取该版本，并实际导入 `workflow`、创建四折实验、聚合和执行门禁，严格检查与测试均通过。

## 双仓库与提交核验

- GitHub：[`myc1234567/moon_metric_lab`](https://github.com/myc1234567/moon_metric_lab)，`main`；
- Gitlink：[`mycmyc/moon_metric_lab`](https://www.gitlink.org.cn/mycmyc/moon_metric_lab)，`main`；
- 功能代码提交：`e3a8497df3c4dfd339d16b216f77a4f35ec4b809`；最终验收报告提交：`756af7e1ad1d5945bdff47b1942391104cfb4e50`；
- 当前本地 HEAD、GitHub `main` 和 Gitlink `main` 均为 `756af7e1ad1d5945bdff47b1942391104cfb4e50`；
- GitHub Actions：[run #10](https://github.com/myc1234567/moon_metric_lab/actions/runs/31953075109) 的三个矩阵 job 均为 `completed / success`；
- 本轮提交和推送内容只包含代码、测试、README、基准说明、许可证/来源边界、CI、CLI、版本和生成接口，以及本验收报告；工作区已有的申报书和 `PROPOSAL.md` 修改均未暂存、未提交、未推送，远端历史 `PROPOSAL.md` 保持原状。

## 最终自查结论

按组委会邮件列出的技术驳回项，本项目已经完成并通过本地、发布注册表、干净消费者和远端三平台 CI 的工程自查，当前处于“可提交最终验收”的状态。功能范围、有效工程量、真实任务形状、边界测试、代码质量、README、许可证和开源合规性均有对应仓库证据。

这份结论是项目方的技术自查结论，不能替代组委会在 8 月 17 日作出的正式验收决定；但就已列出的驳回要求而言，当前仓库没有遗留需要通过推送才能解决的工程问题。
