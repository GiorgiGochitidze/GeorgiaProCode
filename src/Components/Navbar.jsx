import { Link } from "react-router-dom";
import "./CSS/mainpagecss/Navbar.css";

const Navbar = ({handleItemClick}) => {
    
  return (
      <header>
        <nav>
          <div>
            <img src="/logo.png" alt="our command logo" />
            <h3>GeorgiaProCode</h3>
          </div>

          <Link to='/' style={{textDecoration: 'none', color: 'black'}}><p>მთავარი</p></Link>
          <Link to='/Courses' style={{textDecoration: 'none', color: 'black'}}><p>კურსები</p></Link>
          <Link to='/ContactUs' style={{textDecoration: 'none', color: 'black'}}><p>კონტაქტი</p></Link>
          <p>შესვლა</p>
          <p>რეგისტრაცია</p>

          <button onClick={handleItemClick} className="menu-button">მენიუ</button>
        </nav>
      </header>
  );
};

export default Navbar;
