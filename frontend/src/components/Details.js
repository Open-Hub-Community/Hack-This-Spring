import React from 'react';
import "../style/details.css";
// import { getSubscriber } from "../services/service.js";

const Details = ({ serverData, subscribers }) => {


    return (
      <>
        {serverData.map((user, index) => (
          <div key={index} className="college-info-card">
            <div className="college-details">
              <h2 className="name">{user.name}</h2>
              <div className="detail">
                <strong>College:</strong> <span>{user.college}</span>
              </div>
              <div className="detail">
                <strong>Id:</strong> <span>{user._id}</span>
              </div>
              <div className="detail">
                <strong>Gender:</strong> <span>{user.gender}</span>
              </div>
              <div className="detail">
                <strong>Email:</strong> <span>{user.email}</span>
              </div>
              <div className="detail">
                <strong>Phone Number:</strong> <span>{user.phoneNumber}</span>
              </div>
              <div className="detail">
                <strong>Semester:</strong> <span>{user.semester}</span>
              </div>
              <div className="detail">
                <strong>Created At:</strong> <span>{new Date(user.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="subscribed-users-container">
  <h2 className="subscribed-users-title">Subscribed Users</h2>
  <ul className="subscribed-users-list">
    {subscribers.map((item, index) => (
      <li key={index} className="subscribed-users-item">
        {item.email}
      </li>
    ))}
  </ul>
</div>


      </>
    );
  };
  
  

export default Details;
