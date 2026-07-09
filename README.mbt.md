# MoonMetricLab 🌙📊

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![MoonBit Version](https://img.shields.io/badge/MoonBit-2.0+-purple.svg)](https://www.moonbitlang.com)
[![Targets](https://img.shields.io/badge/Targets-Wasm%20%7C%20JS%20%7C%20Native-brightgreen.svg)]()
[![OSC 2026](https://img.shields.io/badge/OSC%202026-Contest%20Entry-gold.svg)](https://www.gitlink.org.cn/competitions/track1_2026MoonBit)
[![GitLink Repo](https://img.shields.io/badge/GitLink-mycmyc%2Fmoon__metric__lab-blue?logo=git)](https://gitlink.org.cn/mycmyc/moon_metric_lab)
[![GitHub Mirror](https://img.shields.io/badge/GitHub-myc1234567%2Fmoon__metric__lab-black?logo=github)](https://github.com/myc1234567/moon_metric_lab)

**MoonMetricLab** is a high-performance, pure MoonBit evaluation suite and benchmark comparison framework tailored for machine learning models and experiments. Built from the ground up using zero-copy views and cross-platform numerical stability guarantees, it empowers developers and data scientists to evaluate, compare, and visualize machine learning pipelines across **Wasm-GC**, **Wasm**, **JavaScript**, and **Native** targets without external dependencies.

---

## ✨ Key Highlights

- **🎯 Complete Domain Coverage**: Out-of-the-box support for **Classification** (binary, multiclass, ROC/PR curves), **Regression** (continuous and robust losses), **Clustering** (internal separation indices and external agreement metrics), and **Ranking** (information retrieval DCG/NDCG, MRR, MAP).
- **🚀 Zero-Copy Data Handling**: Lightweight `VectorView` and `MatrixView` abstractions enable zero-copy slicing, windowing, and high-speed statistical operations over contiguous double and integer buffers.
- **🛡️ Checked Numerical Stability boundaries**: Strict division-by-zero protection (`EPSILON` guards), underflow/overflow prevention (`log_cosh` and log-loss clipping), and granular structured errors (`raise @core.MetricError`) instead of ungraceful panics.
- **📈 Benchmark Comparison & Report Engine**: Automated candidate vs. baseline comparison reports computing absolute deltas, percentage shifts, and automatic improvement/degradation detection.
- **🎨 Multi-Format Visualization Suite**: Built-in ASCII terminal bar charts, GitHub-flavored Markdown tables, self-contained SVG curve generators (`to_svg_roc_curve`), and dependency-free JSON/CSV exporters.

---

## 🏗️ Architecture & Package Sitemap

MoonMetricLab follows a strictly modular, layered architecture:

```
username/moon_metric_lab
├── core            # Base numerical primitives, zero-copy views, constants, and structured errors
├── classification  # Binary & multi-class metrics, confusion matrix, threshold scanner, ROC/PR curves
├── regression      # Continuous error metrics (MAE/MSE/RMSE/R2/MAPE) and robust losses (Huber/Pinball/Log-Cosh)
├── clustering      # Internal (Silhouette, CH, DBI) and external (ARI, NMI, FMI) clustering evaluations
├── ranking         # Information retrieval ranking metrics (DCG@K, NDCG@K, MRR, MAP)
├── report          # Evaluation containers and automated candidate vs. baseline comparison engine
├── visualization   # ASCII bar charts, Markdown tables, SVG curve plots, and JSON/CSV exporters
├── cmd/main        # Standalone CLI showcase executable demonstrator
└── examples        # Runnable demo projects (binary_demo, comparison_demo)
```

| Package | Description | Key APIs |
| :--- | :--- | :--- |
| [`core`](file:///C:/Users/33046/Desktop/%E5%90%8C%E5%AD%A6%E8%8E%AB/core) | Numerical foundation & errors | `VectorView`, `MatrixView`, `validate_same_length`, `EPSILON` |
| [`classification`](file:///C:/Users/33046/Desktop/%E5%90%8C%E5%AD%A6%E8%8E%AB/classification) | Classification evaluation | `accuracy`, `f1_score`, `log_loss`, `mcc`, `roc_curve`, `ConfusionMatrix` |
| [`regression`](file:///C:/Users/33046/Desktop/%E5%90%8C%E5%AD%A6%E8%8E%AB/regression) | Continuous regression metrics | `mae`, `mse`, `rmse`, `r2_score`, `mape`, `huber_loss`, `pinball_loss` |
| [`clustering`](file:///C:/Users/33046/Desktop/%E5%90%8C%E5%AD%A6%E8%8E%AB/clustering) | Clustering evaluation | `silhouette_score`, `calinski_harabasz_score`, `adjusted_rand_index` |
| [`ranking`](file:///C:/Users/33046/Desktop/%E5%90%8C%E5%AD%A6%E8%8E%AB/ranking) | IR & recommendation metrics | `ndcg_at_k`, `reciprocal_rank`, `mean_reciprocal_rank`, `average_precision` |
| [`report`](file:///C:/Users/33046/Desktop/%E5%90%8C%E5%AD%A6%E8%8E%AB/report) | Benchmark reporting | `ModelResult`, `compare_models`, `ComparisonReport` |
| [`visualization`](file:///C:/Users/33046/Desktop/%E5%90%8C%E5%AD%A6%E8%8E%AB/visualization) | Multi-format rendering | `to_ascii_bar_chart`, `to_markdown_table`, `to_svg_roc_curve`, `to_csv_string` |

---

## ⚡ Quick Start & Usage Examples

### 1. Binary & Multi-Class Classification

```mbt check
test "README classification demo" {
  let y_true = [0, 0, 1, 1]
  let y_pred = [0, 1, 1, 1]
  let y_prob = [0.1, 0.6, 0.8, 0.9]

  let acc = @classification.accuracy(y_true, y_pred)
  inspect!(acc, content="0.75")

  let f1 = @classification.f1_score(y_true, y_pred, pos_label=1)
  inspect!(f1 > 0.79 && f1 < 0.81, content="true")

  let roc = @classification.roc_curve(y_true, y_prob, pos_label=1)
  inspect!(roc.auc, content="1")
}
```

### 2. Regression & Robust Loss Functions

```mbt check
test "README regression demo" {
  let y_true = [3.0, -0.5, 2.0, 7.0]
  let y_pred = [2.5, 0.0, 2.0, 8.0]

  let rmse_val = @regression.rmse(y_true, y_pred)
  inspect!(rmse_val > 0.61 && rmse_val < 0.62, content="true")

  let r2 = @regression.r2_score(y_true, y_pred)
  inspect!(r2 > 0.94, content="true")

  let huber = @regression.huber_loss(y_true, y_pred, delta=1.0)
  inspect!(huber, content="0.1875")
}
```

### 3. Clustering Separation & Agreement

```mbt check
test "README clustering demo" {
  let x = [[1.0, 1.0], [1.2, 0.8], [5.0, 5.0], [5.2, 4.8]]
  let labels = [0, 0, 1, 1]

  let sil = @clustering.silhouette_score(x, labels)
  inspect!(sil > 0.8, content="true")

  let ari = @clustering.adjusted_rand_index([0, 0, 1, 1], [1, 1, 0, 0])
  inspect!(ari, content="1")
}
```

### 4. Ranking & Information Retrieval

```mbt check
test "README ranking demo" {
  let y_rels = [3.0, 2.0, 3.0, 0.0, 1.0]
  let y_scores = [0.9, 0.8, 0.7, 0.6, 0.5]

  let ndcg = @ranking.ndcg_at_k(y_rels, y_scores, k=3)
  inspect!(ndcg > 0.8, content="true")
}
```

### 5. Benchmark Comparison & Visualization

```mbt check
test "README comparison demo" {
  let baseline = @report.ModelResult::new("LogReg", "classification")
  baseline.add_metric("accuracy", 0.80)
  baseline.add_metric("log_loss", 0.45)

  let candidate = @report.ModelResult::new("XGBoost", "classification")
  candidate.add_metric("accuracy", 0.88)
  candidate.add_metric("log_loss", 0.32)

  let comp = @report.compare_models(baseline, candidate)
  let table = comp.to_table_string()
  inspect!(table.contains("IMPROVED"), content="true")
}
```

---

## 🛠️ Tooling & Commands

Build and verify the whole project across targets using the official MoonBit CLI (`moon`):

```bash
# Check compilation across all targets (Wasm-GC, Wasm, JS, Native)
moon check --target all

# Run comprehensive blackbox unit test suite
moon test --target wasm-gc -v

# Generate updated package interfaces
moon info

# Run the full CLI evaluation showcase
moon run --target wasm-gc cmd/main
```

---

## 📄 License & OSC 2026 Statement

This project is open-sourced under the [Apache License 2.0](file:///C:/Users/33046/Desktop/%E5%90%8C%E5%AD%A6%E8%8E%AB/LICENSE).
Developed for the **MoonBit OSC 2026 Open Source Track**, showcasing pure MoonBit architectural design, comprehensive documentation, and multi-backend portability.
