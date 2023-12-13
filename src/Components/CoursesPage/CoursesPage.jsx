import CourseLinks from './CourseLinks'
import React, {useEffect } from 'react';


const CoursesPage = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

    return ( 
        <CourseLinks />
     );
}
 
export default CoursesPage;