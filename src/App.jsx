import "./App.css";
import Contact from "./Components/ContactUsPage/Contact";
import Home from "./Components/Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from "./Components/Navbar";

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
                <p>ჩვენს შესახებ</p>
                <p>კურსები</p>
                <Link onClick={() => setShowMenu(false)} to='/ContactUs' style={{textDecoration: 'none', color: 'black'}}><p>კონტაქტი</p></Link>
                <p>დახმარება</p>
              </div>
          </div>
        </div>
      )}

    <Navbar setShowMenu={setShowMenu} handleItemClick={handleItemClick} />

      <Routes>
        <Route path="/" exact element={<Home setShowMenu={setShowMenu} handleItemClick={handleItemClick}  />} />
        <Route path="/ContactUs" element={<Contact />} />
      </Routes>
    </>
    </Router>
  );
}

export default App;
