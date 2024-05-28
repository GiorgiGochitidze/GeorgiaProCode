import { Link } from "react-router-dom";
import divSpanAndEtc from "./videos/divSpanAndEtc.mp4";
import SourceCode from "./SourceCode";

const Course3 = () => {
  return (
    <div className="entering-container">
      <h1>div, span, a და img ტეგები</h1>

      <h3>რა არის div?</h3>

      <p>
        <span className="code">&lt;div&gt;</span> ტეგი არის block ელემენტი,
        რომელიც გამოიყენება HTML დოკუმენტში კონტეინერის შესაქმნელად. ის
        გვეხმარება ელემენტების ჯგუფების ლოგიკური და ვიზუალური ორგანიზაციისთვის.
        div ელემენტი ხშირად გამოიყენება სტილიზაციისა და ფორმატირების
        მიზნებისთვის, რადგან მისი გამოყენებით შესაძლებელია ერთ კონტეინერში
        მოქცეული ელემენტების სტილის და სტრუქტურის მართვა.
      </p>

      <video loop controls width="90%">
        <source src={divSpanAndEtc} type="video/mp4" />
      </video>

      <SourceCode
      CourseName={"HTML-Course/div, span, a და img ტეგები"}
        src={
          "https://github.com/GiorgiGochitidze/HTML-Course/blob/main/div,%20span,%20a%20%E1%83%93%E1%83%90%20img%20%E1%83%A2%E1%83%94%E1%83%92%E1%83%94%E1%83%91%E1%83%98.html"
        }
      />

      <h1>span ელემენტი</h1>

      <p>
        <span className="code">&lt;span&gt;</span> ტეგი არის inline ელემენტი,
        რომელიც გამოიყენება ტექსტის შიგნით მცირე ნაწილის სტილიზაციისთვის. span
        ტეგი არ ქმნის ახალი ხაზის განყოფილებას, მაგრამ საშუალებას აძლევს
        სტილების გამოყენებას მცირე ტექსტის ან ელემენტების ნაწილზე. span ტეგი
        ხშირად გამოიყენება ტექსტის ფერების, ფონტების ან სხვა სტილური
        მახასიათებლების შეცვლისთვის გარდა ამისა{" "}
        <span className="code">&lt;span&gt;</span> ტეგს აქვს ერთი თვისება span
        ტეგი გარს ერტყმის ელემენტს და იჭერს მხოლოდ იმ ადგილს რამხელაც მის შიგნით
        მდებარე ელემენტია, ეს იქნება ტექსტი, ფოტოსურათი, ღილაკი თუ სხვა.
      </p>

      <h1>a ტეგი</h1>

      <p>
        <span className="code">&lt;a&gt;</span> ტეგი შემოკლებული ვერსია
        &lt;anchor&gt;-ისა ის გამოიყენება ჰიპერლინკების შესაქმნელად თვითონ ეს
        ჰიპერლინკები გამოიყენება საიტზე ნავიგაციისა თუ სხვა საიტებზე
        გადასვლისათვის a ელემენტის შიგნით როგორც p-ში შეგვიძლია ჩავწეროთ
        ნებისმიერი სახის ტექსტი ან ჩავსვათ სურათი ღილაკიც და ა.შ აქვე უნდა
        გავეცნოთ ახალ მნიშვნელობას რომელსაც ატრიბუტებს უწოდებენ,{" "}
        <b>რა არის ატრიბუტები?</b> ატრიბუტები HTML-ში წარმოადგენს ამა თუ იმ
        ინფორმაციას ელემენტის შესახებ მის კლასს სტილიზაციას მაგალითად
        ატრიბუტებია: <span className="code">id</span>,{" "}
        <span className="code">class</span>, <span className="code">style</span>
        ,<span className="code">title</span>, <span className="code">lang</span>
        , <span className="code">src</span>,<span className="code">href</span>,{" "}
        <span className="code">disabled-ღილაკისთვის</span>,{" "}
        <span className="code">target</span> და ა.შ. <br />
        აქ ჩვენ შევისწავლით ჯერ <b>href</b>, <b>target</b> და შემდეგ <b>src</b>{" "}
        ატრიბუტებს მოდით დავიწყოთ href ატრიბუტით:
      </p>

      <h1>href + target ატრიბუტები</h1>

      <p>
        <span className="code">href</span> ატრიბუტი როგორც ვთქვით გამოიყენება
        ჰიპერლინკების შესაქმნელად ჰიპერლინკები შეიძლება იყოს სხვადასხვა სახის
        ისეთები როგორციაა: საიტის ლინკი თუ ფაილის მისამართი სწორედ ფაილის
        მისამართი გამოიყენება საიტზე რამოდენიმე გვერდის შესაქმნელად, ხოლო საიტის
        ლინკის მითითების შემთხვევაში ის გახსნის მითითებული საიტის ლინკს ქვემოთ
        შეგიძლიათ იხილოთ მაგალითი:
      </p>

      <p>
        <span className="code">traget</span> ატრიბუტი გამოიყენება ჰიპერლინკების
        ახალ გვერდზე გასახსნელად მაგალითად თუ თქვენ ჰიპერლინკში მიიუთითებთ
        ფეისბუქის ლინკს მაშინ ის ფეისბუქს იგივე ფანჯარაში გახსნის სწორედ
        იმისათვის რომ გავხსნათ ახალ ფანჯარაში და არ გაგვეთიშოს ჩვენი საიტის
        გვერდი ვიყენებთ ატრიბუტ target-ს რომლის მნიშვნელობა არის _blank: <br />
        <span className="code">
          &lt;a href="https://facebook.com/" target="_blank"&gt; ეს არის
          ფეისბუქის მისამართი &lt;/a&gt;
        </span>{" "}
        სწორედ target-ის მითითებით ვხსნით მას ახალ გვერდზე.
      </p>

      <h1>img ტეგი და src ატრიბუტი</h1>

      <p>
        როგორც იცით ნებისმიერ საიტს აქვს სხვადასხვა სახის სურათები საიტზე
        სურათების ჩამატება შეგვიძლია <span className="code">&lt;img&gt;</span>{" "}
        ელემენტით მაგრამ მხოლოდ img ელემენტი არაა საკმარისი სწორედ აქ გვჭირდება{" "}
        <span className="code">src</span> ატრიბუტი სწორედ მასში მიეთითება
        სურათის ლინკი როგორც ინტერნეტიდან ასევე სპეციფიკური ფაილიდანაც შეიძლება
        მაგალითად: <br />
        <span className="code">
          &lt;img src="./catImage.jpg" alt="An Image of the cat" /&gt;
        </span>{" "}
        როგორც ხედავთ img ელემენტს src ატრიბუტის გარდა აქვს alt ატრიბუტი რომელიც
        პასუხისმგებელია იმაზე რომ რა გამოაჩინოს როცა სურათი ვერ ჩაიტვირთება და
        მისი მითითება აუცილებელია აი მაგალითად ცუდი ინტერნეტის გამო ვერ მოხერხდა
        სურათის ჩატვირთვა ან რაღაც სხვა შეცდომის გამო ბრაუზერი სურათის მაგივრად
        იმას აჩვენებს რაც alt-ში იქნება ჩაწერილი ანუ alt ატრიბუტი არის იგივე
        სურათის აღწერა ქვემოთ შეგიძლიათ იხილოთ მაგალითები:
      </p>

      <Link to="/Html/Course4">
        <button>გაკვეთილი N4</button>
      </Link>
    </div>
  );
};

export default Course3;
