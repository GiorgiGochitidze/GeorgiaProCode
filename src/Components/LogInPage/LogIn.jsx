import '../CSS/LogInCSS/login.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='login-container'>
      <form action="">
        <p>შესვლა</p>

        <label htmlFor="სახელი">სახელი:</label>
        <input
          required
          placeholder='სახელი'
          type="text"
          id='სახელი'
          name='სახელი'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="მეილი">მეილი:</label>
        <input
          required
          placeholder='მეილი'
          type="email"
          id='მეილი'
          name='მეილი'
        />

        <label htmlFor="პაროლი">პაროლი:</label>
        <input
          required
          placeholder='პაროლი'
          type="password"
          id='პაროლი'
          name='პაროლი'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className='login-button' type='button' onClick={handleLogin}>
          შესვლა
        </button>

        <div className="otherlinks">
          <p>პაროლი დამავიწყდა</p>

          <p>
            არ გაქვს ექაუნთი?{' '}
            <Link style={{ textDecoration: 'none', color: '#6964f7' }} to='/Registration'>
              რეგისტრაცია
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
