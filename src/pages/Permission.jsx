import { useNavigate } from "react-router-dom";

function Permission() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">

      <div className="backdrop-blur-xl bg-white/60 p-10 rounded-3xl shadow-xl text-center">

        <h2 className="text-2xl mb-4 text-gray-700">🔐 System Access</h2>
        <p className="mb-6 text-gray-600">Allow system monitoring?</p>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-2 rounded-xl shadow hover:scale-105 transition"
        >
          Allow Access
        </button>

      </div>
    </div>
  );
}

export default Permission;