import { Link, useNavigate } from "react-router-dom";
import { Plane, User, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/dashboard" className="logo">
        <Plane size={28} />
        GlobeTrotter
      </Link>

      <div className="nav-links">
        <Link to="/dashboard">Home</Link>
        <Link to="/my-trips">My Trips</Link>
        <Link to="/city-search">Explore</Link>

        {user && (
          <>
            <Link to="/profile">
              <User size={18} />
            </Link>

            <button onClick={handleLogout} className="logout-btn">
              <LogOut size={18} />
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;