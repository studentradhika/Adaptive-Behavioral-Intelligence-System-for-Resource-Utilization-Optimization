import { useNavigate } from "react-router-dom";
import "../App.css";

function Permission() {
  const navigate = useNavigate();

  const handleAccess = () => {
    localStorage.setItem("hasPermission", "true");
    navigate("/dashboard");
  };


  return (
    <div className="center">
      <div className="card">
        <h2>Grant System Access</h2>

        <label>
          <input type="checkbox" /> Allow GPU Monitoring
        </label>

        <label>
          <input type="checkbox" /> Allow Optimization Control
        </label>

        <button onClick={handleAccess}>Grant Access</button>
      </div>
    </div>
  );
}

export default Permission;
