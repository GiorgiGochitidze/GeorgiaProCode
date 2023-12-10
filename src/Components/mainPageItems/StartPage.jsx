import '../CSS/mainpagecss/Navbar.css'
import main from '../../assets/main.png'

const StartPage = ({handleIsShown, apply}) => {

    return ( 
        <div className="searchAndImage-container">
        <div className="content-container">
          <h1>საუკეთესო კურსები შენთვის და შენი მეგობრებისთვის ქართულად</h1>
          <p>სახალისო და მარტივი კურსების ნახვა შეგიძლია აქ</p>
          <div className="searchbar-container">
            <input onChange={apply} onClick={handleIsShown} className="searchBar-input" placeholder="კურსების ძიება..." type="text" />
            <button className="searchBtn">ძიება</button>
          </div>
        </div>
        <img className="girl-image" src={main} alt="girl image" />
      </div>
     );
    }
export default StartPage;