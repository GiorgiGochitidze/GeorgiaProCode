import React, { useEffect, useState } from "react";
import peopleicon from "../../assets/peopleicon.png";
import hat from "../../assets/hat.png";
import circle from "../../assets/circle.png";
import "../CSS/mainpagecss/totalItems.css";
import axios from "axios";
import items from '../CoursesPage/ItemsArray'

const TotalItems = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .post("https://georgiaprocode.onrender.com/loadUsersList")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log("Error when loading users", err);
      });
  }, []);

  return (
    <div className="totalItems-container">
      <div className="total-items">
        <img src={peopleicon} alt="people icon" />
        <p>ჩვენი მოსწავლეები</p>
        <h1 style={{ margin: "0 auto", fontWeight: "400" }}>{users.length}</h1>
      </div>
      <div className="total-items">
        <img src={hat} alt="hat icon" />
        <p>კურსდამთავრებულები</p>
        <h1 style={{ margin: "0 auto", fontWeight: "400" }}>0</h1>
      </div>
      <div className="total-items">
        <img src={circle} alt="courses image" />
        <p>კურსები</p>
        <h1 style={{ margin: "0 auto", fontWeight: "400" }}>{items.length}</h1>
      </div>
    </div>
  );
};

export default TotalItems;
