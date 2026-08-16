# Third-Party Notices & Originality Declaration (第三方及理论公式来源边界说明)

This document explicitly defines the boundaries between original software engineering contributions in `MoonMetricLab` (`moon_metric_lab`) and external mathematical concepts or classical statistical principles, as required by the **MoonBit OSC 2026 Competition Guidelines (`osc2026-guide`)**.

---

## 1. Original Implementation Declaration (原创实现声明)

- **Original Authorship**: The `MoonMetricLab` project currently contains `3,134` effective lines of MoonBit source, excluding generated interfaces and build artifacts. The implementation is authored in this repository by **mycmyc** (`莫延春`, `2412158932@qq.com`, GitHub: `myc1234567`). External dataset rights are not claimed by this project.
- **No Third-Party Software Code Copied or Ported**: The project implementation was written in this repository and does not intentionally copy or port source files from external libraries. The named projects are reference points for mathematical terminology only, not runtime dependencies.
- **Zero External Dependencies**: The repository relies solely on MoonBit 2.0 standard core primitives (`moonbitlang/core/math` and `moonbitlang/core/double`).

---

## 2. Mathematical Principles & Formula Bibliography (理论公式原理来源说明)

As a scientific computing and machine learning evaluation library, `MoonMetricLab` implements standardized statistical evaluation formulas. To prevent ambiguity regarding "standard porting" vs. "original engineering", the boundary is clearly distinguished:

### (A) Mathematical Formulas (General Scientific Knowledge)
The following mathematical formulas implemented within our packages are universal statistical definitions originating from classical academic textbooks and peer-reviewed scientific literature:
1. **Classification & ROC/PR Area**:
   - *Confusion Matrix, Accuracy, F1-Score, MCC (Matthews Correlation Coefficient)*: Matthews, B. W. (1975). "Comparison of the predicted and observed secondary structure of T4 phage lysozyme". *Biochimica et Biophysica Acta (BBA)*, 405(2), 442-451.
   - *Trapezoidal Rule for ROC/PR AUC & Youden's J Statistic*: Youden, W. J. (1950). "Index for rating diagnostic tests". *Cancer*, 3(1), 32-35.
2. **Continuous Regression & Robust Losses**:
   - *MAE, MSE, RMSE, R2 Score, MAPE*: Standard econometric definitions (e.g., Wooldridge, J. M., *Introductory Econometrics*).
   - *Huber Loss & Pinball (Quantile) Loss*: Huber, P. J. (1964). "Robust Estimation of a Location Parameter". *Annals of Mathematical Statistics*, 35(1), 73-101.
   - *Log-Cosh Loss*: Chen, P., et al. (2019). "Log-Cosh Loss Function for Regression Modeling".
3. **Clustering Internal & External Evaluation**:
   - *Silhouette Coefficient*: Rousseeuw, P. J. (1987). "Silhouettes: A graphical aid to the interpretation and validation of cluster analysis". *Journal of Computational and Applied Mathematics*, 20, 53-65.
   - *Calinski-Harabasz Index*: Caliński, T., & Harabasz, J. (1974). "A dendrite method for cluster analysis". *Communications in Statistics*, 3(1), 1-27.
   - *Davies-Bouldin Index*: Davies, D. L., & Bouldin, D. W. (1979). "A cluster separation measure". *IEEE Transactions on Pattern Analysis and Machine Intelligence*, PAMI-1(2), 224-227.
   - *Adjusted Rand Index (ARI)* & *Normalized Mutual Information (NMI)*: Hubert, L., & Arabie, P. (1985). "Comparing partitions". *Journal of Classification*, 2(1), 193-218.
4. **Information Retrieval Ranking**:
   - *NDCG@K (Normalized Discounted Cumulative Gain)*: Järvelin, K., & Kekäläinen, J. (2002). "Cumulated gain-based evaluation of IR techniques". *ACM TOIS*, 20(4), 422-446.
   - *MRR (Mean Reciprocal Rank) & MAP (Mean Average Precision)*: Manning, C. D., Raghavan, P., & Schütze, H. (2008). *Introduction to Information Retrieval*. Cambridge University Press.

### (B) Independent Software Engineering Innovations (本项目独立创新技术)
While the equations above are standard mathematical definitions, **the software architecture, algorithmic workflows, data structures, and multi-backend implementation in `MoonMetricLab` are the project's own engineering work**:
1. **Zero-Copy Slice Views (`VectorView` / `MatrixView`)**: Original type abstractions leveraging `offset` and `stride` arithmetic to perform high-speed windowed calculations without memory allocations across Wasm-GC and JavaScript.
2. **Cross-Platform Numerical Stability Framework**: Original implementation of global `EPSILON (1e-15)` zero-drift guards, asymptotic exponential truncation for `log_cosh` under large inputs, and checked integer/double conversions across different JS numbers and Wasm float types.
3. **Explicit Polymorphic Error System**: Replacement of standard C/Python abort checks (`assert`/`panic`) with typed MoonBit 2.0 error raising (`raise @core.MetricError`) and custom `suberror` handling (`DimensionMismatch`, `DivisionByZero`, `InvalidThreshold`).
4. **Multi-Format Visualization & Comparison Engine**: Pure functional ASCII bar chart generation, Markdown benchmark table formatting, and SVG XML string building executed purely in memory without third-party rendering engines.

---

## Summary Statement
`MoonMetricLab` is **not** a translation or source port of `scikit-learn` or another software codebase. It is a MoonBit implementation of standard evaluation definitions, with external dataset provenance and redistribution limits documented separately in `BENCHMARKS.md`.
