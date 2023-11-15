import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CSS/mainpagecss/Navbar.css';
import main from '../assets/main.png';
import menu from '../assets/menu.png';
import closeimg from '../assets/closeimg.png';

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

  return (
    <header>
            {isNavbarVisible && 
      
      <div className="navbar-menu-container">

      </div>
      
      }
      <nav>

        <div>
          <img src="/logo.png" alt="our command logo" />
          <h3>GeorgiaProCode</h3>
        </div>

        <button onClick={toggleNavbar} className={`navbar-closeOpen-btn ${isNavbarVisible ? 'open' : 'close'}`}>
          <img style={{ width: '38px' }} src={buttonImage} alt="" />
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

      

      <div className="searchAndImage-container">
        <div className="content-container">
          <h1>საუკეთესო კურსები შენთვის და შენი მეგობრებისთვის ქართულად</h1>
          <p>სახალისო და მარტივი კურსების ნახვა შეგიძლია აქ</p>
          <div className="searchbar-container">
            <input className="searchBar-input" placeholder="კურსების ძიება..." type="text" />
            <button className="searchBtn">ძიება</button>
          </div>
        </div>
        <img className="girl-image" src={main} alt="girl image" />
      </div>
    </header>
  );
};

export default Navbar;
