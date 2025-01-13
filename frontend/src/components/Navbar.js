import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.ico';
import '../style.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div>
        <img src= {logo} alt="Hackathon Logo" className="logo-image" />
          
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/submit-project">Submit Project</Link>
          <Link to="/about">About</Link>
          <Link to="/register">
          <button className="register-button">Register Now</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
