import CodePlayGround from "../CodePlayGround";
import { Link } from "react-router-dom";

const Course5 = () => {
  return (
    <div className="entering-container">
      <h1>Tables HTML-ში</h1>

      <p>
        ალბათ ყველას გაქვთ გავლილი მათემატიკაში დიაგრამები და ცხრილები სწორედ
        ერთერთ მსგავს გავივლით ჩვენ ასეთი ცხრილები გამოიყენება მონაცემების უფრო
        დეტალურად განაწილებისათვის აქ გვემატება შემდეგი ელემენტები table, tr, td
        და th, მოდიშ შევქმნათ ჩვეულებრივი ცხრილი.
      </p>

      <CodePlayGround src="https://codesandbox.io/embed/3gxvxh?view=Editor+%2B+Preview&module=%2Findex.html" />

      <h1>Table რიგები და უჯრედები</h1>

      <p>
        Table-ში tr განსაზღვრავს ცხრილის რიგებს სიგანეში ხოლო td განსაზღვრავს
        ცხრილის უჯრედებს სიგრძეში.
      </p>

      <CodePlayGround src="https://codesandbox.io/embed/xmszxg?view=Editor+%2B+Preview&module=%2Findex.html" />

      <h1>Table Header-ები, border და align ატრიბუტი</h1>

      <p>
        იგივე ცხრილის სათაურები მსგავსია h1 ტეგისა, ხოლო border ატრიბუტი
        გამოიყენება ცხრილის border-ის სისქეს ხოლო ატრიბუტი align გამოიყენება
        ცხრილის გასაცენტრად, მარჯვნივ ან მარცხნივ გადატანისთვის
      </p>

      <CodePlayGround src="https://codesandbox.io/embed/wmhkds?view=Editor+%2B+Preview&module=%2Findex.html" />

      <h1>cellspacing და cellpadding</h1>

      <p>
        ასევე table element-ს აქვს ატრიბუტები cellspacing და cellpadding,
        cellspacing გამოიყენება უჯრედებს შორის დაშორებისათვის როგორც
        ჰორიზონტალურად ისევე ვერტიკალურადაც ხოლო cellpadding გამოიყენება
        დაშორების გასაკეთებლად უჯრედების კონტენტისა და მათ border-ებს შორის
      </p>

      <CodePlayGround src="https://codesandbox.io/embed/sjqrgx?view=Editor+%2B+Preview&module=%2Findex.html" />

      <Link to='/TechnicalWorks'><button>გაკვეთილი N6</button></Link>
    </div>
  );
};

export default Course5;
