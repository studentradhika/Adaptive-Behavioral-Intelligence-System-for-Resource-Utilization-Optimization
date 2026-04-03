def optimize(stats):
    batch_size = 200
    actions = []

    # memory high → reduce batch
    if stats["memory_used"] > 5:
        batch_size = 100
        actions.append("Reduced batch (high memory)")

    # gpu low → increase batch
    elif stats["gpu_usage"] < 40:
        batch_size = 400
        actions.append("Increased batch (low GPU usage)")

    return {
        "recommended_batch_size": batch_size,
        "actions": actions
    }