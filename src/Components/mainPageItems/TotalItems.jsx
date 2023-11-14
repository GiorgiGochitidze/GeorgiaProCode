import '../CSS/mainpagecss/totalItems.css'
import peopleicon from '../../assets/peopleicon.png'
import hat from '../../assets/hat.png'
import circle from '../../assets/circle.png'
import React, { useState } from 'react';

const TotalItems = () => {

    const [totalLearners, setTotalLearners] = useState(0)
    const [totalGraduated, setTotalGraduated] = useState(0)
    const [totalCourses, setTotalCourses] = useState(0)

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