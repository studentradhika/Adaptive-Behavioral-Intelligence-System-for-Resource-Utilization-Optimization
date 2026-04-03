import time
import random

try:
    from pynvml import *
    nvmlInit()
    handle = nvmlDeviceGetHandleByIndex(0)
    GPU_AVAILABLE = True
except:
    GPU_AVAILABLE = False


def run_training(batch_size):
    time.sleep(0.5)

    # 🔥 REAL GPU DATA (if available)
    if GPU_AVAILABLE:
        util = nvmlDeviceGetUtilizationRates(handle).gpu
        mem = nvmlDeviceGetMemoryInfo(handle).used / 1024**3  # GB

        return {
            "memory_used": round(mem, 2),
            "gpu_usage": util
        }

    # 🔥 SIMULATION (IMPROVED LOGIC)
    else:
        # ✅ batch badhe → memory badhe (realistic)
        memory_usage = 3 + (batch_size / 50)

        # ✅ thoda randomness for graph variation
        memory_usage += random.uniform(-0.5, 0.5)

        # ✅ GPU usage bhi meaningful
        gpu_usage = min(100, 20 + batch_size / 2 + random.uniform(-5, 5))

        return {
            "memory_used": round(memory_usage, 2),
            "gpu_usage": round(gpu_usage, 2)
        }