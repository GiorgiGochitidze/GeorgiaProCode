import Navbar from './Navbar';
import AboutUs from './mainPageItems/AboutUs';
import WhatWeDo from './mainPageItems/WhatWeDo';

const Home = () => {
    return ( 
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center'}}>
            <Navbar />

            <AboutUs />

            <WhatWeDo />
        </div>
     );
}
 
export default Home;