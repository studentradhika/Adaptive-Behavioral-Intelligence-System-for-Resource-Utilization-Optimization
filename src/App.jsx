import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {

  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("auth") === "true"
  );

  return (
    <>
      {isAuth ? (
        <Dashboard
          onLogout={() => {
            localStorage.removeItem("auth");
            setIsAuth(false);
          }}
        />
      ) : (
        <Login
          onLogin={() => {
            localStorage.setItem("auth", "true");
            setIsAuth(true);
          }}
        />
      )}
    </>
  );
}

export default App;