from flask import Flask, jsonify, request
from core.monitor import get_stats
from core.workload import run_workload
from core.analysis import analyze
from core.optimizer import optimize
from auth.auth import auth
from core.training_engine import run_training
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.register_blueprint(auth)

# 🔥 GLOBAL STATE
mode = "static"
batch_size = 100
history = []

# ✅ HOME
@app.route("/")
def home():
    return "Backend Running ✅"

# ✅ MAIN SYSTEM RUN (OLD FLOW - KEEP)
@app.route("/run")
def run_system():
    before = get_stats()

    run_workload(batch_size=500)

    after = get_stats()

    issues = analyze(after)

    optimization = optimize(after)
    new_batch = optimization["recommended_batch_size"]

    run_workload(batch_size=new_batch)

    final = get_stats()

    return jsonify({
        "before": before,
        "after_first_run": after,
        "issues_detected": issues,
        "optimization": optimization,
        "after_optimization": final
    })

# ✅ REAL-TIME METRICS
@app.route("/metrics", methods=["GET"])
def metrics():
    return jsonify(get_stats())

# ✅ CONTROL PANEL
@app.route("/control", methods=["POST"])
def control():
    global mode, batch_size

    data = request.json
    mode = data.get("mode", mode)
    batch_size = data.get("batch_size", batch_size)

    return jsonify({
        "mode": mode,
        "batch_size": batch_size
    })

# ✅ TRAINING
@app.route("/train", methods=["GET"])
def train():
    global history

    stats_before = get_stats()

    if mode == "adaptive":
        optimized = optimize(stats_before)
        batch = optimized["recommended_batch_size"]
    else:
        batch = batch_size

    # 🔥 ACTUAL TRAINING CALL
    result = run_training(batch)

    stats_after = get_stats()

    # 🔥 SAVE HISTORY
    history.append({
        "mode": mode,
        "batch": batch,
        "before": stats_before.get("memory_used", 0),
        "after": stats_after.get("memory_used", 0)
    })

    return jsonify({
        "before": stats_before,
        "after": stats_after,
        "used_batch_size": batch,
        "training_result": result
    })

# ✅ STATIC vs ADAPTIVE COMPARISON
@app.route("/compare", methods=["GET"])
def compare_modes():

    # 🔹 STATIC MODE
    static_before = run_training(100)
    static_after = run_training(100)

    # 🔹 ADAPTIVE MODE
    adaptive_before = run_training(100)

    decision = optimize(adaptive_before)
    new_batch = decision["recommended_batch_size"]

    adaptive_after = run_training(new_batch)

    return jsonify([
        {
            "mode": "static",
            "before": static_before["memory_used"],
            "after": static_after["memory_used"]
        },
        {
            "mode": "adaptive",
            "before": adaptive_before["memory_used"],
            "after": adaptive_after["memory_used"]
        }
    ])

# ✅ HISTORY
@app.route("/history", methods=["GET"])
def get_history():
    return jsonify(history)

# ✅ RUN SERVER
if __name__ == "__main__":
    app.run(debug=True)