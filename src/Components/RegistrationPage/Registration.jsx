import { Link } from "react-router-dom";
import "../CSS/RegisterCSS/Registration.css";
import React, { useEffect, useState } from "react";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="registration-container">
      <form action="">
        <p>რეგისტრაცია</p>

        <label htmlFor="სახელი">სახელი:</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="სახელი"
          type="text"
          id="სახელი"
          name="სახელი"
        />

        <label htmlFor="მეილი">მეილი:</label>
        <input
          required
          placeholder="მეილი"
          type="email"
          id="მეილი"
          name="მეილი"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="პაროლი">პაროლი:</label>
        <input
          required
          placeholder="პაროლი"
          type="password"
          id="პაროლი"
          name="პაროლი"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="registration-button" type="submit" >
          რეგისტრაცია
        </button>

        <div className="otherlinks">
          <p>
            უკვე გაქვთ ექაუნთი?{" "}
            <Link
              style={{ textDecoration: "none", color: "#6964f7" }}
              to="/LogIn"
            >
              შესვლა
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
