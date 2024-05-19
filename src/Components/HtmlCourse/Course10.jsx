import { Link } from "react-router-dom";

const Course10 = () => {
  return (
    <div className="entering-container">
      <h1>HTML5 ახალი ელემენტები</h1>

      <h3>რა არის HTML5 ახალი ელემენტები?</h3>
      <p style={{ textAlign: "justify" }}>
        HTML5-მა დაამატა რამდენიმე ახალი სემანტიკური და ფუნქციონალური ტეგი, რომლებიც
        უმჯობესებს კოდის სტრუქტურას და გამოყენებას.
      </p>

      <h3>ძირითადი HTML5 ელემენტები</h3>
      <ul className="example-list" style={{ listStyleType: "disc", textAlign: "start" }}>
        <li><span className="code">&lt;figure&gt;</span> - გამოსახულების და აღწერის ბლოკი</li>
        <li><span className="code">&lt;figcaption&gt;</span> - გამოსახულების აღწერა</li>
        <li><span className="code">&lt;time&gt;</span> - თარიღი და დრო</li>
        <li><span className="code">&lt;mark&gt;</span> - ტექსტის მონიშვნა</li>
        <li><span className="code">&lt;progress&gt;</span> - პროგრესის ბარი</li>
        <li><span className="code">&lt;meter&gt;</span> - გაზომვის ბარი</li>
        <li><span className="code">&lt;details&gt;</span> - დამატებითი დეტალები</li>
        <li><span className="code">&lt;summary&gt;</span> - დეტალების შემაჯამებელი</li>
      </ul>

      <p>
        მაგალითად: <br />
        <span className="code">
          &lt;figure&gt;<br />
          &lt;img src="image.jpg" alt="Description"&gt;<br />
          &lt;figcaption&gt;This is an image description&lt;/figcaption&gt;<br />
          &lt;/figure&gt;<br />
        </span>
      </p>

      <Link to="/TechnicalWorks">
        <button>გაკვეთილი N10</button>
      </Link>
    </div>
  );
};

export default Course10;
