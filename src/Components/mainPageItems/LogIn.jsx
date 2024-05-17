import "../CSS/mainpagecss/form.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogIn = () => {
    if (!userName || !gmail || !password) {
      setErrorMessage("გთხოვთ შეავსოთ ყველა ველი");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
      return;
    }

    
    axios
    .post("http://localhost:5000/login", {
        userName,
        gmail,
        password,
      })
      .then((response) => {
        const { token } = response.data;
        sessionStorage.setItem("token", token);
        setErrorMessage('შესვლა წარმატებით დასრულდა')
        
        setTimeout(() => {
            navigate('/')
            window.location.reload()
        }, 1200)
      })
      .catch((error) => {
          console.error("Error:", error.response);
          setErrorMessage(error.response.data.message)
          setTimeout(() => {
            setErrorMessage(false)
          }, 1200)
      });
  };

  return (
    <div className="registration-container">
      <h1>შესვლა</h1>

      <Form
        userName={userName}
        gmail={gmail}
        password={password}
        setUserName={setUserName}
        setGmail={setGmail}
        setPassword={setPassword}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        handleSubmit={handleLogIn}
        buttonName={"შესვლა"}
        registerState={false}
      />
    </div>
  );
};

export default LogIn;
