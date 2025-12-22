import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/materials", label: "Lectures" },
    { path: "/resources", label: "Resources" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <NavLink to="/" className="logo">
          <img src="/Logo.png" alt="Logo" />
          <span className="logo-text">Stellar Insights</span>
        </NavLink>
      </div>
      <nav className="nav">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      
      <div className="burger-menu" onClick={toggleSidebar}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
        <span className="close-btn" onClick={closeSidebar}>&times;</span>
        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path} className="sidebar-link" onClick={closeSidebar}>
            {link.label}
          </NavLink>
        ))}
      </div>

      {isSidebarOpen && <div className="backdrop" onClick={closeSidebar}></div>}
    </header>
  );
};

export default Header;
