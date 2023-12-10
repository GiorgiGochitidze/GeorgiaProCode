import React, { useState, useEffect } from "react";
import StartPage from "./mainPageItems/StartPage";
import CourseLinks from "./mainPageItems/CourseLinks";
import WhatWeDo from "./mainPageItems/WhatWeDo";
import TotalItems from "./mainPageItems/TotalItems";
import "./CSS/mainpagecss/Navbar.css";
import CoursesPage from "./CoursesPage/CoursesPage";

const Home = () => {
  const [shown, setShown] = useState(true);
  const [filtering, setFiltering] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    { title: "HTML" },
    { title: "CSS" },
    { title: "JAVASCRIPT" },
  ];

  const handleIsShown = () => {
    setShown(false);
    setFiltering(true);
  };

  const apply = (e) => {
    setSearchTerm(e.target.value);
    setFiltering(true);
  };

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <StartPage items={items} apply={apply} handleIsShown={handleIsShown} />

      {filtering ? (
        <>
          {filteredItems.length > 0 ? (
            <CourseLinks items={filteredItems} />
          ) : (
            <h3 style={{ marginBlock: "20px" }}>
              კურსები ვერ მოიძებნა...
            </h3>
          )}
        </>
      ) : (
        <>
          {shown && <WhatWeDo />}
          {shown && <TotalItems />}
          {shown && <CoursesPage items={items} />}
        </>
      )}
    </div>
  );
};

export default Home;
