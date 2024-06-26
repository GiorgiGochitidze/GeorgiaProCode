import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/ContactUsPage/Contact";
import CoursesPage from "./Components/CoursesPage/CoursesPage";
import Footer from "./Components/mainPageItems/Footer";
import Entering from "./Components/HtmlCourse/Entering";
import Course1 from "./Components/HtmlCourse/Course1";
import Course2 from "./Components/HtmlCourse/Course2";
import Course3 from "./Components/HtmlCourse/Course3";
import TechnicalWorks from "./Components/TechnicalWorks";
import Course4 from "./Components/HtmlCourse/Course4";
import Course5 from "./Components/HtmlCourse/Course5";
import Registration from "./Components/mainPageItems/Registration";
import LogIn from "./Components/mainPageItems/LogIn";
import HtmlCourseLayout from "./Components/HtmlCourse/HtmlCourseLayout";
import CoursesList from "./Components/HtmlCourse/CoursesList";
import Course6 from "./Components/HtmlCourse/Course6";
import Course7 from "./Components/HtmlCourse/Course7";
import Course8 from "./Components/HtmlCourse/Course8";
import Course9 from "./Components/HtmlCourse/Course9";
import Course10 from "./Components/HtmlCourse/Course10";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/Courses" element={<CoursesPage />} />
        <Route path="/Register" element={<Registration />} />
        <Route path="/LogIn" element={<LogIn />} />

        <Route path="/Html" element={<HtmlCourseLayout />}>
          <Route index element={<Entering />} />
          <Route path="/Html/CoursesList" element={<CoursesList />} />
          <Route path="/Html/Course1" element={<Course1 />} />
          <Route path="/Html/Course2" element={<Course2 />} />
          <Route path="/Html/Course3" element={<Course3 />} />
          <Route path="/Html/Course4" element={<Course4 />} />
          <Route path="/Html/Course5" element={<Course5 />} />
          <Route path="/Html/Course6" element={<Course6 />} />
          <Route path="/Html/Course7" element={<Course7 />} />
          <Route path="/Html/Course8" element={<Course8 />} />
          <Route path="/Html/Course9" element={<Course9 />} />
          <Route path="/Html/Course10" element={<Course10 />} />
        </Route>
        <Route path="/TechnicalWorks" element={<TechnicalWorks />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
