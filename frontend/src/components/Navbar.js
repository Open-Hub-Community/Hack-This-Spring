import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon1 from '../assets/icon1.png';
import '../style/nav.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
         <NavLink to='/'> <img src={icon1} alt="Hackathon Logo" className="logo-image"/> </NavLink>
        </div>
        <h1 className="nav-title">HACK THIS SPRING</h1>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active-link" : ""}
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          {/* 
          <NavLink 
            to="/submit-project" 
            className={({ isActive }) => isActive ? "active-link" : ""}
            onClick={toggleMenu}
          >
            Submit Project
          </NavLink>
          <NavLink 
            to="/schedule" 
            className={({ isActive }) => isActive ? "active-link" : ""}
            onClick={toggleMenu}
          >
            Schedule
          </NavLink>
          */}
          <NavLink 
            to="/rules" 
            className={({ isActive }) => isActive ? "active-link" : ""}
            onClick={toggleMenu}
          >
            Rules
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "active-link" : ""}
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink to="/register" onClick={toggleMenu}>
            <button className="register-button">Register Now</button>
          </NavLink>
        </div>
        <div className="pos">
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

