import React, { useState } from "react";
import { FaTwitter, FaLinkedin,FaGithub} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../style/footer.css';
import { postEmail } from "../services/service.js";
function Footer() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    postEmail({ email })
      .then((result) => {
        console.log(result.data);
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
        <a href="https://www.x.com/open8hub" target="_blank" rel="noopener noreferrer">
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
        <a href="https://github.com/Open-Hub-Community" target="_blank" rel="noopener noreferrer">
    <FaGithub size={24} />
  </a>
      </div>
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
      <p className="footer-text">
        &copy; {currentYear} Open-Hub-Community, All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
