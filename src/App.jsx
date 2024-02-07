import "./App.css";
import Contact from "./Components/ContactUsPage/Contact";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import CoursesPage from "./Components/CoursesPage/CoursesPage";
import LogIn from './Components/LogInPage/LogIn'
import Footer from "./Components/mainPageItems/Footer";
import Registration from "./Components/RegistrationPage/Registration";
import Entering from "./Components/HtmlCourse/Entering";
import CodePlayGround from "./Components/CodePlayGround";
import Course1 from "./Components/HtmlCourse/Course1";



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
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Html" element={<Entering />} />
        <Route path="/Ground" element={<CodePlayGround />} />
        <Route path="/Course1" element={<Course1 />} />
      </Routes>

      <Footer />
    </>
    </Router>
  );
}

export default App;
