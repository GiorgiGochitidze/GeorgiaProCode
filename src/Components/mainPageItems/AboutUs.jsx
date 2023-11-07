import "../CSS/mainpagecss/aboutUsInMain.css";
import lasha from "../../assets/lasha.jpg";
import gioimage from "../../assets/gioimage.jpeg"
import mateimage from "../../assets/mateimage.jpg"

const AboutUs = () => {
  return (
    <>
      <h3 className="whoWeare">ვინ ვართ ჩვენ?</h3>
    <div className="membersContainer">
      <div className="groupMembers">
        <img src={gioimage} alt="profile image" />
        <p>გიორგი გოჩიტიძე</p>
      </div>

      <div className="groupMembers">
        <img src={lasha} alt="profile image" />
        <p>ლაშა ჯინჭარაძე</p>
      </div>

      <div className="groupMembers">
        <img src={mateimage} alt="profile image" />
        <p>მათე კოპლატაძე</p>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
