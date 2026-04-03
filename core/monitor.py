import psutil

def get_stats():
    try:
        from pynvml import (
            nvmlInit,
            nvmlDeviceGetHandleByIndex,
            nvmlDeviceGetUtilizationRates,
            nvmlDeviceGetMemoryInfo,
            nvmlDeviceGetTemperature
        )

        nvmlInit()
        handle = nvmlDeviceGetHandleByIndex(0)

        util = nvmlDeviceGetUtilizationRates(handle)
        mem = nvmlDeviceGetMemoryInfo(handle)
        temp = nvmlDeviceGetTemperature(handle, 0)

        return {
            "device": "GPU",
            "gpu_usage": util.gpu,
            "memory_used": round(mem.used / (1024**3), 2),
            "memory_total": round(mem.total / (1024**3), 2),
            "temperature": temp,
            "cpu_usage": psutil.cpu_percent()
        }

    except Exception:
        # fallback (REAL CPU DATA, fake nahi)
        return {
            "device": "CPU",
            "gpu_usage": psutil.cpu_percent(),
            "memory_used": round(psutil.virtual_memory().used / (1024**3), 2),
            "memory_total": round(psutil.virtual_memory().total / (1024**3), 2),
            "temperature": "N/A",
            "cpu_usage": psutil.cpu_percent()
        }