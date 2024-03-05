import { useNavigate } from 'react-router-dom';
import '../CSS/mainpagecss/courselinks.css'


const CourseLinks = () => {
  const navigate = useNavigate(); // Access the navigate function

  const items = [
    { title: 'HTML', path: '/Html' },
    { title: 'CSS', path: '/TechnicalWorks' },
    { title: 'JAVASCRIPT', path: '/Technicalworks' },
    { title: 'PYTHON', path: '/TechnicalWorks' },
    { title: 'RUST', path: '/TechnicalWorks' },
    { title: '.NET', path: '/TechnicalWorks' },
    { title: 'GO', path: '/TechnicalWorks' },
    { title: 'PHP', path: '/TechnicalWorks' },
  ];

  // Function to handle button click and navigate to the HTML course
  const handleButtonClick = (path) => {
    navigate(path); // Use navigate to navigate to the specified route
  };

  return (
    <div className="courseList-container">
      <h3>კურსები:</h3>
      <div className="courses-list">
        {items.map((item) => (
          <div key={item.title} className="course-cards">
            <p>{item.title}</p>
            {/* Use the onClick event to trigger the navigation */}
            <button
              className="course-startbtn"
              onClick={() => handleButtonClick(item.path)}
            >
              კურსის დაწყება
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseLinks;
