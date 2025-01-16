import React, { useState, useEffect } from "react";
import "../style/admin.css";
import { postAdmin } from "../services/service.js";
import Details from "./Details.js";

function Admin() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [serverData, setServerData] = useState([]);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const[subscribers,setSubscribers] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { adminId: name, password };
    postAdmin(data)
      .then((response) => {
        console.log(response.data);
        setServerData(response.data[0]);
        setSubscribers(response.data[1]);
        setIsSubmitted(true);
        setIsLoading(false);
        setError(false);
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
    <div>
      <h1>Admin Portal</h1>
      {!isSubmitted ? (
        <div className="register-container">
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? "Logging In..." : "Login"}
            </button>
          </form>
        </div>
      ) : (
        <div className="server-response">
          <Details serverData={serverData} subscribers={subscribers}/>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Admin;
