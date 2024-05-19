import { Link } from "react-router-dom";

const Course5 = () => {
  return (
    <div className="entering-container">
      <h1>ცხრილები HTML-ში ordered და unordered lists</h1>

      <p>
        <strong>Unordered Lists - <span className="code">&lt;ul&gt;</span></strong> - არის ცხრილის ისეთი ვერსია, რომელსაც არააქვს რაიმე განსაზღვრული
        განლაგება თუ თანმიმდევრობა, ასევე <span className="code">&lt;ul&gt;</span> ტეგი იღებს მეორე ელემენტს <span className="code">&lt;li&gt;</span>-ს ანუ იგივე <b>list items</b> {" "}
        რომელიც განსაზღვრავს ცალკეული ელემენტების გამოსახვას თანმიმდევრულ ან არა თანმიმდევრულ ცხრილში <span className="code">&lt;ul&gt;</span>/<span className="code">&lt;ol&gt;</span><br />
        <b>რა არის <span className="code">&lt;ol&gt;</span>?</b> <span className="code">&lt;ol&gt;</span> არის Ordered List, რომელიც არის დალაგებული ან ნუმირებული. 
        <span className="code">&lt;ol&gt;</span> ცხრილებში გვაქვს ატრიბუტები <b>type</b> და <b>start</b>: <b>type</b> ატრიბუტი განსაზღვრავს იმას, თუ როგორ იქნება ნუმირებული 
        ცხრილი, ეს იქნება რიცხვები, თუ ასობგერები, დიდი რომაული რიცხვები თუ პატარა და ა.შ. <br />
        <strong>start ატრიბუტი - </strong> გამოიყენება ცხრილში პირველი ელემენტისთვის რიგითობის მისანიჭებლად, მაგალითად: 
        თუ გვინდა, რომ ელემენტების თვლა დაიწყოს 5-იდან და ისე გაიზარდოს, ჩავწერთ <span className="code">start="5"</span> და ათვლა დაიწყება 5-იდან.
        ასევე გვაქვს ატრიბუტი <span className="code">value</span>, <span className="code">&lt;li&gt;</span> ელემენტისათვის, რომელიც ანიჭებს 
        მნიშვნელობას რიგითობაში. მაგალითად, გვინდა რომ ესა თუ ის <span className="code">&lt;li&gt;</span> ელემენტი იყოს 100-ე, <span className="code">&lt;li value="100"&gt;</span> 
        this is li <span className="code">&lt;/li&gt;</span> მივიღებთ ამას: 100. this is li <br />
        ქვემოთ შეგიძლიათ იხილოთ მაგალითი ინფორმაციიდან გამომდინარე:
      </p>

      <Link to='/Html/Course6'><button>გაკვეთილი N6</button></Link>
    </div>
  );
};

export default Course5;
