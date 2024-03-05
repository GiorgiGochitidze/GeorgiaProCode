import CodePlayGround from "../CodePlayGround.jsx";
import { Link } from "react-router-dom";

const Course3 = () => {
  return (
    <div className="entering-container">
      <h1>div, span, a და img ტეგები</h1>

      <h3>რა არის div?</h3>

      <p>
        ხშირად ისე ხვდება რომ სხვადასხვა ტექსტი, სურათი, ვიდეო თუ სათაური გვინდა
        მოვათავსოთ ერთ კონტეინერში ისე რომ ყველა ერთად იყოს სწორედ აქ გვეხმარება
        div, <b>&lt;div&gt;</b> ელემენტი მის შიგნით მყოფ ელემენტებს აქცევს ერთ
        კონტეინერში, შედარებისთვის div არის იგივე ყუთი რომელშიც შეგიძლიათ ჩადოთ
        სათამაშო თუ ბურთი ნებისმიერი სახის ნივთი, ასევე div-ზე გამოყენებული
        სტილები/სტილიზაცია მიენიჭება მის შიგნით მყოფ ელემენტებსაც მათი
        განსაზღვრა შეგვიძლია CSS-ში გარდა ამისა div არის block ელემენტი block და
        inline ელემენტებს გავივლით შემდეგ გაკვეთილზე:
      </p>

      <CodePlayGround src="https://codesandbox.io/embed/7tdgvt?view=Editor+%2B+Preview&module=%2Findex.html" />

      <h1>span ელემენტი</h1>

      <p>
        <b>span</b> ელემენტი არის HTML ელემენტი რომელიც გამოიყენება ტექსტის
        რედაქტირებისთვის მასზე სტილების მისაცემად ის არის inline ელემენტი
        რომელიც იჭერს მხოლოდ იმდენ ადგილს რამდენსაც იჭერს ტექსტი ან სხვა
        ელემენტები
      </p>
      <CodePlayGround src="https://codesandbox.io/embed/pwrwyz?view=Editor+%2B+Preview&module=%2Findex.html" />

      <h1>a ტეგი</h1>

      <p>
        <strong>a</strong> ტეგი შემოკლებული ვერსია &lt;&lt;anchor&gt;&gt;-ისა ის
        გამოიყენება ჰიპერლინკების შესაქმნელად თვითონ ეს ჰიპერლინკები გამოიყენება
        საიტზე ნავიგაციისა თუ სხვა საიტებზე გადასვლისათვის a ელემენტის შიგნით
        როგორც p-ში შეგვიძლია ჩავწეროთ ნებისმიერი სახის ტექსტი ან ჩავსვათ სურათი
        ღილაკიც და ა.შ აქვე უნდა გავეცნოთ ახალ მნიშვნელობას რომელსაც ატრიბუტებს
        უწოდებენ, <b>რა არის არტიკლები?</b> არტიკლები HTML-ში წარმოადგენს ამა თუ
        იმ ინფორმაციას ელემენტის შესახებ მის კლასს სტილიზაციას მაგალითად
        ატრიბუტებია:{" "}
        <b>
          id, class, style, title, lang, src, href, disabled-ღილაკისთვის, target
        </b>{" "}
        და ა.შ. <br />
        აქ ჩვენ შევისწავლით ჯერ <b>href</b>, <b>target</b> და შემდეგ <b>src</b>{" "}
        ატრიბუტებს მოდით დავიწყოთ href ატრიბუტით:
      </p>

      <h1>href + target ატრიბუტები</h1>

      <p>
        <strong>href</strong> ატრიბუტი როგორც ვთქვით გამოიყენება ჰიპერლინკების
        შესაქმნელად ჰიპერლინკები შეიძლება იყოს სხვადასხვა სახის ისეთები
        როგორციაა: საიტის ლინკი თუ ფაილის მისამართი სწორედ ფაილის მისამართი
        გამოიყენება საიტზე რამოდენიმე გვერდის შესაქმნელად, ხოლო საიტის ლინკის
        მითითების შემთხვევაში ის გახსნის მითითებული საიტის ლინკს ქვემოთ
        შეგიძლიათ იხილოთ მაგალითი:
      </p>

      <CodePlayGround src="https://codesandbox.io/embed/2yhtvl?view=Editor+%2B+Preview&module=%2Findex.html" />

      <p>
        <strong>target</strong> ატრიბუტი გამოიყენება ჰიპერლინკების ახალ გვერდზე
        გასახსნელად მაგალითად თუ თქვენ ჰიპერლინკში მიიუთითებთ ფეისბუქის ლინკს
        მაშინ ის ფეისბუქს იგივე ფანჯარაში გახსნის სწორედ იმისათვის რომ გავხსნათ
        ახალ ფანჯარაში და არ გაგვეთიშოს ჩვენი საიტის გვერდი ვიყენებთ ატრიბუტ
        target-ს რომლის მნიშვნელობა არის _blank: &lt;a
        href="https://facebook.com/" target="_blank"&gt;ეს არის ფეისბუქის
        მისამართი &lt;/a&gt; სწორედ target-ის მითითებით ვხსნით მას ახალ გვერდზე.
      </p>

      <h1>img ტეგი და src ატრიბუტი</h1>

      <p>
        როგორც იცით ნებისმიერ საიტს აქვს სხვადასხვა სახის სურათები საიტზე
        სურათების ჩამატება შეგვიძლია img ელემენტით მაგრამ მხოლოდ img ელემენტი არაა საკმარისი
        სწორედ აქ გვჭირდება src ატრიბუტი სწორედ მასში მიეთითება სურათის ლინკი როგორც ინტერნეტიდან ასევე სპეციფიკური 
        ფაილიდანაც შეიძლება მაგალითად &lt;img src="./catImage.jpg" alt="An Image of the cat" /&gt; როგორც ხედავთ
        img ელემენტს src ატრიბუტის გარდა აქვს alt ატრიბუტი რომელიც პასუხისმგებელია იმაზე რომ რა გამოაჩინოს როცა სურათი
        ვერ ჩაიტვირთება და მისი მითითება აუცილებელია აი მაგალითად ცუდი ინტერნეტის გამო ვერ მოხერხდა სურათის ჩატვირთვა
        ან რაღაც სხვა შეცდომის გამო ბრაუზერი სურათის მაგივრად იმას აჩვენებს რაც alt-ში იქნება ჩაწერილი ანუ alt ატრიბუტი
        არის იგივე სურათის აღწერა ქვემოთ შეგიძლიათ იხილოთ მაგალითები:
      </p>

      <CodePlayGround src="https://codesandbox.io/embed/84ddyh?view=Editor+%2B+Preview&module=%2Findex.html" />

      <Link to='/TechnicalWorks'><button>გაკვეთილი N4</button></Link>
    </div>
  );
};

export default Course3;
