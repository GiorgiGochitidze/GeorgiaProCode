import "./css/entering.css";
import { Link } from "react-router-dom";

const Entering = () => {
  return (
    <div className="entering-container">
      <h1>შესავალი:</h1>

      <p>სანამ დავიწყებთ კურსის მსვლელობას და კოდის წერას <br /> ჯერ მინდა აგიხსნათ თუ რა არის HTML. <br />
      <b>HTML</b> - არის <b>HYPER TEXT MARKUP LANGUAGE</b> ასევე <br /> უნდა გაითვალისწინოთ რომ <b>HTML</b> და <b>CSS</b> <br />
      არ არის პროგრამირების ენები, მათ გამოიყენებენ <br /> ელემენტების გამოსახავად ხოლო თვითონ<br /> პროგრამირების ენებს მიეკუთვნება
      ისეთი ტექნოლოგიები <br /> როგორიცაა: <b>JAVASCRIPT</b>, <b>JAVA</b>, <b>PYTHON</b>, <b>C#</b>, <br />
      <b>C++</b> და ა.შ. <b></b>
      HTML - ის საშუალებით ხდება იმ ყველაფრის<br /> კეთება რასთანაც ხდება ინტერაქცია <br />
      მაგალითად: ღილაკები, ტექსტები, ნავიგაციის მენიუ,<br /> შესვლა და რეგისტრაციის ფორმები და ა.შ. <br />
      </p>

      <Link to="/Html/Course1" style={{ textDecoration: 'none', color: 'black' }}><button>გაკვეთილი N1</button></Link>
    </div>
  );
};

export default Entering;
