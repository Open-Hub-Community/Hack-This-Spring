import React from 'react';
import '../style/about.css';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">
        Welcome to <strong>Hack This Spring</strong>!
      </h1>
      <p className="about-subtitle">
        Organized by <strong>Open Hub Community</strong>, this is our first ever hackathon! Join us to collaborate, innovate, and bring your ideas to life.
      </p>

      <h2 className="section-title-about green">About Open Hub Community</h2>
      <p>
        <strong>Open Hub Community</strong> is dedicated to fostering open-source collaboration, enhancing coding skills, and bridging the gap between academic knowledge and real-world applications. We host workshops, hackathons, and tech talks to build an inclusive environment for developers and learners.
      </p>

      <h2 className="section-title-about red">🌟 What We’re All About</h2>
      <ul className="list">
        <li>Educational Workshops: From Git basics to advanced coding sessions.</li>
        <li>Hackathons: Encouraging creative problem-solving and teamwork.</li>
        <li>Tech Talks: Insights from industry experts.</li>
        <li>Open Source: Driving contributions to community projects.</li>
      </ul>

      <h2 className="section-title-about blue">💬 How to Join Us</h2>
      <p>
        Become a part of our journey by joining the OpenHub GitHub Organization.{' '}
        <a
          href="https://github.com/Open-Hub-Community/Support/issues/new?assignees=&labels=invite+me+to+the+community&projects=&template=invitation.yml&title=Please+invite+me+to+the+Open+Hub+Community+Organization"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Click here
        </a>{' '}
        to request an invitation.
      </p>

      <h2 className="section-title-about orange">📜 Code of Conduct</h2>
      <p>
        We value a welcoming and inclusive environment. Please review our{' '}
        <NavLink to="/conduct">Code of Conduct</NavLink>
        .
      </p>

      <h2 className="section-title-about purple">📚 Stay Connected</h2>
      <ul className="list">
        <li>Email: <a href="mailto:open8hub@gmail.com" target='_blank' rel='noreferrer' className="link">hello@openhub.com</a></li>
        <li>GitHub: <a href="https://github.com/Open-Hub-Community"target='_blank' rel='noreferrer' className="link">OpenHub Organization</a></li>
        <li>Twitter: <a href="https://x.com/open8hub" target='_blank' rel='noreferrer' className="link">@OpenHub</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/company/open8hub" target='_blank' rel='noreferrer' className="link">OpenHub LinkedIn</a></li>
      </ul>

      <p className="about-footer">
        We’re thrilled to have you with us. Let’s make this hackathon unforgettable!
      </p>
    </div>
  );
};

export default About;
