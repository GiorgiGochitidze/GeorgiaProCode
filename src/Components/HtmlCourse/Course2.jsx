import { Link } from "react-router-dom";
import "./css/entering.css";

const Course2 = () => {
  return (
    <div className="entering-container">
      <h1>პარაგრაფები და სათაურები</h1>

      <p>
        დავიწყოთ ყველაზე მარტივი ნაწილით: <b>პარაგრაფები</b> - პარაგრაფები
        წარმოისახება როგორც: <br />
        <span className="code">&lt;p&gt;&lt;/p&gt;</span> მასში იწერება
        ნებისმიერი სახის ტექსტი მაგალითად{" "}
        <span className="code">&lt;p&gt;Hello World&lt;/p&gt;</span> <br />
        ის არის ჩვეულებრივი სახის ტექსტი და მასში წერა შეუზღუდავია, ასევე გვაქვს{" "}
        <b>სათაურები</b> - <br />
        <span className="code">&lt;h1&gt;</span>,{" "}
        <span className="code">&lt;h2&gt;</span>, <span className="code">&lt;h3&gt;</span>, <span className="code">&lt;h4&gt;</span>,
        <span className="code">&lt;h5&gt;</span>, <span className="code">&lt;h6&gt;</span>, h1 არის ყველაზე დიდი და <br />
        რიცხვის მატებასთან ერთად იკლებს ზომა მაგალითი შეგიძლიათ იხილოთ ქვემოთ:
      </p>

      <h2>&lt;b&gt; და &lt;br&gt; ელემენტები/ტეგები</h2>
      <p>
        გარდა p და h1 ტეგებისა ასევე გვაქვს დამხმარე ტეგები b და br, b
        გამოიყენება ტექსტის გასამუქებლად მაგალითად ასე:{" "}
        <b>ეს არის მუქი ტექსტი</b> კოდში დაიწერება როგორც: <span className="code">&lt;b&gt; ეს არის
        მუქი ტექსტი&lt;/b&gt;</span>
        <br />
        იგივენაირია &lt;strong&gt;&lt;/strong&gt; ტეგიც მაგრამ strong-სა და b
        ტეგებს შორის განსხვავება ისაა რომ <br />
        strong-ი აღნიშნავს ისეთ ტექსტს რომელიც სხვისგან არის გამორჩეული და უფრო
        მეტი მნიშვნელობა აქვს ვიდრე სხვა ტექსტს <span className="code">&lt;br /&gt;</span> ტეგი გამოიყენება
        ტექსტის ახალი ხაზიდან დასაწერად მაგალითები შეგიძლიათ იხილოთ ქვემოთ:
      </p>

      <Link to="/Html/Course3">
        <button>გაკვეთილი N3</button>
      </Link>
    </div>
  );
};

export default Course2;
