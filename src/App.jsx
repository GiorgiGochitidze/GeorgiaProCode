import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/ContactUsPage/Contact";
import CoursesPage from "./Components/CoursesPage/CoursesPage";
// import LogIn from "./Components/LogInPage/LogIn";
// import Registration from "./Components/RegistrationPage/Registration";
import Footer from "./Components/mainPageItems/Footer";
import Entering from "./Components/HtmlCourse/Entering";
import CodePlayGround from "./Components/CodePlayGround";
import Course1 from "./Components/HtmlCourse/Course1";
import Course2 from "./Components/HtmlCourse/Course2";
import Course3 from "./Components/HtmlCourse/Course3";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Courses" element={<CoursesPage />} />
          {/* <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Registration" element={<Registration />} /> */}
          <Route path="/Html" element={<Entering />} />
          <Route path="/Ground" element={<CodePlayGround />} />
          <Route path="/Course1" element={<Course1 />} />
          <Route path="/Course2" element={<Course2 />} />
          <Route path="/Course3" element={<Course3 />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
