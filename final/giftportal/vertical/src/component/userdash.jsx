// UserDashboardComponent.jsx

import React, { useState } from 'react';
import './userdash.css';

const UserDashboardComponent = () => {
  // Initial user data
  const [userData, setUserData] = useState({
    username: 'ExampleUser',
    email: 'example@example.com',
    password: '********',
  });

  // State for tracking edited user data
  const [editedUserData, setEditedUserData] = useState({ ...userData });

  // Function to handle changes in the edit form
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle submitting the edited data
  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Update the user data with edited information
    setUserData({ ...editedUserData });
    // You can also send the editedUserData to your backend for further processing
  };

  return (
    <div className="user-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile-info">
          <h3>{userData.username}</h3>
          <p>{userData.email}</p>
        </div>
        <div className="sidebar-options">
          <button>View Profile</button>
          <button>Edit Profile</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>User Information</h2>
        <form onSubmit={handleEditSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={editedUserData.username}
              onChange={handleEditChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={editedUserData.email}
              onChange={handleEditChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={editedUserData.password}
              onChange={handleEditChange}
            />
          </label>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default UserDashboardComponent;