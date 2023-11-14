import { Link } from "react-router-dom";
import "./CSS/mainpagecss/Navbar.css";
import main from '../assets/main.png'
import menu from '../assets/menu.png'
import React, { useState } from 'react';


const Navbar = () => {

  const [navbarMenu, setNavbarMenu] = useState(false)
    
  return (
      <header>

        {navbarMenu && 
          <div className="navbar-menu-container">
                      
          </div>
        }

        <nav>

          <button onClick={() => navbarMenu ? setNavbarMenu(false) : setNavbarMenu(true)} className="navbar-closeOpen-btn"><img src={menu} alt="" /></button>

          <div>
            <img src="/logo.png" alt="our command logo" />
            <h3>GeorgiaProCode</h3>
          </div>

        <>
          <Link to='/' style={{textDecoration: 'none', color: 'black'}}><p>მთავარი</p></Link>
          <Link to='/Courses' style={{textDecoration: 'none', color: 'black'}}><p>კურსები</p></Link>
          <Link to='/ContactUs' style={{textDecoration: 'none', color: 'black'}}><p>კონტაქტი</p></Link>
          <p>შესვლა</p>
          <p>რეგისტრაცია</p>

        </>

        </nav>

                      {/* in main page navbars under components */}
        <div className="searchAndImage-container">
          <div className="content-container">
              <h1>საუკეთესო კურსები შენთვის და შენი მეგობრებისთვის ქართულად</h1>
              <p>სახალისო და მარტივი კურსების ნახვა შეგიძლია აქ</p>

              <div className="searchbar-container">
                <input className="searchBar-input" placeholder="კურსების ძიება..." type="text" />
                <button className="searchBtn">ძიება</button>
              </div>
          </div>
                      {/* image of girl in navbar */}
          <img className="girl-image" src={main} alt="girl image" />
        </div>
      </header>
  );
};

export default Navbar;
