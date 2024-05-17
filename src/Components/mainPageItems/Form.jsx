import "../CSS/mainpagecss/form.css";
import { Link } from "react-router-dom";

const Form = ({
  registerState,
  userName,
  buttonName,
  setUserName,
  gmail,
  setGmail,
  password,
  setPassword,
  errorMessage,
  handleSubmit,
}) => {
  return (
    <div className="auth-form">
      <label htmlFor="სახელი">
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          placeholder="სახელი"
          type="text"
          id="სახელი"
          name="სახელი"
        />
      </label>

      <label htmlFor="gmail">
        <input
          required
          placeholder="example.gmail.com"
          type="text"
          id="gmail"
          name="gmail"
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
        />
      </label>

      <label htmlFor="პაროლი">
        <input
          required
          placeholder="პაროლი"
          type="password"
          id="პაროლი"
          name="პაროლი"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button onClick={handleSubmit} className="submit-btn" type="button">
        {buttonName}
      </button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="otherlinks">
        {registerState ? (
          <p>
            უკვე გაქვთ ექაუნთი?{" "}
            <Link
              style={{ textDecoration: "none", color: "#6964f7" }}
              to="/LogIn"
            >
              შესვლა
            </Link>
          </p>
        ) : (
          <p>
            არ გაქვთ ექაუნთი?{" "}
            <Link
              style={{ textDecoration: "none", color: "#6964f7" }}
              to="/Register"
            >
              რეგისტრაცია
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Form;
