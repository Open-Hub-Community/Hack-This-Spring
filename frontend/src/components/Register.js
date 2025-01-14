import React from "react";
import { useState } from "react";
import { postForm } from "../services/service.js";
import "../style/register.css";
import { NavLink } from "react-router-dom";

function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [semester, setSemester] = useState("");
  const [gender, setGender] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { name, email, phoneNumber: phone, college, semester, gender,agree };
    // console.log(data);
    postForm(data)
      .then((result) => {
        console.log(result);
        setIsSubmitted(true);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.error(err.response.data.message);
        setIsLoading(false);
        setError(err.response.data.message);
      });
  };

  if (isSubmitted) {
    return (
      <div className="register-container">
        <div className="success-message">
          <h2>Registration Successful!</h2>
          <p>
            Thank you for registering for our hackathon. You will receive a
            <span style={{ color: "green" }}> confirmation email </span>shortly
            with further details.
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
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,10}$/.test(value)) {
                setPhone(value);
              }
            }}
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
            <option value="" disabled>
              Select Semester
            </option>
            <option value="1">Ist Semester</option>
            <option value="2">2nd Semester</option>
            <option value="3">3rd Semester</option>
            <option value="4">4th Semester</option>
            <option value="5">5th Semester</option>
            <option value="6">6th Semester</option>
            <option value="7">7th Semester</option>
            <option value="8">8th Semester</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gender *</label>
          <div className="gender-options">
            <label htmlFor="male">
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
                required
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                required
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>
        </div>
        <div className="form-group">
  <label htmlFor="terms">
    <input
      type="checkbox"
      id="terms"
      name="terms"
      checked={agree}
      required
      onChange={(e) => setAgree(e.target.checked)}
    />
    <span> I have read and agree to the <NavLink to="/conduct">Code of Conduct</NavLink> and <NavLink to="/rules">Rules</NavLink>.</span>
  </label>
</div>

        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Register;
