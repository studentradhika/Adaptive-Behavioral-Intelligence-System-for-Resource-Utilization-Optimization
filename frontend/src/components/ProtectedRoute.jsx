import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem("isAuthenticated");
  const hasPermission = localStorage.getItem("hasPermission");

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  if (!hasPermission) {
    return <Navigate to="/permission" />;
  }

  return children;
}

export default ProtectedRoute;
