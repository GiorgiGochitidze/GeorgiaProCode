import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import "./css/navigation.css";

const HtmlCourseLayout = () => {
  return (
    <div className="layout-container">
        <Navigation />
      <div className="course-content">
        <Outlet />
      </div>
    </div>
  );
};

export default HtmlCourseLayout;
