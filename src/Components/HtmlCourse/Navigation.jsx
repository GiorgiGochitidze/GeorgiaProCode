import "./css/navigation.css";
import { Link } from "react-router-dom";
import { CiCircleList } from "react-icons/ci";

const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <div className="icon-container">
          <Link to='/Html/CoursesList' style={{textDecoration: 'none', color: "white"}}>
          <div
            className="navigation-icon"
            >
            <CiCircleList size={25} color="white" />
          </div>
            </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
