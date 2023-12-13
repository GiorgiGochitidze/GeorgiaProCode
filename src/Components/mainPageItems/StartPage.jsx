import '../CSS/mainpagecss/Navbar.css'
import main from '../../assets/main.png'

const StartPage = () => {

    return ( 
        <div className="searchAndImage-container">
        <div className="content-container">
          <h1>საუკეთესო კურსები შენთვის და შენი მეგობრებისთვის ქართულად</h1>
          <p>სახალისო და მარტივი კურსების ნახვა შეგიძლია აქ</p>
        </div>
        <img className="girl-image" src={main} alt="girl image" />
      </div>
     );
    }
export default StartPage;