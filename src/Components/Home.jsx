import StartPage from "./mainPageItems/StartPage";
import CourseLinks from "./CoursesPage/CourseLinks";
import WhatWeDo from "./mainPageItems/WhatWeDo";
import TotalItems from "./mainPageItems/TotalItems";
import "./CSS/mainpagecss/Navbar.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StartPage />

      <WhatWeDo />

      <TotalItems />

      <CourseLinks />
    </div>
  );
};

export default Home;
