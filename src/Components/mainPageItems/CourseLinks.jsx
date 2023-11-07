import "../CSS/mainpagecss/courselinks.css";

const CourseLinks = () => {
  return (
    <div className="courseList-container">
      <h3>ჩვენი კურსები:</h3>

      <div className="courses-list">
        <div className="course-cards">
          HTML
          <button className="course-startbtn"> კურსის დაწყება</button>
        </div>
        <div className="course-cards">
          CSS
          <button className="course-startbtn"> კურსის დაწყება</button>
        </div>
      </div>
    </div>
  );
};

export default CourseLinks;
