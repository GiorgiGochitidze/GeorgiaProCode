import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import '../CSS/mainpagecss/courselinks.css'


const CourseLinks = () => {
  const navigate = useNavigate(); // Access the navigate function

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const items = [
    { title: 'HTML', path: '/Html' },
    { title: 'CSS', path: '/css' },
    { title: 'JAVASCRIPT', path: '/javascript' },
    { title: 'PYTHON', path: '/python' },
    { title: 'RUST', path: '/rust' },
    { title: '.NET', path: '/dotnet' },
    { title: 'GO', path: '/go' },
    { title: 'PHP', path: '/php' },
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
