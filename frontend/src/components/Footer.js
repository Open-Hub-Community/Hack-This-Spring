import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../style/footer.css";
import { postNewsLetter } from "../services/service.js";
import { NavLink } from "react-router-dom";
function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    postNewsLetter({ email })
      .then((result) => {
        // console.log(result.data);
        setIsSubmitted(true);
        setIsLoading(false);
        setError(false);
        // alert("Subscribed successfully!");
      })

      .catch((err) => {
        console.error(err);
        setIsSubmitted(false);
        setIsLoading(false);
        setError(err.response.data.message);
        // alert("An error occurred while submitting the form.");
      });
  };
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://www.x.com/open8hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/open8hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:open8hub@gmail.com" rel="noopener noreferrer">
          <MdEmail size={24} />
        </a>
        <a
          href="https://github.com/Open-Hub-Community"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <div className="essentials">
        <NavLink to="/conduct">Code of Conduct</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </div>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for NewsLetter"
          required
        />
        <button type="submit">{isLoading ? `Submitting...` : `Submit`}</button>
      </form>
      {isSubmitted ? (
        <p className="newsletter-message green">
          Thanks for subscribing to our newsletter
        </p>
      ) : (
        <p className="newsletter-message red">
          {error === "Internal server error while handling new subscription"
            ? "Check email again"
            : error}
        </p>
      )}
      <p className="footer-text">
        &copy; {currentYear} Open-Hub-Community, All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
