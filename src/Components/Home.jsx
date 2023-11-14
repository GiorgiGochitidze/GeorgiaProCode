import WhatWeDo from './mainPageItems/WhatWeDo';
import CourseLinks from './mainPageItems/CourseLinks'
import Footer from './mainPageItems/Footer';
import TotalItems from './mainPageItems/TotalItems';

const Home = () => {
    return ( 
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center'}}>

            {/* <WhatWeDo /> */}
            <TotalItems />

            <CourseLinks />

            <Footer />
        </div>
     );
}
 
export default Home;