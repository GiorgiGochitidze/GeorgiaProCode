import { Link } from "react-router-dom";
import "./css/entering.css";

const Course4 = () => {
  return (
    <div className="entering-container">
      <h1>ატრიბუტები/Attributes</h1>

      <h3>რა არის ატრიბუტები?</h3>
      <p style={{ textAlign: "justify" }}>
        ყოველ HTML ელემენტს აქვს ატრიბუტები. ატრიბუტები წარმოადგენენ სხვადასხვა სახის
        ინფორმაციას ელემენტის შესახებ. ატრიბუტები ყოველთვის იწყება ელემენტის დასაწყისიდან.
        მაგ: <br />
        <span className="code">&lt;div style="color:red;"&gt;&lt;/div&gt;</span>, 
        ატრიბუტები name/key სახით გვხდება, მაგ: name="key":
        <span className="code"> style="color:red;"</span>
      </p>

      <h1>ძირითადი ატრიბუტები</h1>
      <ul className="example-list" style={{ listStyleType: "disc", textAlign: "start" }}>
        <li><span className="code">&lt;div id="header"&gt;&lt;/div&gt;</span></li>
        <li><span className="code">&lt;p class="intro"&gt;Welcome to the course!&lt;/p&gt;</span></li>
        <li><span className="code">&lt;p style="color:blue;"&gt;This is a blue text.&lt;/p&gt;</span></li>
        <li><span className="code">&lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt;</span></li>
        <li><span className="code">&lt;html lang="en"&gt;</span></li>
      </ul>

      <p>
        <span className="code">id="header"</span> და <span className="code">class="header"</span> 
        გამოიყენება სტილებეის მისანიჭებლად ელემენტისთვის, ხოლო 
        <span className="code">id</span> როგორც სტილიზაციის ასევე ელემენტისთვის 
        უნიკალური ინდენტიფიცირების მნიშვნელობის მისანიჭებლად გამოიყენება. <br /><br />
        <span className="code">style</span> ატრიბუტი გამოიყენება Inline Styling-ისთვის. 
        style ატრიბუტის საშუალებით შეგიძლიათ მიანიჭოთ ნებისმიერ ელემენტს იგივე css სტილები, 
        მაგრამ უკეთესია რომ გამოიყენოთ CSS-ი. <span className="code">title</span> ატრიბუტი 
        გამოიყენება ელემენტისთვის იმ სახელის მინიჭებისთვის, რომელიც გამოჩნდება მაუსის 
        მიტანის და გაჩერებიდან 2 წამში. მაგალითი იხილეთ ქვემოთ.
      </p>

      <h1>Form Attributes</h1>
      <p style={{ textAlign: "justify" }}>
        ფორმები HTML-ის მნიშვნელოვანი ნაწილია. ისინი გამოიყენება მომხმარებლის მიერ 
        ინფორმაციის შეყვანისათვის. აი, რამდენიმე ძირითადი ატრიბუტი, რომლებიც გამოიყენება ფორმებში:
      </p>
      <ul className="example-list" style={{ listStyleType: "disc", textAlign: "start" }}>
        <li><span className="code">&lt;form action="/submit-form" method="post"&gt;&lt;/form&gt;</span></li>
        <li><span className="code">&lt;input type="text" name="username" required /&gt;</span></li>
        <li><span className="code">&lt;input type="email" name="email" placeholder="Enter your email" /&gt;</span></li>
        <li><span className="code">&lt;input type="submit" value="Submit" /&gt;</span></li>
      </ul>
      <p>
        <span className="code">action</span> ატრიბუტი განსაზღვრავს URL-ს, სადაც ფორმის 
        მონაცემები გაგზავნილია. <span className="code">method</span> აჩვენებს მონაცემების 
        გაგზავნის მეთოდს (GET ან POST). <span className="code">required</span> ატრიბუტი 
        ველში აუცილებლად შევსებულად აქცევს, ხოლო <span className="code">placeholder</span> 
        აწერს მითითებულ ტექსტს შეყვანის ველში.
      </p>

      <h1>Global Attributes</h1>
      <p style={{ textAlign: "justify" }}>
        გლობალური ატრიბუტები შეიძლება გამოყენებულ იქნას ნებისმიერი HTML ელემენტისათვის. 
        აი, ზოგიერთი მათგანი:
      </p>
      <ul className="example-list" style={{ listStyleType: "disc", textAlign: "start" }}>
        <li><span className="code">class</span> - გამოიყენება ელემენტების კლასების დასამატებლად.</li>
        <li><span className="code">id</span> - ელემენტის უნიკალური იდენტიფიკატორი.</li>
        <li><span className="code">style</span> - Inline სტილები ელემენტისთვის.</li>
        <li><span className="code">title</span> - ტექსტი, რომელიც გამოჩნდება, როცა მომხმარებელი მაუსს მიიტანს ელემენტზე.</li>
        <li><span className="code">lang</span> - განსაზღვრავს ელემენტის ენობრივ კოდს.</li>
      </ul>

      <Link to='/Html/Course5'>
        <button>გაკვეთილი N5</button>
      </Link>
    </div>
  );
};

export default Course4;
