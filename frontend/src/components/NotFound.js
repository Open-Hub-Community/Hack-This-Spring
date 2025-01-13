import React from 'react';
import { NavLink } from "react-router-dom";
import '../style/notfound.css'

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="glitch" data-text="404">404</div>
      <div className="message">Oops! Page not found</div>
      <div className="submessage">The page you're looking for doesn't exist or has been moved.</div>
      <NavLink to="/" className="home-button">
        Return to Homepage
      </NavLink>
    </div>
  )
}
