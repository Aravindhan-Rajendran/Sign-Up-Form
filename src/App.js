import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Signup from './Signup';
import Profile from './Profile';
import './App.css';

const App = () => {
  return (
    <Router>
      <header id="header">
        <div className="header-left">Header</div>
        <div className="header-right">
          <nav className="navbar">
            <ul>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <hr/>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />  {/* Redirect from root to /signup */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;