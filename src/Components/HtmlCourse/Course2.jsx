import { Link } from "react-router-dom";
import "./css/entering.css";
import pAndH1 from "./videos/pAndH1.mp4";
import bAndStrong from "./videos/bAndStrong.mp4";
import botImage from "../../assets/botimage.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Course2 = () => {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: ""
  });

  const [taskState, setTaskState] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
    setTaskState(false)
  };

  const handleCheckTask = () => {
    const correctValues = Object.values(inputValues).every((val) => val === "p");
    if (correctValues) {
      console.log("It's correct!");
      setTaskState(true)
    } else {
      setTaskState(false)
      console.log("It's wrong!");
    }
  };

  useEffect(() => {
    const { input1, input2 } = inputValues;
    if (input1 && input2) {
      handleCheckTask();
    }
  }, [inputValues]);

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
        {taskState && <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} className="bot-hello-txt" style={{ fontFamily: "georgian-font" }}>
          Hello!
        </motion.p>}
      </div>
      <span className="challange">
        {" "}
        &lt;
        <input
          name="input1"
          onChange={handleInputChange}
          className="code-inputs"
          type="text"
          maxLength={1}
        />
        &gt;Hello!&lt;
        /
        <input
          name="input2"
          onChange={handleInputChange}
          className="code-inputs"
          type="text"
          maxLength={1}
        />
        &gt;{" "}

        {taskState && <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}}>ყოჩაღ დავალება სწორად შეასრულე</motion.p>}
        {taskState == false && <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}}>რაღაც შეცდომაა შეასწორე კოდი 😀</motion.p>}
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

      <Link to="/Html/Course3">
        <button>გაკვეთილი N3</button>
      </Link>
    </div>
  );
};

export default Course2;
