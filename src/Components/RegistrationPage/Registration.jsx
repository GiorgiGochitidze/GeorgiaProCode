import { Link } from "react-router-dom";
import "../CSS/RegisterCSS/Registration.css";
import React, { useEffect, useState } from "react";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

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

        <button className="registration-button" type="submit" onClick={handleRegister}>
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
