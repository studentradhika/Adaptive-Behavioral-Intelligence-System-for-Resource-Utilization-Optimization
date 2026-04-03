import numpy as np
import time

def run_workload(batch_size=1500, duration=10):
    start = time.time()

    while time.time() - start < duration:
        a = np.random.rand(batch_size, batch_size)
        _ = np.dot(a, a)

    return {"status": "workload executed", "batch_size": batch_size}
import gc
gc.collect()