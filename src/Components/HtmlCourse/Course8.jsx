import { Link } from "react-router-dom";

const Course8 = () => {
  return (
    <div className="entering-container">
      <h1>სემანტიკური HTML</h1>
      
      <h3>რა არის სემანტიკური HTML?</h3>
      <p style={{ textAlign: "justify" }}>
        სემანტიკური HTML გამოიყენება ვებ-გვერდის შინაარსის უფრო მნიშვნელოვნად და გასაგებად წარმოჩენისთვის.
        იგი აძლევს დეველოპერებსა და ბრაუზერებს საშუალებას უკეთ გაიგონ ვებ-გვერდის სტრუქტურა და შინაარსი.
      </p>

      <h3>ძირითადი სემანტიკური ელემენტები</h3>
      <ul className="example-list" style={{ textAlign: "start" }}>
        <li><span className="code">&lt;header&gt;</span> - გვერდის ან სექციის სათაური</li>
        <li><span className="code">&lt;nav&gt;</span> - ნავიგაციური მენიუ</li>
        <li><span className="code">&lt;main&gt;</span> - გვერდის მთავარი შინაარსი</li>
        <li><span className="code">&lt;section&gt;</span> - ძირითადი სექცია</li>
        <li><span className="code">&lt;article&gt;</span> - დამოუკიდებელი კონტენტი</li>
        <li><span className="code">&lt;aside&gt;</span> - გვერდითი შინაარსი</li>
        <li><span className="code">&lt;footer&gt;</span> - გვერდის ან სექციის ქვედა ნაწილი</li>
      </ul>

      <h3>სარგებელი სემანტიკური HTML-ის გამოყენებისას</h3>
      <p>
        სემანტიკური HTML უზრუნველყოფს:
        <ul>
          <li>უკეთეს SEO-ს (Search Engine Optimization), რადგან საძიებო სისტემები უკეთ იგებენ შინაარსს.</li>
          <li>საიტის ხელმისაწვდომობას, რადგან screen reader-ები უკეთ წაკითხავენ შინაარსს.</li>
          <li>კოდის სისუფთავეს და უფრო გაგებად კოდს დეველოპერებისთვის.</li>
        </ul>
      </p>

      <Link to='/Html/Course9'><button>გაკვეთილი N9</button></Link>
    </div>
  );
};

export default Course8;
