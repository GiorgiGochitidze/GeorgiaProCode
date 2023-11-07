import AboutUs from './mainPageItems/AboutUs';
import WhatWeDo from './mainPageItems/WhatWeDo';
import CourseLinks from './mainPageItems/CourseLinks'
import Footer from './mainPageItems/Footer';

const Home = () => {
    return ( 
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center'}}>

            <AboutUs />

            <WhatWeDo />

            <CourseLinks />

            <Footer />
        </div>
     );
}
 
export default Home;