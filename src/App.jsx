import "./App.css";
import Contact from "./Components/ContactUsPage/Contact";
import Home from "./Components/Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import CoursesPage from "./Components/CoursesPage/CoursesPage";
import LogIn from './Components/LogInPage/LogIn'

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [itemHeight, setItemHeight] = useState('40px');

  const handleItemClick = () => {
    // Change the height to a new value when the item is clicked
    setShowMenu(true);
    setItemHeight('450px'); // You can set any height value you prefer
    // Close the menu
  };

  return (
    <Router>
    <>

    {showMenu && (
        <div className="navbar-dropmenu-container">
          <div className="navbar-menu-dropbox" style={{height: itemHeight}}>
              <div style={{width: '100%'}}>
              <button onClick={() => setShowMenu(false)} style={{margin: 'auto', marginBottom: '10px'}} className="menu-button">მენიუ</button>
                <Link onClick={() => setShowMenu(false)} to='/' style={{textDecoration: 'none', color: 'black'}}><p>მთავარი</p></Link>
                <Link onClick={() => setShowMenu(false)} to='/Courses' style={{textDecoration: 'none', color: 'black'}}><p>კურსები</p></Link>
                <Link onClick={() => setShowMenu(false)} to='/ContactUs' style={{textDecoration: 'none', color: 'black'}}><p>კონტაქტი</p></Link>
                <Link onClick={() => setShowMenu(false)} to='/LogIn' style={{textDecoration: 'none', color: 'black'}}><p>შესვლა</p></Link>
                <p>რეგისტრაცია</p>
              </div>
          </div>
        </div>
      )}

    <Navbar setShowMenu={setShowMenu} handleItemClick={handleItemClick} />

      <Routes>
        <Route path="/" exact element={<Home setShowMenu={setShowMenu} handleItemClick={handleItemClick}  />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/Courses" element={<CoursesPage />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </>
    </Router>
  );
}

export default App;
