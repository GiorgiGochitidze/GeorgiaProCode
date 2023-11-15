import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CSS/mainpagecss/Navbar.css';
import menu from '../assets/menu.png';
import closeimg from '../assets/closeimg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isNavbarVisible, setNavbarVisibility] = useState(false);
  const [buttonImage, setButtonImage] = useState(menu);

  useEffect(() => {
    // Change the button image based on the navbar visibility
    setButtonImage(isNavbarVisible ? closeimg : menu);
  }, [isNavbarVisible]);

  const toggleNavbar = () => {
    setNavbarVisibility(!isNavbarVisible);
  };


    useEffect(() => {
      AOS.init();
    }, [isNavbarVisible]);

  return (
    <header>
            {isNavbarVisible && 
      
      <div className="navbar-menu-container">
        <div className='drop-menu' data-aos="fade-right" data-aos-duration="500">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <p>მთავარი</p>
            </Link>
            <Link to="/Courses" style={{ textDecoration: 'none', color: 'black' }}>
              <p>კურსები</p>
            </Link>
            <Link to="/ContactUs" style={{ textDecoration: 'none', color: 'black' }}>
              <p>კონტაქტი</p>
            </Link>
            <p>შესვლა</p>
            <p>რეგისტრაცია</p>
          </div>
      </div>
      
      }
      <nav>

        <div>
          <img src="/logo.png" alt="our command logo" />
          <h3>GeorgiaProCode</h3>
        </div>

        <button onClick={toggleNavbar} className={`navbar-closeOpen-btn ${isNavbarVisible ? 'open' : 'close'}`}>
          <img data-aos='fade-bottom' style={{ width: '38px' }} src={buttonImage} alt="" />
        </button>

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
          <p>შესვლა</p>
          <p>რეგისტრაცია</p>
        </>

      </nav>
    </header>
  );
};

export default Navbar;
