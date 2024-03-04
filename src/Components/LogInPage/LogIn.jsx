import "../CSS/LogInCSS/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [surName, setSurName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook from React Router for navigation

  
  const handleSubmit = async (e) => {
    if (!userName || !surName || !password) {
      setError("გთხოვთ შეავსოთ ყველა ველი");
      return;
    }
    e.preventDefault(); // Prevent the default form submission behavior
  
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        userName,
        surName,
        password,
      });
      const token = response.data.token; // Extract the token from the response
      console.log(token); // Log the token
      // Store the token in local storage
      localStorage.setItem("token", token);
      // Redirect to Home page with username and surname as props upon successful login
      navigate(`/Home/${userName}/${surName}`);
    } catch (error) {
      console.error(error.response.data); // Log the error response from the backend
    }
  };
  

  return (
    <div className="login-container">
      <form>
        <p>შესვლა</p>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error message if there is any */}
        <label htmlFor="სახელი">სახელი:</label>
        <input
          required
          placeholder="სახელი"
          type="text"
          id="სახელი"
          name="სახელი"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
            setError("");
          }}
        />
        <label htmlFor="გვარი">გვარი:</label>
        <input
          required
          placeholder="გვარი"
          type="text"
          id="გვარი"
          name="გვარი"
          value={surName}
          onChange={(e) => {
            setSurName(e.target.value);
            setError("");
          }}
        />
        <label htmlFor="პაროლი">პაროლი:</label>
        <input
          required
          placeholder="პაროლი"
          type="password"
          id="პაროლი"
          name="პაროლი"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
        <button className="login-button" onClick={handleSubmit}>
          შესვლა
        </button>
        <div className="otherlinks">
          <p>პაროლი დამავიწყდა</p>

          <p>
            არ გაქვს ექაუნთი?{" "}
            <Link
              style={{ textDecoration: "none", color: "#6964f7" }}
              to="/Registration"
            >
              რეგისტრაცია
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
