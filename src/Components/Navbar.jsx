import './CSS/Navbar.css'
import React, { useState } from 'react';


const Navbar = () => {

    return ( 
        <header>
            <nav>
                <div>
                    <img src="/logo.png" alt="our command logo" />
                    <h3>GeorgiaProCode</h3>
                </div>

                <p>მთავარი</p>
                <p>ჩვენს შესახებ</p>
                <p>კურსები</p>
                <p>კონტაქტი</p>
                <p>დახმარება</p>

                <button className='menu-button'>მენიუ</button>
            </nav>
        </header>
     );
}
 
export default Navbar;