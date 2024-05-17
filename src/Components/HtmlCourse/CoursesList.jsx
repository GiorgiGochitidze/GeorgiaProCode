import { Link } from "react-router-dom";
import "./css/courseslist.css";

const CoursesList = () => {

    const linkStyles = {
        textDecoration: 'none',
        color: 'black'
    }

  return (
    <div className="courseslist-container">
      <h1>კურსების ჩამონათვალი</h1>
      <div className="courses-list">
        <Link style={linkStyles} to="/Html/Course1"><p>HTML სტრუქტურა</p></Link>
        <Link style={linkStyles} to="/Html/Course2"><p>პარაგრაფები და სათაურები</p></Link>
        <Link style={linkStyles} to="/Html/Course3"><p>div, span, a და img ტეგები</p></Link>
        <Link style={linkStyles} to="/Html/Course4"><p>ცხრილები HTML-ში ordered და unordered lists</p></Link>
        <Link style={linkStyles} to="/Html/Course5"><p>Tables HTML-ში</p></Link>
      </div>
    </div>
  );
};

export default CoursesList;
