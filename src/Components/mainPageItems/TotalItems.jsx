import '../CSS/mainpagecss/totalItems.css'
import peopleicon from '../../assets/peopleicon.png'
import hat from '../../assets/hat.png'
import circle from '../../assets/circle.png'
import React, { useState, useEffect } from 'react';

const TotalItems = () => {

    const [totalLearners, setTotalLearners] = useState(2969)
    const [totalGraduated, setTotalGraduated] = useState(1665)
    const [totalCourses, setTotalCourses] = useState(258)

    useEffect(() => {
        const animateCount = (targetValue, setStateFunction) => {
          const step = Math.ceil(targetValue / 350);
          let currentValue = 0;
    
          const interval = setInterval(() => {
            currentValue += step;
            setStateFunction(currentValue);
    
            if (currentValue >= targetValue) {
              setStateFunction(targetValue);
              clearInterval(interval);
            }
          }, 10);
        };
    
        const handleScroll = () => {
          const element = document.querySelector('.totalItems-container');
          if (element) {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            
            if (isVisible) {
              animateCount(2969, setTotalLearners);
              animateCount(1665, setTotalGraduated);
              animateCount(258, setTotalCourses);
              window.removeEventListener('scroll', handleScroll);
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup: Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return ( 
        <div className='totalItems-container'>
            <div className="total-items">
                <img src={peopleicon} alt="people icon" />
                <p>ჩვენი მოსწავლეები</p>
                <h1 style={{margin: '0 auto', fontWeight: '400'}}>{totalLearners}</h1>
            </div>
            <div className="total-items">
                <img src={hat} alt="hat icon" />
                <p>კურსდამთავრებულები</p>
                <h1 style={{margin: '0 auto', fontWeight: '400'}}>{totalGraduated}</h1>
            </div>
            <div className="total-items">
                <img src={circle} alt="courses image" />
                <p>კურსები</p>
                <h1 style={{margin: '0 auto', fontWeight: '400'}}>{totalCourses}</h1>
            </div>
        </div>
     );
}
 
export default TotalItems;