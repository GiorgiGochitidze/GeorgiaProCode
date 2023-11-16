import "../CSS/ContactUsCss/contact.css";
import React, {useEffect } from 'react';


const Contact = () => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-form-container">
      <form action="https://formsubmit.co/georgiaprocode@gmail.com" method="POST" className="form">
        <p className="form-title">კონტაქტი</p>
        <div className="input-container">
          <input type="email" name="email" placeholder="თქვენი ემაილი" required />
          <span></span>
        </div>
        <div className="input-container">
          <textarea className="textarea" type="text" name="text" placeholder="დაწერეთ ტექსტი" required />
        </div>
        <button type="submit" className="submit">
          გაგზავნა
        </button>
      </form>
    </div>
  );
};

export default Contact;
