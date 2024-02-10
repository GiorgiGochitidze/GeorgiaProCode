import { Link } from "react-router-dom";
import "../CSS/RegisterCSS/Registration.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Registration = () => {
  const [username, setUsername] = useState("");
  const [surName, setSurName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const navigate = useNavigate(); // Use useNavigate hook

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const sendData = () => {
    if (!username || !surName || !password) {
      setErrorMessage("გთხოვთ შეავსოთ ყველა ველი");
      return;
    }

    axios.post('http://localhost:5000/api/register', { username, surName, password })
      .then(response => {
        console.log(response.data); // Log response from the server
        // Clear input fields
        setUsername("");
        setSurName("");
        setPassword("");
        // Display success message
        setSuccessMessage("რეგისტრაცია წარმატებულად დასრულდა");
        // Move to login page after 1 second
        setTimeout(() => navigate("/LogIn"), 1500);
      })
      .catch(error => {
        console.error('Error:', error.response);
        if (error.response) {
          setErrorMessage("ასეთი მომხმარებელი უკვე არსებობს");
        } else {
          setErrorMessage("რეგისტრაციის დროს მოხვდა რაღაც შეცდომა");
        }
      });
  }

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

        <label htmlFor="გვარი">გვარი:</label>
        <input
          required
          placeholder="გვარი"
          type="text"
          id="გვარი"
          name="გვარი"
          value={surName}
          onChange={(e) => setSurName(e.target.value)}
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

        <button onClick={sendData} className="registration-button" type="button" >
          რეგისტრაცია
        </button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}

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
