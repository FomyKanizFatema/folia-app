
import React from 'react';
import './LoginPage.css'; // Keep your existing styles
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

function LoginPage() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle the login button click
  const handleLogin = () => {
    // Simulate successful login (you can replace this with an API call later)
    console.log('Login button clicked');
    
    // Navigate to the homepage ("/")
    navigate('/homepage');
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <h1 className="welcome-text">Hi, Welcome Back!</h1>
        
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            placeholder="example@gmail.com"
            className="input-field"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input 
              type="password" 
              id="password"
              placeholder="Enter Your Password"
              className="input-field"
            />
            <span className="password-toggle">👁️</span>
          </div>
        </div>

        <div className="extra-options">
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <a href="#forgot" className="forgot-password">Forgot Password?</a>
        </div>

        {/* Attach the handleLogin function to the onClick event */}
        <button className="login-button" onClick={handleLogin}>Login</button>

        
        <div className="signup-link">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
