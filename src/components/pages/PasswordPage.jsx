import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordPage = () => {
  // Local state for the password input and error messages
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Hardcode a password just for demonstration
  // (In production, remember this is not truly secure)
  const correctPassword = 'secret123';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === correctPassword) {
      // Store a flag in localStorage so we can check later
      localStorage.setItem('auth', 'true');
      navigate('/'); // Redirect to home page (or wherever you want)
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div style={{ marginTop: '5rem', textAlign: 'center' }}>
      <h1>Enter Password</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            marginLeft: '1rem',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
};

export default PasswordPage;
