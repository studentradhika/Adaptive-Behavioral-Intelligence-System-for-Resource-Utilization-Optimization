# Adaptive Behavioral Intelligence System for Resource Utilization Optimization

## Project Overview

This project implements an adaptive GPU resource monitoring and behavioral analysis framework for AI workloads.

The system observes GPU utilization patterns, memory pressure behavior, and scaling characteristics under controlled workload configurations. The objective is to establish baseline behavioral insights that inform future adaptive optimization strategies.

The architecture follows a closed-loop structure:

Monitoring → Analysis → Decision → Optimization

The current implementation focuses on the Monitoring and Analysis layers through controlled experimental evaluation.

---

## GPU Monitoring Layer (NVML Integration)

GPU telemetry is collected using NVIDIA's NVML interface via Python bindings.

The monitoring module captures:

- GPU utilization rate
- Memory consumption
- Time-series workload behavior
- Batch-size dependent scaling patterns

Telemetry is logged during training execution to enable comparative workload analysis.

---

## Baseline Experimental Study (ABIS-RUU)

The experimental study is documented in:

ABIS_RUU_Baseline_GPU_Experiment__.ipynb

The experiment evaluates the impact of batch-size scaling on:

- GPU utilization efficiency
- Memory allocation growth
- Resource saturation behavior
- Throughput scaling trends

Two configurations were analyzed:

- Batch Size 128
- Batch Size 256

The workload uses a CIFAR-10 training pipeline implemented in PyTorch, with telemetry captured throughout execution.

---

## Tech Stack

Monitoring & Experimental Layer:
- Python 3.11
- PyTorch
- NVIDIA NVML (via pynvml)
- NumPy
- Matplotlib
- Pandas
- Scikit-learn

Frontend Layer:
- React (Vite)
- React Router
- JavaScript (ES6+)

---

## Experimental Structure

The notebook is organized into:

1. Environment Setup  
2. Library Initialization  
3. NVML Monitoring Initialization  
4. Dataset Preparation  
5. Training Loop with Telemetry Logging  
6. Batch-Size Comparative Execution  
7. Visualization and Behavioral Analysis  
8. Observational Conclusions  

---

## Setup Instructions

Clone the repository:

git clone https://github.com/studentradhika/Adaptive-Behavioral-Intelligence-System-for-Resource-Utilization-Optimization.git

Open the experimental notebook:

ABIS_RUU_Baseline_GPU_Experiment__.ipynb

Run all cells sequentially to reproduce the baseline study.

---

## Notebook Viewer (Fallback)

If GitHub preview does not render the notebook properly, it can be viewed via:

https://nbviewer.org/github/studentradhika/Adaptive-Behavioral-Intelligence-System-for-Resource-Utilization-Optimization/blob/main/ABIS_RUU_Baseline_GPU_Experiment__.ipynb

---

Developed as part of a college group project.
