import '../CSS/LogInCSS/login.css'

const LogIn = () => {
    return ( 
        <div className='login-container'>
            <form action="">
                <p>შესვლა</p>

                <label htmlFor="სახელი">სახელი:</label>
                <input placeholder='სახელი' type="text" id='სახელი' name='სახელი' />

                <label htmlFor="მეილი">მეილი:</label>
                <input placeholder='მეილი' type="email" id='მეილი' name='მეილი' />

                <label htmlFor="პაროლი">პაროლი:</label>
                <input placeholder='პაროლი' type="password" id='პაროლი' name='პაროლი' />

                <button className='login-button' type='submit'>შესვლა</button>

                <div className="otherlinks">
                    <p>პაროლი დამავიწყდა</p>

                    <p>არ გაქვს ექაუნთი? რეგისტრაცია</p>
                </div>
            </form>
        </div>
     );
}
 
export default LogIn;