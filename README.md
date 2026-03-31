# AI Workload Based GPU Monitoring and Analysis

## Overview
This project analyzes how Artificial Intelligence workloads impact GPU performance.  
A Convolutional Neural Network (CNN) is trained on the CIFAR-10 dataset using PyTorch in Google Colab. During the training process, GPU metrics such as utilization, memory usage, and temperature are monitored and analyzed.

The goal is to understand how deep learning workloads influence GPU behavior and system resource utilization.

---

## Problem Statement
Modern AI models require high computational power which is typically provided by GPUs. Heavy AI workloads can lead to increased GPU utilization, higher temperature, and increased memory consumption.

This project studies how GPU resources behave when a deep learning workload is applied.

---

## Objectives
- Train a CNN model on the CIFAR-10 dataset  
- Generate an AI workload using deep learning training  
- Monitor GPU load, memory usage, and temperature  
- Visualize GPU performance through graphs  

---

## Technologies Used
- Python  
- PyTorch  
- Torchvision  
- Google Colab  
- GPUtil  
- Matplotlib  

---

## Dataset
The project uses the **CIFAR-10 dataset**, a standard benchmark dataset for image classification.

Dataset Details:
- 60,000 color images
- 10 image classes
- Image resolution: 32 × 32

Classes:
Airplane, Automobile, Bird, Cat, Deer, Dog, Frog, Horse, Ship, Truck.

---

## Project Workflow
1. Install required libraries
2. Load and preprocess the CIFAR-10 dataset
3. Build a Convolutional Neural Network (CNN)
4. Train the model using GPU acceleration
5. Monitor GPU metrics
6. Visualize GPU performance using graphs

---

## Methodology

### 1. Environment Setup
Libraries such as PyTorch, Torchvision, and GPUtil are installed in the runtime environment.

### 2. Dataset Loading
The CIFAR-10 dataset is downloaded and loaded using Torchvision utilities.

### 3. Model Creation
A CNN architecture is implemented with:
- Convolution layers
- Pooling layers
- Fully connected layers

### 4. Model Training
The CNN model is trained for multiple epochs on GPU to generate computational workload.

### 5. GPU Monitoring
GPU metrics are collected using GPUtil and NVIDIA monitoring tools:
- GPU Load
- Memory Usage
- Temperature

### 6. Data Visualization
Matplotlib is used to generate graphs showing GPU load and temperature over time.

---

## Results

| Metric | Observation |
|------|------|
| GPU Temperature | Increased during training |
| GPU Memory Usage | Increased during workload |
| GPU Utilization | Higher during model training |

These results demonstrate that deep learning training significantly impacts GPU resources.

---

## Visualization Output
The project generates graphs showing:

- GPU Load Over Time
- GPU Temperature Over Time

These visualizations help understand how GPU performance changes during AI training.

---

## Conclusion
This project demonstrates the relationship between AI training workloads and GPU performance. Deep learning tasks increase GPU utilization, memory consumption, and temperature.

Monitoring GPU performance is essential for:
- Efficient hardware utilization
- System stability
- Performance optimization

---

## Future Improvements
Potential improvements include:

- Real-time GPU monitoring dashboard
- Multi-GPU workload analysis
- Automated stress detection
- Integration with system monitoring tools

