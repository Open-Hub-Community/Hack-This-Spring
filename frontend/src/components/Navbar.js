import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.ico';
import '../style/nav.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Hackathon Logo" className="logo-image"/>
        </div>
        <div className="navbar-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Home
          </NavLink>
          <NavLink 
            to="/submit-project" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Submit Project
          </NavLink>
          <NavLink 
            to="/schedule" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Schedule
          </NavLink>
          <NavLink 
            to="/rules" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Rules
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            About
          </NavLink>
          <NavLink to="/register">
            <button className="register-button">Register Now</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
