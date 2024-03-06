import CodePlayGround from "../CodePlayGround";
import { Link } from "react-router-dom";

const Course4 = () => {
  return (
    <div className="entering-container">
      <h1>ცხრილები HTML-ში ordered და unordered lists</h1>

      <p><strong>Unordered Lists - &lt;ul&gt;</strong> - არის ცხრილის ისეთი ვერსია რომელსაც არააქვს რაიმე განსაზღვრული
      განლაგება თუ თანმიმდევრობა, ასევე ul ტეგი იღებს მეორე ელემენტს li-ს ანუ იგივე <b>list items</b> რომელიც განსაზღვრავს
      ცალკეული ელემენტების გამოსახვას თანმიმდევრულ ან არა თანმიმდევრულ ცხრილში "ul/ol"<br />
      <b>რა არის ol?</b> ol არის Ordered List რომელიც არის დალაგებული ან ნუმირებული, ol ცხრილებში გვაქვს ატრიბუტები
      type და start: <b>type</b> ატრიბუტი განსაზღვრავს იმას თუ როგორ იქნება ნუმირებული ცხრილი, ეს იქნება რიცხვები, თუ 
      ასობგერები, დიდი რომაული რიცხვები თუ პატარა და ა.შ. <br />
      <strong>start ატრიბუტი - </strong> გამოიყენება ცხრილში პირველი ელემენტისთვის რიგითობის მისანიჭებლად მაგალითად:
      თუ გვინდა რომ ელემენტების თვლა დაიწყოს 5-იდან და ისე გაიზარდოს ჩავწერთ start="5" და ათვლა დაიწყება 5-იდან
      ასევე გვაქვს ატრიბუტი value, li ელემენტისათვის რომელიც ანიჭებს მნიშვნელობას რიგითობაში მაგალითად გვინდა რომ ესა თუ ის 
      li ელემენტი იყოს 100-ე li-ს ვუწერთ ასე &lt;li value="100"&gt;this is li&lt;/li&gt; მივიღებთ ამას: 100. this is li <br />
      ქვემოთ შეგიძლიათ იხილოთ მაგალითი ინფორმაციიდან გამომდინარე:
      </p>

      <CodePlayGround src="https://codesandbox.io/embed/s69tmm?view=Editor+%2B+Preview&module=%2Findex.html" />

      <Link to='/Html/Course5'><button>გაკვეთილი N5</button></Link>
    </div>
  );
};
2
export default Course4;
