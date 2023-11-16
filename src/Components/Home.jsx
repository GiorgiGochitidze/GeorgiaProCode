// import WhatWeDo from './mainPageItems/WhatWeDo';
import CourseLinks from './mainPageItems/CourseLinks'
import Footer from './mainPageItems/Footer';
import TotalItems from './mainPageItems/TotalItems';
import StartPage from './mainPageItems/startPage';
import './CSS/mainpagecss/Navbar.css'

const Home = () => {
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