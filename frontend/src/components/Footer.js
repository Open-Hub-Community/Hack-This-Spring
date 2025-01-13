import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import "../style.css";
import { postEmail } from "../services/service.js";
function Footer() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    postEmail({ email })
      .then((response) => {
        console.log(response.data);
        alert("Subscribed successfully!");
      })

      .catch((err) => {
        console.error(err);
        alert("An error occurred while submitting the form.");
      });
  };
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
      </div>
      <p className="footer-text">
        &copy; {currentYear} Open-Hub-Community, All rights reserved.
      </p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for NewsLetter"
          required
        />
        <button type="submit">Send</button>
      </form>
    </footer>
  );
}

export default Footer;
