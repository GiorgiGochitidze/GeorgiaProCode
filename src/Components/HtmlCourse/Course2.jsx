import { Link } from "react-router-dom";
import "./css/entering.css";
import pAndH1 from "./videos/pAndH1.mp4";
import bAndStrong from "./videos/bAndStrong.mp4";
import botImage from "../../assets/botimage.png";
import { useReducer, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRegLightbulb } from "react-icons/fa";
import SourceCode from "./SourceCode";

const initialState = {
  inputValues: {
    input1: "",
    input2: "",
  },
  taskState: false,
  hint: false,
  brTask: "",
  brState: false,
  StrongTaskValues: {
    strong1: "",
    strong2: "",
  },
};

const HANDLE_INPUT_CHANGE = "HANDLE_INPUT_CHANGE";
const HANDLE_STRONG_CHANGE = "HANDLE_STRONG_CHANGE";
const SET_TASK_STATE = "SET_TASK_STATE";
const SET_HINT = "SET_HINT";
const SET_BR_TASK = "SET_BR_TASK";
const SET_BR_STATE = "SET_BR_STATE";

const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_INPUT_CHANGE:
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [action.payload.name]: action.payload.value,
        },
        taskState: false,
      };
    case SET_TASK_STATE:
      return {
        ...state,
        taskState: action.payload,
      };
    case SET_HINT:
      return {
        ...state,
        hint: action.payload,
      };
    case SET_BR_TASK:
      return {
        ...state,
        brTask: action.payload,
        taskState: action.payload === "br",
      };
    case SET_BR_STATE:
      return {
        ...state,
        brState: action.payload,
      };
    case HANDLE_STRONG_CHANGE:
      return {
        ...state,
        StrongTaskValues: {
          ...state.StrongTaskValues,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

const Course2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { inputValues, StrongTaskValues, brState, taskState, hint, brTask } =
    state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: HANDLE_INPUT_CHANGE, payload: { name, value } });
  };

  const handleStrongTaskChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: HANDLE_STRONG_CHANGE, payload: { name, value } });
  };

  const handleCheckTask = () => {
    const correctValues = Object.values(inputValues).every(
      (val) => val === "p"
    );
    dispatch({ type: SET_TASK_STATE, payload: correctValues });
  };

  useEffect(() => {
    const { input1, input2 } = inputValues;
    if (input1 && input2) {
      handleCheckTask();
    }
  }, [inputValues]);

  useEffect(() => {
    if (
      brTask === "br" &&
      StrongTaskValues.strong1 === "strong" &&
      StrongTaskValues.strong2 === "strong"
    ) {
      console.log("correct");
      dispatch({ type: SET_BR_STATE, payload: true });
    } else {
      console.log("incorrect");
      dispatch({ type: SET_BR_STATE, payload: false });
    }
  }, [brTask, StrongTaskValues]);

  return (
    <div className="entering-container">
      <h1>პარაგრაფები და სათაურები</h1>

      <p>
        დავიწყოთ ყველაზე მარტივი ნაწილით: <b>პარაგრაფები</b> -{" "}
        <span className="code">&lt;p&gt;</span> ტეგი გამოიყენება პარაგრაფების
        შესაქმნელად HTML დოკუმენტში. ეს ტეგი განსაზღვრავს ტექსტის ბლოკს, რომელიც
        ორგანიზებულია და წარმოდგენილია როგორც დამოუკიდებელი აზრის ან შინაარსის
        ნაწილი. პარაგრაფები უზრუნველყოფენ ტექსტის ვიზუალურ და ლოგიკურ
        განყოფილებას, რაც აადვილებს შინაარსის წაკითხვას და გაგებას. ბრაუზერები
        ავტომატურად უმატებენ ცარიელ სივრცეს პარაგრაფების გარშემო, რათა მათ შორის
        იყოს ვიზუალური განცალკევება. <br />
        <br /> <br />
        ასევე გვაქვს <b>სათაურები</b> - მაგ:{" "}
        <span className="code">&lt;h1&gt;</span> ტეგი HTML-ში გამოიყენება
        ყველაზე მნიშვნელოვანი სათაურის განსაზღვრისთვის. ეს არის სათაურების
        იერარქიის ყველაზე მაღალი დონე და, შესაბამისად, მას აქვს ყველაზე დიდი
        ტექსტის ზომა და განსაკუთრებული წონა საძიებო სისტემების და ეკრანის
        მკითხველებისათვის. <span className="code">&lt;h1&gt;</span> ტეგი
        აჩვენებს ვებგვერდის ან დოკუმენტის მთავარ სათაურს და გამოყენებულია
        ინფორმაციის სტრუქტურირებისთვის, რათა მომხმარებლებმა და საძიებო
        სისტემებმა უკეთ გაიგონ ვებგვერდის შინაარსი და ძირითადი თემები,
        <span className="code">&lt;h1&gt;</span>,{" "}
        <span className="code">&lt;h2&gt;</span>,{" "}
        <span className="code">&lt;h3&gt;</span>,{" "}
        <span className="code">&lt;h4&gt;</span>,
        <span className="code">&lt;h5&gt;</span>,{" "}
        <span className="code">&lt;h6&gt;</span>, მისი რიცხვის ზრდასთან ერთად
        იკლებს ტეექსტის ზომა და მისი მნიშვნელოვნობა გვერდზე.
      </p>

      <video loop controls width="90%">
        <source src={pAndH1} type="video/mp4" />
      </video>

      <p>
        იხილეთ კოდი აქ:{" "}
        <SourceCode
          CourseName={"Html-Course/პარაგრაფები და სათაურები"}
          src={
            "https://github.com/GiorgiGochitidze/HTML-Course/blob/main/%E1%83%9E%E1%83%90%E1%83%A0%E1%83%90%E1%83%92%E1%83%A0%E1%83%90%E1%83%A4%E1%83%94%E1%83%91%E1%83%98%20%E1%83%93%E1%83%90%20%E1%83%A1%E1%83%90%E1%83%97%E1%83%90%E1%83%A3%E1%83%A0%E1%83%94%E1%83%91%E1%83%98.html"
          }
        />
      </p>

      <p>
        როგორც ხედავთ აქ ვიყენებ{" "}
        <span className="code">h$*6&#123;Heading&#125;</span> ეს გამოვიყენე
        იმისთვის რომ ყოველ ჯერზე ახალ ხაზზე არმეწერა თავიდან კოდი, როგორ მუშაობს
        ის? <span className="code">h</span> არის ტეგის დასაწყისი $ უთითებს იმას
        რომ სადამდე უნდა გაზარდოს რიცხვი ჩვენს შემთხვევაში ის დაიწყებს h1 დან და
        ავა h6-მდე ხოლო <span className="code">*6</span> მიუთითებს იმას თუ
        რამდენჯერ უნდა დაწეროს.
      </p>

      <p style={{ fontFamily: "georgian-font" }}>
        მოდით შევასრულოთ პატარა დავალება:
      </p>
      <p>დაეხმარეთ რობოტს თქვას სიტყვა Hello!</p>

      <div className="bot-container">
        <img className="bot-image" src={botImage} alt="bot image" />
        {taskState && (
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bot-hello-txt"
            style={{ fontFamily: "georgian-font" }}
          >
            Hello!
          </motion.p>
        )}
      </div>
      <span className="challange">
        {" "}
        &lt;
        <input
          name="input1"
          style={{ width: "20px", height: "23px" }}
          onChange={handleInputChange}
          className="code-inputs"
          type="text"
          maxLength={1}
        />
        &gt;Hello!&lt; /
        <input
          name="input2"
          onChange={handleInputChange}
          style={{ width: "20px", height: "23px" }}
          className="code-inputs"
          type="text"
          maxLength={1}
        />
        &gt;{" "}
        <FaRegLightbulb
          onClick={() => dispatch({ type: SET_HINT, payload: !hint })}
          className="hint-icon"
          style={{ marginLeft: "20px" }}
          size={25}
          color="white"
        />
        {taskState && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            ყოჩაღ დავალება სწორად შეასრულე
          </motion.p>
        )}
        {!taskState && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            რაღაც შეცდომაა შეასწორე კოდი 😀
          </motion.p>
        )}
        {hint && (
          <p>რა უნდა გამოვიყენოთ იმისათვის რომ დავწეროთ ტექსტი ან პარაგრაფი?</p>
        )}
      </span>

      <h2>&lt;b&gt; და &lt;br&gt; ელემენტები/ტეგები</h2>
      <p>
        გარდა p და h1 ტეგებისა ასევე გვაქვს დამხმარე ტეგები{" "}
        <span className="code">b</span> და <span className="code">br</span>{" "}
        მაგალითად: <b>ეს არის მუქი ტექსტი</b> კოდში დაიწერება როგორც:{" "}
        <span className="code">&lt;b&gt; ეს არის მუქი ტექსტი&lt;/b&gt;</span>
        <br />
        <span className="code">&lt;b&gt;</span> ტეგი გამოიყენება ტექსტის
        გასამუქებლად HTML დოკუმენტში. ეს ტეგი ნიშნავს, რომ ტეგის შიგნით
        მოთავსებული ტექსტი გამოჩნდება უფრო მუქი სტილით, რაც ვიზუალურად
        გამოარჩევს მას სხვა ტექსტისგან. <span className="code">&lt;b&gt;</span>{" "}
        ტეგი ჩვეულებრივ გამოიყენება ტექსტის განსაკუთრებული მნიშვნელობის გარეშე
        გასამუქებლად, უბრალოდ ვიზუალური ყურადღების მისაპყრობად. <br /> <br />
        <span className="code">&lt;strong&gt;</span> ტეგი ასევე გამოიყენება
        ტექსტის გასამუქებლად, მაგრამ ამ ტეგის გამოყენებთ ჩვენ ვანიშნებთ, რომ
        ტექსტს განსაკუთრებული მნიშვნელობა აქვს. საძიებო სისტემები და ეკრანის
        მკითხველები <span className="code">&lt;strong&gt;</span> ტეგს ანიჭებენ
        მეტ წონას და ყურადღებას, რაც ტექსტის მნიშვნელობის ხაზგასასმელად
        გამოიყენება. ეს ტეგი უფრო სემანტიკურია, ვიდრე{" "}
        <span className="code">&lt;b&gt;</span> ტეგი. <br /> <br />
        <span className="code">&lt;br /&gt;</span> ტეგი გამოიყენება HTML
        დოკუმენტში ხაზის გაწყვეტისთვის. ეს ტეგი მიუთითებს ტექსტის ახალ ხაზზე
        გადატანას, რაც ჩვეულებრივ გამოიყენება ტექსტის ვიზუალური ფორმატირების
        გასაუმჯობესებლად. <span className="code">&lt;br&gt;</span> ტეგი არ
        შეიცავს დახურვის ტეგს და მისი გამოყენება შესაძლებელია ნებისმიერ ადგილას,
        სადაც საჭიროა ტექსტის ახალი ხაზიდან დასაწყებად. <br />
        მაგალითები შეგიძლიათ იხილოთ ქვემოთ:
      </p>

      <video loop controls width="90%">
        <source src={bAndStrong} type="video/mp4" />
      </video>

      <p>
        იხილეთ კოდი აქ:{" "}
        <SourceCode
          CourseName={"HTML-Course/b, br და strong ტეგები"}
          src={
            "https://github.com/GiorgiGochitidze/HTML-Course/blob/main/b%2C%20br%20%E1%83%93%E1%83%90%20strong%20%E1%83%A2%E1%83%94%E1%83%92%E1%83%94%E1%83%91%E1%83%98.html"
          }
        />
      </p>

      <span className="challange">
        გვჭირდება შენი დახმარება მინდა რომ წერტილის შემდეგ ტექსტი დაიწყოს ახალი
        ხაზიდან და მისი პირველი სიტყვა იყოს მნიშვნელოვანი და მუქი.
        {brState && <br />}
        {!brState && (
          <>
            &lt;
            <input
              name="input1"
              value={brTask}
              style={{ width: "30px", height: "23px" }}
              onChange={(e) =>
                dispatch({ type: SET_BR_TASK, payload: e.target.value })
              }
              className="code-inputs"
              type="text"
              maxLength={2}
            />
            &gt;
          </>
        )}
        {brState && <strong style={{ color: "yellow" }}>Lorem</strong>}{" "}
        {!brState && (
          <span>
            &lt;{" "}
            <input
              name="strong1"
              value={StrongTaskValues.strong1}
              style={{ width: "70px", height: "23px" }}
              onChange={handleStrongTaskChange}
              className="code-inputs"
              type="text"
              maxLength={6}
            />
            &gt;Lorem&lt;/
            <input
              name="strong2"
              value={StrongTaskValues.strong2}
              style={{ width: "70px", height: "23px" }}
              onChange={handleStrongTaskChange}
              className="code-inputs"
              type="text"
              maxLength={6}
            />
            &gt;
          </span>
        )}{" "}
        ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <br />
        {brState && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            ყოჩაღ დავალება სწორად შეასრულე 😀🎉
          </motion.p>
        )}
        {!brState && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            რაღაც შეცდომაა შეასწორე კოდი 😀
          </motion.p>
        )}
      </span>

      <Link to="/Html/Course3">
        <button>გაკვეთილი N3</button>
      </Link>
    </div>
  );
};

export default Course2;
