import React from 'react';
import './SignUpPage.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const SignUpPage = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle form submission
  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent page reload
    // Perform any sign-up logic here (e.g., form validation, API call, etc.)
    
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Create an account</h1>

        <form className="signup-form" onSubmit={handleSignUp}>
          {/* Name Field */}
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="ex. John Doe"
              required
            />
          </div>

          {/* Email Field */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@xyz.com"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="+49 xxxxxxxxxxx"
              required
            />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
              <span className="password-toggle">👁️</span>
            </div>
          </div>

          {/* Sign-Up Button */}
          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        {/* Redirect to Login */}
        <div className="bottom-text">
          Already have an account? <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
