import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent default form submission
  
    // Validation checks
    if (!fullName || !email || !password || !confirmPassword) {
      setErrorMessage('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
  
    // If validation passes, simulate a successful signup
    const user = { fullName, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('accessToken', 'dummy-access-token'); // Simulate access token
    setSuccessMessage('Signup successful!');
    navigate('/profile'); // Redirect to the profile page
  
    // Clear previous messages
    setTimeout(() => {
      setErrorMessage('');
      setSuccessMessage('');
    }, 3000); // Clear messages after 3 seconds
  };
  

  return (
    <div className="container">
      <form onSubmit={handleSignup}>
        <h1>Signup</h1>
        {errorMessage && <p style={{ color: 'red' }} aria-live="assertive">{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }} aria-live="polite">{successMessage}</p>}
        
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          required
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          autoComplete="new-password" // Added autocomplete attribute
        />
        
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
          autoComplete="new-password" // Added autocomplete attribute
        />
        
        <button type="submit" className="signup">Signup</button>
      </form>
    </div>
  );
};

export default Signup;