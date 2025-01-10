import React from "react";
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="background-image"></div>
        <div className="profile-info">
          <img
            src="https://via.placeholder.com/120"
            alt="User"
            className="profile-pic"
          />
          <h1 className="profile-name">John Doe</h1>
          <p className="profile-location">Hauz Khas, Delhi</p>
        </div>
      </div>

      <div className="profile-details">
        <h2>Profile Information</h2>
        <p>
          Welcome to your profile! Here you can see and manage your personal
          details.
        </p>
        <div className="details-list">
          <div className="detail-item">
            <span className="label">Mobile:</span>
            <span className="value">+91 1234567890</span>
          </div>
          <div className="detail-item">
            <span className="label">Email:</span>
            <span className="value">john.doe@mail.com</span>
          </div>
          <div className="detail-item">
            <span className="label">Location:</span>
            <span className="value">Hauz Khas, Delhi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
