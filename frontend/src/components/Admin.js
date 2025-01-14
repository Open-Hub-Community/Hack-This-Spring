import React, { useState, useEffect } from "react";
import "../style/admin.css";
import { postAdmin } from "../services/service.js";

function Admin() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [serverData, setServerData] = useState([]);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { name, password };
    postAdmin(data)
      .then((response) => {
        // if details match
        setServerData(response.data);
        // console.log(response.data);
        setIsSubmitted(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("An error occurred while logging in.");
        console.error(err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    if (serverData && Object.keys(serverData).length > 0) {
      console.log("Server Data:", serverData);
    }
  }, [serverData]);
  return (
    <div className="register-container">
      <h1>Admin Portal</h1>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Admin Id</label>
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
            <label htmlFor="name">Password</label>
            <input
              type="password"
              id="name"
              name="name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? "Logging In..." : "Login"}
          </button>
        </form>
      ) : (
        <>
        <div className="server-response">
        <h2>Server Response:</h2>
        <pre>{JSON.stringify(serverData, null, 2)}</pre>
      </div>
        {/*  
        <div className="server-response">
        <h2>Server Response:</h2>
        {serverData.map((user, index) => (
          <div key={index}>
            <p>ID: {user._id}</p>
            <h3>User Name: {user.name}</h3>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
        */}   </> 
      )}

    
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Admin;
