import '../CSS/LogInCSS/login.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <button className='login-button' type='submit' >
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
