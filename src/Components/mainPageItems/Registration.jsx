import "../CSS/mainpagecss/form.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const Registration = () => {
  const [userName, setUserName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!userName || !gmail || !password) {
      setErrorMessage("გთხოვთ შეავსოთ ყველა ველი");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
      return;
    }

    axios
      .post("https://georgiaprocode.onrender.com/register", {
        userName,
        gmail,
        password,
      })
      .then((response) => {
        setErrorMessage('რეგისტრაცია წარმატებულად დასრულდა')
        setTimeout(() => navigate("/LogIn"), 1500);
      })
      .catch((error) => {
        console.error("Error:", error.response);
        if (error.response) {
          setErrorMessage("ასეთი მომხმარებელი უკვე არსებობს");
        } else {
          setErrorMessage("რეგისტრაციის დროს მოხდა რაღაც შეცდომა");
        }
      });
  };

  return (
    <div className="registration-container">
      <h1>რეგისტრაცია</h1>

      <Form
        userName={userName}
        gmail={gmail}
        password={password}
        setUserName={setUserName}
        setGmail={setGmail}
        setPassword={setPassword}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        handleSubmit={handleRegister}
        buttonName={"რეგისტრაცია"}
        registerState={true}
      />
    </div>
  );
};

export default Registration;
