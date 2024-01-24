import React from 'react';
import peopleicon from '../../assets/peopleicon.png';
import hat from '../../assets/hat.png';
import circle from '../../assets/circle.png';
import '../CSS/mainpagecss/totalItems.css';

const TotalItems = () => {
  return (
    <div className='totalItems-container'>
      <div className="total-items">
        <img src={peopleicon} alt="people icon" />
        <p>ჩვენი მოსწავლეები</p>
        <h1 style={{ margin: '0 auto', fontWeight: '400' }}>2969</h1>
      </div>
      <div className="total-items">
        <img src={hat} alt="hat icon" />
        <p>კურსდამთავრებულები</p>
        <h1 style={{ margin: '0 auto', fontWeight: '400' }}>1665</h1>
      </div>
      <div className="total-items">
        <img src={circle} alt="courses image" />
        <p>კურსები</p>
        <h1 style={{ margin: '0 auto', fontWeight: '400' }}>258</h1>
      </div>
    </div>
  );
};

export default TotalItems;
