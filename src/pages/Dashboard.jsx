import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend,
  CartesianGrid, ResponsiveContainer
} from "recharts";

function Dashboard({ onLogout }) {

  useEffect(() => {
    startTraining();
  }, []);

  const [mode, setMode] = useState("static");
  const [batchSize, setBatchSize] = useState(100);

  const [metrics, setMetrics] = useState({
    cpu: 0,
    memory: 0,
    gpu: 0
  });

  const [history, setHistory] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [compareData, setCompareData] = useState([]);

  // 🔹 UPDATE SETTINGS
  const updateSettings = () => {
    axios.post("http://127.0.0.1:5000/control", {
      mode,
      batch_size: batchSize
    });
  };

  // 🔹 START TRAINING
  const startTraining = () => {
    axios.get("http://127.0.0.1:5000/train")
      .then(res => {

        const before = res.data.before;
        const after = res.data.after;

        setMetrics({
          cpu: after.cpu_usage,
          memory: after.memory_used,
          gpu: after.gpu_usage
        });

        setGraphData(prev => [
          ...prev,
          {
            name: `Run ${prev.length + 1}`,
            before: before.memory_used,
            after: after.memory_used
          }
        ]);

        setHistory(prev => [
          ...prev,
          {
            mode,
            batch: batchSize,
            before: before.memory_used,
            after: after.memory_used
          }
        ]);
      });
  };

  // 🔥 AUTO TRAIN
  const autoTrain = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => startTraining(), i * 1200);
    }
  };

  // 🔹 COMPARE
  const runComparison = () => {
    axios.get("http://127.0.0.1:5000/compare")
      .then(res => setCompareData(res.data));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-6">

      {/* 🔥 HEADER */}
      <div className="flex justify-between items-center mb-8 backdrop-blur-lg bg-white/70 border border-blue-100 shadow-lg rounded-xl p-4">

        <h1 className="text-2xl font-semibold text-blue-700">
          ⚡ GPU Optimization Dashboard
        </h1>

        {/* ✅ FIXED LOGOUT */}
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
        >
          Logout
        </button>

      </div>

      {/* 🔥 METRICS */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        {[
          { label: "CPU Usage", value: metrics.cpu, unit: "%" },
          { label: "Memory", value: metrics.memory, unit: "GB" },
          { label: "GPU Usage", value: metrics.gpu, unit: "%" }
        ].map((item, i) => (

          <div key={i}
            className="p-6 rounded-xl backdrop-blur-xl bg-white/60 border border-blue-100 shadow-lg hover:scale-105 transition duration-300">

            <p className="text-blue-500 text-sm">{item.label}</p>

            <h2 className="text-3xl font-semibold text-blue-700 mt-2">
              {item.value} {item.unit}
            </h2>

            <div className="mt-4 h-2 bg-blue-100 rounded-full overflow-hidden">
              <div
                className="h-2 bg-blue-500 transition-all duration-500"
                style={{ width: `${Math.min(item.value, 100)}%` }}
              />
            </div>

          </div>
        ))}

      </div>

      {/* 🔥 CONTROL PANEL */}
      <div className="mb-8 p-6 rounded-xl backdrop-blur-xl bg-white/60 border border-blue-100 shadow-lg">

        <h2 className="text-blue-600 mb-4 font-medium">Configuration</h2>

        <div className="flex gap-4">

          <select value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="p-2 rounded-lg border border-blue-200 bg-white/80">

            <option value="static">Static</option>
            <option value="adaptive">Adaptive</option>
          </select>

          <input
            type="number"
            value={batchSize}
            onChange={(e) => setBatchSize(e.target.value)}
            className="p-2 rounded-lg border border-blue-200 w-32 bg-white/80"
          />

          <button onClick={updateSettings}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:scale-105 transition">
            Save
          </button>

        </div>
      </div>

      {/* 🔥 BUTTONS */}
      <div className="flex gap-4 mb-8">

        <button onClick={startTraining}
          className="px-5 py-3 bg-blue-600 text-white rounded-xl shadow hover:scale-105 transition">
          Start Training
        </button>

        <button onClick={autoTrain}
          className="px-5 py-3 bg-purple-500 text-white rounded-xl shadow hover:scale-105 transition">
          Auto Train
        </button>

        <button onClick={runComparison}
          className="px-5 py-3 bg-green-500 text-white rounded-xl shadow hover:scale-105 transition">
          Compare Modes
        </button>

      </div>

      {/* 🔥 GRAPHS */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">

        <div className="p-6 rounded-xl backdrop-blur-xl bg-white/60 border border-blue-100 shadow-lg">

          <h3 className="text-blue-600 mb-4">Performance Trend</h3>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={graphData}>
              <CartesianGrid stroke="#dbeafe" />
              <XAxis dataKey="name" stroke="#2563eb" />
              <YAxis stroke="#2563eb" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="before" stroke="#3b82f6" strokeWidth={3} />
              <Line type="monotone" dataKey="after" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>

        </div>

        <div className="p-6 rounded-xl backdrop-blur-xl bg-white/60 border border-blue-100 shadow-lg">

          <h3 className="text-blue-600 mb-4">Static vs Adaptive</h3>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={compareData}>
              <CartesianGrid stroke="#dbeafe" />
              <XAxis dataKey="mode" stroke="#2563eb" />
              <YAxis stroke="#2563eb" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="before" stroke="#3b82f6" strokeWidth={3} />
              <Line type="monotone" dataKey="after" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* 🔥 HISTORY */}
      <div className="p-6 rounded-xl backdrop-blur-xl bg-white/60 border border-blue-100 shadow-lg">

        <h3 className="text-blue-600 mb-4">Experiment Logs</h3>

        <div className="space-y-3 max-h-64 overflow-y-auto">

          {history.map((item, i) => (
            <div key={i}
              className="flex justify-between p-3 rounded-lg bg-white/80 border border-blue-100 hover:scale-[1.02] transition">

              <span className="text-blue-600">{item.mode}</span>
              <span>Batch: {item.batch}</span>
              <span>{item.before} → {item.after}</span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;