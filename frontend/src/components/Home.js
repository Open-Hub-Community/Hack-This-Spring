import React, { useState, useEffect } from "react";
import "../style/home.css";
import { NavLink } from "react-router-dom";
import cover from "../assets/cover.jpg";
const Home = () => {
  const [timeLeft, setTimeLeft] = useState(
    "00 days 00 hours 00 minutes 00 seconds"
  );

  useEffect(() => {
    const targetDate = new Date("2025-03-15T09:00:00"); // Set the hackathon start date
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft("00 days 00 hours 00 minutes 00 seconds");
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft(
          `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const faqData = [
    {
      question: "What is a hackathon? Will there be actual hacking?",
      answer:
        'A hackathon is an event where students "hack" together and create an app, website, game, etc. in 24-48 hours. There will be no malicious "hacking".',
    },
    {
      question: "Who can participate?",
      answer:
        "Anyone who is passionate about coding and is a beginner can join!",
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, and a zest for coding!",
    },
    {
      question: "Is there a participation fee?",
      answer: "No, this event is completely free!",
    },
    {
      question: "Is the event free to attend?",
      answer:
        "Yes! Food will be provided for the duration of the event. We will also have swag and prizes!",
    },
    {
      question: "Where is the event?",
      answer: "The event is located in the Gcet Safapora Ganderbal.",
    },
    {
      question:
        "Who can attend? What if I don't have any experience? Do I have to be 18?",
      answer:
        "This event is open to any students. It is beginner friendly, with workshops to help you learn during the event, and mentors available to help you as you work on your project. Attendees must be at least 13 years old due to child privacy laws. If under 18, you can attend, but will need to fill out a liability form from the university.",
    },
    {
      question: "What is the team size limit?",
      answer:
        "You can be on teams of up to 4. We will have a team building activity right after opening ceremony if you need to find team members!",
    },
    {
      question: "Are there travel reimbursements?",
      answer: "We are not able to provide travel reimbursements at this time.",
    },
    {
      question:
        "When can we start working on our project? Can I work on a previous project?",
      answer:
        "You cannot start until after opening ceremony. You may come up with ideas, but are not allowed to start coding. You cannot work on a previous project, but can use frameworks if you clearly credit them in your readme and differentiate what you made vs what you used.",
    },
    {
      question: "Do I have to stay overnight?",
      answer:
        "No, you can leave and come back if you would prefer to go to bed.",
    },
    {
      question: "What kind of activities will there be?",
      answer:
        "We will post the schedule closer to the event. There will be workshops and activities to take a break and meet other hackers and our wonderful sponsors.",
    },
    {
      question: "Will hardware be available?",
      answer:
        "We do not have hardware available, but you are welcome to bring your own. Due to building fire codes, please do not bring soldering kits.",
    },
    {
      question:
        "Are you sending out acceptances? Is there a deadline to apply? Is there a waitlist?",
      answer:
        "We will send out acceptances XX days before the event. If you need to know before then to book travel, please reach out to our team for an early review. Applications will be closing once we reach the maximum amount of hackers we can support, but we will have a waitlist the day of the event for any local hackers who want to fill the spots of any accepted hackers who do not end up attending.",
    },
    {
      question: "How do I sign up to be a mentor/judge/volunteer?",
      answer: "You can sign up here - LINK",
    },
    {
      question: "I still have a question!",
      answer: "Email us at team@openhub.com",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="app">
      {/* Event Banner */}
      <header className="banner">
        <h1>HACK THIS SPRING</h1>
        <img src={cover} alt="cover" className="cover-image" />
        <p>
          "Ready to code? Excited for challenges? 🌟 HACK-THIS-SPRING is where
          beginners transform passion into action. 🚀 Join us for an
          electrifying 48-hour hackathon you don’t want to miss!"
        </p>
      </header>

      {/* Brief About Hackathon */}
      <section className="about">
        <h2>About the Hackathon</h2>
        <p>
          HACK THIS SPRING is a beginner-friendly hackathon organized by the
          OpenHub Community. This in-person event will be held at [Insert Venue
          Name Here]. Join us for 48 hours of coding, learning, and
          collaboration with like-minded individuals!
        </p>
      </section>

      {/* Countdown */}
      <section className="countdown">
        <h2>48 Hours. One Epic Hackathon. Are You Ready?</h2>
        <div className="timer">{timeLeft}</div>
      </section>

      {/* Register Button */}
      <section className="home-register">
        <NavLink to="/register">
          <button className="home-register-button">Register Now</button>
        </NavLink>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors">
        <h2>Our Sponsors</h2>
        <div className="sponsor-logos">
          {/* Add sponsor logos here */}
          <img src="sponsor1.png" alt="Sponsor 1" />
          <img src="sponsor2.png" alt="Sponsor 2" />
          <img src="sponsor3.png" alt="Sponsor 3" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqData.map((item, index) => (
            <li key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {item.question}
              </button>
              {activeIndex === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
