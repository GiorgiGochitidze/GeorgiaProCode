import "./App.css";
import Contact from "./Components/ContactUsPage/Contact";
import Home from "./Components/Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import CoursesPage from "./Components/CoursesPage/CoursesPage";
import LogIn from './Components/LogInPage/LogIn'
import Footer from "./Components/mainPageItems/Footer";

function App() {

  return (
    <Router>
    <>

    <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/Courses" element={<CoursesPage />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>

      <Footer />
    </>
    </Router>
  );
}

export default App;
