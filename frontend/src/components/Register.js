import React from "react";
import { useState } from "react";
import { postForm } from "../services/service.js";
import "../style/register.css";

function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [semester, setSemester] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { name, email, phoneNumber: phone, college, semester };
    // console.log(data);
    postForm(data)
      .then((result) => {
        console.log(result.message);
        setIsSubmitted(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  if (isSubmitted) {
    return (
      <div className="register-container">
        <div className="success-message">
          <h2>Registration Successful!</h2>
          <p>
            Thank you for registering for our hackathon. You will receive a
            confirmation email shortly with further details.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="register-container">
      <h1>Register for the Hackathon</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number *</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phone}
            onChange={(e) => {const value = e.target.value; if (/^\d{0,10}$/.test(value)) {
              setPhone(value);
            }}}
            required
            maxLength={10}
            pattern="^[0-9]{10}$"
            title="Phone number must be 10 digits"
          />
        </div>
        <div className="form-group">
          <label htmlFor="college">College *</label>
          <input
            type="text"
            id="college"
            name="college"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="semester">Semester *</label>
          <select
            id="semester"
            name="semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            required
          >
            <option value="" disabled>Select Semester</option>
            <option value="3">3rd Semester</option>
            <option value="4">4th Semester</option>
            <option value="5">5th Semester</option>
            <option value="6">6th Semester</option>
            <option value="7">7th Semester</option>
            <option value="8">8th Semester</option>
          </select>
        </div>
        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
    </div>
  );
}

export default Register;
