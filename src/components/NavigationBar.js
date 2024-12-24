import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './NavigationBar.css'; // Import the styles for the navbar

const NavigationBar = ({ username }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  // Function to handle Logout
  const handleLogout = () => {
    navigate('/'); // Navigate to the root page
  };

  return (
    <nav className="navbar">
      {/* Left Section: Logo and Navigation Links */}
      <div className="navbar-left">
        <span className="navbar-logo">Folia</span>
        <ul className="navbar-links">
          <li>Studio</li>
          <li>Dashboard</li>
          <li>Tutorial</li>
        </ul>
      </div>

      {/* Right Section: Hi, User */}
      <div className="navbar-right">
        <div className="navbar-user" onClick={toggleDropdown}>
          Hi, <span className="username">{username}</span>
        </div>

        {/* Dropdown Menu */}
        {isDropdownVisible && (
          <div className="dropdown-menu">
            <div className="dropdown-header">
              <span className="dropdown-avatar">👤</span>
              <div className="dropdown-info">
                <p className="dropdown-name">{username}</p>
                <p className="dropdown-email">{username}@info.com</p>
              </div>
            </div>
            <hr />
            <ul className="dropdown-options">
              <li>
                <span className="dropdown-icon">👤</span> Profile
              </li>
              {/* <li>
                <span className="dropdown-icon">⚙️</span> Settings
              </li> */}
              <li onClick={handleLogout} style={{ cursor: 'pointer' }}>
                <span className="dropdown-icon">🔓</span> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
