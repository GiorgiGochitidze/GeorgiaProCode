import "../CSS/mainpagecss/aboutUsInMain.css";
import lasha from "../../assets/lasha.jpg";

const AboutUs = () => {
  return (
    <>
      <h3 className="whoWeare">ვინ ვართ ჩვენ?</h3>
    <div className="membersContainer">
      <div className="groupMembers">
        <img src={lasha} alt="profile image" />
        <p>ლაშაი ვინცხაი</p>
      </div>

      <div className="groupMembers">
        <img src={lasha} alt="profile image" />
        <p>ლაშაი ვინცხაი</p>
      </div>

      <div className="groupMembers">
        <img src={lasha} alt="profile image" />
        <p>ლაშაი ვინცხაი</p>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
