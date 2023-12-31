import "../CSS/mainpagecss/courselinks.css";

const CourseLinks = () => {

  const items = [
    {title: 'HTML'},
    {title: 'CSS'},
    {title: 'JAVASCRIPT'}, 
    {title: 'PYTHON'},
    {title: 'RUST'},
    {title: '.NET'},
    {title: 'GO'},
    {title: 'PHP'},
  ]

  return (
    <div className="courseList-container">
      <h3>კურსები:</h3>
      <div className="courses-list">
        {items.map((item) => (
          <div key={item.title} className="course-cards">
            <p>{item.title}</p>
            <button className="course-startbtn">კურსის დაწყება</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseLinks;
