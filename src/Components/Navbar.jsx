import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CSS/mainpagecss/Navbar.css';
import menu from '../assets/menu.png';
import closeimg from '../assets/closeimg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [buttonImage, setButtonImage] = useState(menu);

  useEffect(() => {
    // Change the button image based on the navbar visibility
    setButtonImage(isNavbarVisible ? closeimg : menu);
  }, [isNavbarVisible]);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };


    useEffect(() => {
      AOS.init();
    }, [isNavbarVisible]);

  return (
    <header>
            {isNavbarVisible && 
      
      <div className="navbar-menu-container">
        <div className='drop-menu' data-aos="fade-right" data-aos-duration="500">
          <Link onClick={() => setIsNavbarVisible(false)} to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <p>მთავარი</p>
            </Link>
            <Link onClick={() => setIsNavbarVisible(false)} to="/Courses" style={{ textDecoration: 'none', color: 'black' }}>
              <p>კურსები</p>
            </Link>
            <Link onClick={() => setIsNavbarVisible(false)} to="/ContactUs" style={{ textDecoration: 'none', color: 'black' }}>
              <p>კონტაქტი</p>
            </Link>
            <Link onClick={() => setIsNavbarVisible(false)} to="/LogIn" style={{ textDecoration: 'none', color: 'black' }}>
              <p>შესვლა</p>
            </Link>

            <Link onClick={() => setIsNavbarVisible(false)} to="/Registration" style={{ textDecoration: 'none', color: 'black' }}>
            <p>რეგისტრაცია</p>
            </Link>
          </div>
      </div>
      
      }
      <nav>

        <div>
          <img src="/logo.png" alt="our command logo" />
          <h3>GeorgiaProCode</h3>

        <button onClick={toggleNavbar} className={`navbar-closeOpen-btn ${isNavbarVisible ? 'open' : 'close'}`}>
          <img src={buttonImage} alt="" />
        </button>
        </div>

        <>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <p>მთავარი</p>
          </Link>
          <Link to="/Courses" style={{ textDecoration: 'none', color: 'black' }}>
            <p>კურსები</p>
          </Link>
          <Link to="/ContactUs" style={{ textDecoration: 'none', color: 'black' }}>
            <p>კონტაქტი</p>
          </Link>
          <Link to="/LogIn" style={{ textDecoration: 'none', color: 'black' }}>
            <p>შესვლა</p>
          </Link>
          <Link to="/Registration" style={{ textDecoration: 'none', color: 'black' }}>
            <p>რეგისტრაცია</p>
            </Link>
        </>

      </nav>
    </header>
  );
};

export default Navbar;
