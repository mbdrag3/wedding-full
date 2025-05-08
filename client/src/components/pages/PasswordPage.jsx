// src/components/pages/PasswordPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Password.css';
import IMGpass from '../../assets/password-mike-yai.jpg';

const PasswordPage = () => {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const navigate = useNavigate();

  const api = process.env.REACT_APP_API_URL;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${api}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        const messages = [
          'Incorrect password. Try again!',
          'Still incorrect. Double check your spelling.',
          'Are you sure you were given the password?',
          'You should contact Yaimarys...'
        ];
        setErrorMessage(messages[Math.min(newAttempts - 1, messages.length - 1)]);
      }
    } catch (err) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className='password-pre-page-container'>
      <div className="password-page-container">
        <div className="card">
          <h1>Welcome to Michael & Yaimarys' Wedding Website</h1>
          <div className="card-bottom">
            <div className="card-left">
              <img
                src={IMGpass}
                alt="Placeholder"
                className="card-image"
              />
            </div>
            <div className="card-right">
              <h2>Please Enter Password</h2>
              <p className='password-note'>Password can be found on the details card</p>
              <form onSubmit={handleSubmit} className="password-form">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Type here"
                  className="password-input"
                />
                <button type="submit" className="password-button">
                  Submit
                </button>
                <p className='password-note'>
                  Having trouble getting in? <a className='link-text-password' href="tel:3059518621">Contact us here</a>
                </p>
              </form>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordPage;
