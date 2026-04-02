# 🚀 AI Workload Based GPU Monitoring & Analysis

## 📌 Overview

This project analyzes how **AI workloads impact GPU performance** using deep learning.

A CNN model is trained on the CIFAR-10 dataset, and GPU metrics such as:

* 🔥 Temperature
* ⚡ Load (%)
* 💾 Memory Usage

are monitored and analyzed to understand **GPU stress behavior**.

---

## 🧠 Key Features

### 1️⃣ Before Workload Monitoring

* Captures GPU metrics in idle state
* Stores data in CSV format

### 2️⃣ During Training Monitoring (🔥 NEW)

* Real-time GPU monitoring during model training
* Captures:

  * Temperature changes
  * Load spikes
  * Memory usage growth
* Provides actual **stress behavior**

### 3️⃣ After Workload Monitoring

* Observes GPU after training (cooling phase)

### 4️⃣ Behavioral Analysis (Intelligence Layer)

* Classifies GPU states:

  * 🟢 Idle
  * 🔵 Normal
  * 🟡 Moderate Stress
  * 🟠 High Load
  * 🔴 Overheating
* Calculates **Stress Score**

---

## 📊 Project Structure

```
backend/
frontend/

Before workload.ipynb
Model_Training.ipynb
gpu_after_workload_monitoring_project.ipynb
Behavioral_analysis.ipynb   👈 Intelligence logic
gpu_full_data.csv
final_gpu_analysis.csv
```

---

## ⚙️ Technologies Used

* Python 🐍
* PyTorch 🔥
* GPUtil 📊
* Pandas
* Matplotlib

---

## 📈 How It Works

1. Capture GPU data **before workload**
2. Train CNN model (CIFAR-10)
3. Monitor GPU **during training**
4. Capture GPU **after workload**
5. Apply behavioral analysis
6. Generate graphs & insights

---

## 📊 Sample Insights

* Before workload → GPU mostly **Idle**
* During training → **Temperature & Memory increase**
* After workload → GPU enters **cooling phase**
* Stress Score helps quantify GPU pressure

---

## 🚀 Future Enhancements

* Live dashboard (Streamlit)
* Alert system for overheating 🚨
* Cloud deployment
* Multi-GPU monitoring




---

## ⭐ Conclusion

This project demonstrates how AI workloads affect GPU behavior and provides a **data-driven approach to monitor and analyze GPU stress patterns**.
