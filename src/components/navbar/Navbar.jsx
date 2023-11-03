import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = ({ type }) => {
  return (
    <header className="navbar">
      <div className={`navbar_title navbar_item ${type ? "" : "active"}`}>
        <Link to="/" className="navbar_link ">
          NewsHub
        </Link>
      </div>
      <div className={`navbar_item ${type == "weather" ? "active" : ""}`}>
        <Link to="/weather" className="navbar_link">
          Weather Info
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
