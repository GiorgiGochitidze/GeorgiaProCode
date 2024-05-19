import { Link } from "react-router-dom";

const Course6 = () => {
  return (
    <div className="entering-container">
      <h1>Tables HTML-ში</h1>

      <p>
        ალბათ ყველას გაქვთ გავლილი მათემატიკაში დიაგრამები და ცხრილები სწორედ
        ერთერთ მსგავს გავივლით ჩვენ ასეთი ცხრილები გამოიყენება მონაცემების უფრო
        დეტალურად განაწილებისათვის აქ გვემატება შემდეგი ელემენტები{" "}
        <span className="code">table</span>, <span className="code">tr</span>,
        <span className="code">td</span> და <span className="code">th</span>,
        მოდით შევქმნათ ჩვეულებრივი ცხრილი.
      </p>

      <h1>Table რიგები და უჯრედები</h1>

      <p>
        Table-ში <span className="code">tr</span> განსაზღვრავს ცხრილის რიგებს
        სიგანეში ხოლო <span className="code">td</span> განსაზღვრავს ცხრილის
        უჯრედებს სიგრძეში.
      </p>

      <h1>Table Header-ები, border და align ატრიბუტი</h1>

      <p>
        იგივე ცხრილის სათაურები მსგავსია <span className="code">h1</span>{" "}
        ტეგისა, ხოლო <span className="code">border</span> ატრიბუტი გამოიყენება
        ცხრილის border-ის სისქეს ხოლო ატრიბუტი{" "}
        <span className="code">align</span> გამოიყენება ცხრილის გასაცენტრად,
        მარჯვნივ ან მარცხნივ გადატანისთვის
      </p>

      <h1>cellspacing და cellpadding</h1>

      <p>
        ასევე table element-ს აქვს ატრიბუტები{" "}
        <span className="code">cellspacing</span> და{" "}
        <span className="code">cellpadding</span>,
        <span className="code">cellspacing</span> გამოიყენება უჯრედებს შორის
        დაშორებისათვის როგორც ჰორიზონტალურად ისევე ვერტიკალურადაც ხოლო{" "}
        <span className="code">cellpadding</span> გამოიყენება დაშორების
        გასაკეთებლად უჯრედების კონტენტისა და მათ border-ებს შორის
      </p>

      <Link to="/Html/Course7">
        <button>გაკვეთილი N7</button>
      </Link>
    </div>
  );
};

export default Course6;
