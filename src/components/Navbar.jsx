import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <Link to="/">Home</Link>

      {!isAuthenticated && <Link to="/login">Login</Link>}

      {isAuthenticated && <Link to="/dashboard">Dashboard</Link>}

      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}
