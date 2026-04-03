def analyze(stats):
    issues = []

    if stats["temperature"] != "N/A" and stats["temperature"] > 70:
        issues.append("High Temperature")

    if stats["memory_used"] > stats["memory_total"] * 0.75:
        issues.append("High Memory Usage")

    if stats["gpu_usage"] < 30:
        issues.append("Low Utilization")

    if stats["cpu_usage"] > 80:
        issues.append("High CPU Usage")

    return issues