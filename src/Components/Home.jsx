// import WhatWeDo from './mainPageItems/WhatWeDo';
import CourseLinks from './mainPageItems/CourseLinks'
import TotalItems from './mainPageItems/TotalItems';
import StartPage from './mainPageItems/StartPage';
import './CSS/mainpagecss/Navbar.css'
import React, {useEffect } from 'react';


const Home = () => {

        useEffect(() => {
          // Scroll to the top when the component mounts
          window.scrollTo(0, 0);
        }, []);

    return ( 
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center'}}>

            <StartPage />

            {/* <WhatWeDo /> */}

            <TotalItems />

            <CourseLinks />

        </div>
     );
}
 
export default Home;