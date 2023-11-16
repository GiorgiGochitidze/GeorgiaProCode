import '../CSS/LogInCSS/login.css'
import { Link } from 'react-router-dom';
import React, {useEffect } from 'react';


const LogIn = () => {

        useEffect(() => {
          // Scroll to the top when the component mounts
          window.scrollTo(0, 0);
        }, []);

    return ( 
        <div className='login-container'>
            <form action="">
                <p>შესვლა</p>

                <label htmlFor="სახელი">სახელი:</label>
                <input required placeholder='სახელი' type="text" id='სახელი' name='სახელი' />

                <label htmlFor="მეილი">მეილი:</label>
                <input required placeholder='მეილი' type="email" id='მეილი' name='მეილი' />

                <label htmlFor="პაროლი">პაროლი:</label>
                <input required placeholder='პაროლი' type="password" id='პაროლი' name='პაროლი' />

                <button className='login-button' type='submit'>შესვლა</button>

                <div className="otherlinks">
                    <p>პაროლი დამავიწყდა</p>

                    <p>არ გაქვს ექაუნთი? <Link style={{ textDecoration: 'none', color: '#6964f7' }} to='/Registration'>რეგისტრაცია</Link></p>
                </div>
            </form>
        </div>
     );
}
 
export default LogIn;