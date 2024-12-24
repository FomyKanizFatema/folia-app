import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';
import Studio from './components/Studio';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <button 
          className="get-started-button"
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </header>
      <main className="app-main">
        <h1>Welcome To Folia</h1>
        <p>Your Smart BPMN Assistant is Here<br />How Can I Assist?</p>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Tell Us What You Need" 
            className="search-input"
          />
          <button className="search-button">→</button>
        </div>
        <div className="tool-grid">
          <div className="tool-card" style={{ backgroundColor: '#FEEFC3' }}>BPMN Generation</div>
          <div className="tool-card" style={{ backgroundColor: '#D1E7DD' }}>Process Optimization</div>
          <div className="tool-card" style={{ backgroundColor: '#FBCFD9' }}>Smart Simulation</div>
          <div className="tool-card" style={{ backgroundColor: '#E0E7FF' }}>Process Validation</div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Login page route */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Signup page route */}
        <Route path="/signup" element={<SignupPage />} />

        {/* Home page route */}
        <Route path="/homepage" element={<HomePage />} />

        {/* Navbar route */}
        <Route path="/navigationBar" element={<NavigationBar />} />

        {/* Studio route */}
        <Route path="/studio" element={<Studio />} />
      </Routes>
    </Router>
  );
}

export default App;
