import { Link } from "react-router-dom";
import "./css/entering.css";
import pAndH1 from "./videos/pAndH1.mp4";
import bAndStrong from "./videos/bAndStrong.mp4";

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
        <span className="code">&lt;h2&gt;</span>,{" "}
        <span className="code">&lt;h3&gt;</span>,{" "}
        <span className="code">&lt;h4&gt;</span>,
        <span className="code">&lt;h5&gt;</span>,{" "}
        <span className="code">&lt;h6&gt;</span>, h1 არის ყველაზე დიდი და <br />
        რიცხვის მატებასთან ერთად იკლებს ზომა მაგალითი შეგიძლიათ იხილოთ ქვემოთ:
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

      <h2>&lt;b&gt; და &lt;br&gt; ელემენტები/ტეგები</h2>
      <p>
        გარდა p და h1 ტეგებისა ასევე გვაქვს დამხმარე ტეგები <span className="code">b</span> და <span className="code">br</span>, b
        გამოიყენება ტექსტის გასამუქებლად მაგალითად ასე:{" "}
        <b>ეს არის მუქი ტექსტი</b> კოდში დაიწერება როგორც:{" "}
        <span className="code">&lt;b&gt; ეს არის მუქი ტექსტი&lt;/b&gt;</span>
        <br />
        იგივენაირია <span className="code">&lt;strong&gt;&lt;/strong&gt;</span> ტეგიც მაგრამ strong-სა და b
        ტეგებს შორის განსხვავება ისაა რომ <br />
        strong-ი აღნიშნავს ისეთ ტექსტს რომელიც სხვისგან არის გამორჩეული და უფრო
        მეტი მნიშვნელობა აქვს ვიდრე სხვა ტექსტს{" "}
        <span className="code">&lt;br /&gt;</span> ტეგი გამოიყენება ტექსტის
        ახალი ხაზიდან დასაწერად მაგალითები შეგიძლიათ იხილოთ ქვემოთ:
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
