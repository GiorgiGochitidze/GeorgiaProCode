import CourseLinks from '../mainPageItems/CourseLinks'
import React, {useEffect } from 'react';


const CoursesPage = ({items}) => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

    return ( 
        <CourseLinks items={items} />
     );
}
 
export default CoursesPage;