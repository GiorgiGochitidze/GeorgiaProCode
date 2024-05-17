import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/mainpagecss/Navbar.css";
import menu from "../assets/menu.png";
import closeimg from "../assets/closeimg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { jwtDecode } from "jwt-decode";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";

const token = sessionStorage.getItem("token");
const decoded = token ? jwtDecode(token) : "token doesnt exists";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [buttonImage, setButtonImage] = useState(menu);
  const [profile, setProfile] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    setButtonImage(isNavbarVisible ? closeimg : menu);
  }, [isNavbarVisible]);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    navigate('/')
    window.location.reload()
  }

  useEffect(() => {
    AOS.init();
  }, [isNavbarVisible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      {isNavbarVisible && (
        <div className="navbar-menu-container">
          <div
            className="drop-menu"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            {token && (
              <>
                <p>გამარჯობა, {decoded.userName}</p>
                <p onClick={() => setIsNavbarVisible(false)}>პროფილი</p>
              </>
            )}

            <Link
              onClick={() => setIsNavbarVisible(false)}
              to="/"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                მთავარი
              </p>
            </Link>
            <Link
              onClick={() => {
                setIsNavbarVisible(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to="/Courses"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                კურსები
              </p>
            </Link>
            <Link
              onClick={() => setIsNavbarVisible(false)}
              to="/ContactUs"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                კონტაქტი
              </p>
            </Link>

            {token && (
              <p onClick={() => setIsNavbarVisible(false)}>პარამეტრები</p>
            )}

            {!token && (
              <>
                <Link
                  to="/Register"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    რეგისტრაცია
                  </p>
                </Link>

                <Link
                  to="/LogIn"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    შესვლა
                  </p>
                </Link>
              </>
            )}
            {token && <p onClick={handleLogout}>
              გასვლა
            </p>}
          </div>
        </div>
      )}
      <nav>
        <div>
          <img src="/logo.png" alt="our command logo" />
          <h3>GeorgiaProCode</h3>
          <button
            onClick={toggleNavbar}
            className={`navbar-closeOpen-btn ${
              isNavbarVisible ? "open" : "close"
            }`}
          >
            <img src={buttonImage} alt="" />
          </button>
        </div>
        <>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <p
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              მთავარი
            </p>
          </Link>
          <Link
            to="/Courses"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              კურსები
            </p>
          </Link>
          <Link
            to="/ContactUs"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              კონტაქტი
            </p>
          </Link>

          {!token && (
            <>
              <Link
                to="/Register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  რეგისტრაცია
                </p>
              </Link>

              <Link
                to="/LogIn"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  შესვლა
                </p>
              </Link>
            </>
          )}

          {token && (
            <div
              onClick={() => setProfile(!profile)}
              ref={profileRef}
              className="profile-container"
            >
              <FaRegUser size={25} color="white" />

              {profile && (
                <motion.div
                  initial={{ opacity: 0, width: "300px", height: "0px" }}
                  animate={{
                    opacity: 1,
                    width: "300px",
                    height: "300px",
                  }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                  }}
                  className="profile-list"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{ delay: 0.2 }}
                  >
                    გამარჯობა, {decoded.userName}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{ delay: 0.3 }}
                  >
                    პროფილი
                  </motion.p>
                  <Link
                    className="profile-links"
                    to="/"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{ delay: 0.4 }}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      მთავარი
                    </motion.p>
                  </Link>
                  <Link
                    className="profile-links"
                    to="/Courses"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{ delay: 0.5 }}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      კურსები
                    </motion.p>
                  </Link>
                  <Link
                    className="profile-links"
                    to="/ContactUs"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{ delay: 0.6 }}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      კონტაქტი
                    </motion.p>
                  </Link>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{ delay: 0.7 }}
                  >
                    პარამეტრები
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{ delay: 0.8 }}
                    onClick={handleLogout}
                  >
                    გასვლა
                  </motion.p>
                </motion.div>
              )}
            </div>
          )}
        </>
      </nav>
    </header>
  );
};

export default Navbar;
