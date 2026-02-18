import { useNavigate } from "react-router-dom";
import "../App.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard-layout">
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2>GPU System</h2>
        <ul>
          <li>Dashboard</li>
          <li>Monitoring</li>
          <li>Optimization</li>
          <li onClick={handleLogout} className="logout">
            Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="topbar">
          <h1>AI GPU Optimization Dashboard</h1>
        </div>

        <div className="grid">
          <div className="metric-card">
            <h3>GPU Utilization</h3>
            <p>72%</p>
          </div>

          <div className="metric-card">
            <h3>Memory Usage</h3>
            <p>6.3 / 8 GB</p>
          </div>

          <div className="metric-card">
            <h3>Temperature</h3>
            <p>68°C</p>
          </div>

          <div className="metric-card">
            <h3>Batch Size</h3>
            <p>32</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
