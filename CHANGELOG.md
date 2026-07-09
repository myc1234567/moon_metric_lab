# Changelog

All notable changes to the `MoonMetricLab` project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-07-09

### Added
- **Core Package**: Numerical stability tolerances (`EPSILON`), `Vector[T]` and `Matrix[T]` zero-copy views, checked `MetricError` types (`DimensionMismatch`, `EmptyInput`, etc.), and statistical utilities.
- **Classification Package**:
  - Binary evaluation metrics: Accuracy, Precision, Recall, F1 Score, LogLoss, MCC, Balanced Accuracy, Jaccard Score, and Brier Score.
  - Multi-class metrics: Macro/Micro/Weighted averaging for Precision/Recall/F1, Top-K accuracy.
  - Confusion Matrix: Matrix builder from raw predictions or probabilities, `by_true`/`by_pred` normalization, table text generator.
  - Threshold Scanner: Optimal threshold discovery (F1 / Youden J-index), ROC curve (`FPR`, `TPR`), ROC AUC calculation, and PR curve AUC calculation.
- **Regression Package**: Continuous error metrics (`MAE`, `MSE`, `RMSE`, `R2 Score`, `Adjusted R2`, `MAPE`, `SMAPE`) and robust error functions (`Huber Loss`, `Pinball Loss`, `Max Error`, `MedAE`).
- **Clustering Package**: Internal unsupervised metrics (`Silhouette Score`, `Calinski-Harabasz Score`, `Davies-Bouldin Score`) and external supervised metrics (`ARI`, `NMI`, `FMI`, `Homogeneity`, `Completeness`).
- **Ranking Package**: Information retrieval metrics (`NDCG@K`, `MRR`, `MAP`).
- **Report & Comparison Package**: `ExperimentReport` and `BenchmarkComparison` framework for aggregating multi-run random seed/cross-validation statistics and delta significance computation.
- **Visualization Package**: ASCII terminal chart renderer, SVG vector chart generator, Markdown table exporter, and CSV/JSON exporter.
- **CLI & Examples**: Runnable `moon_metric_cli` utility and three end-to-end demonstrations.
