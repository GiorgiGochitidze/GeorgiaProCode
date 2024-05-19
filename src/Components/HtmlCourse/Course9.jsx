import { Link } from "react-router-dom";

const Course9 = () => {
  return (
    <div className="entering-container">
      <h1>მულტიმედია HTML-ში (აუდიო და ვიდეო)</h1>

      <h3>აუდიო ელემენტი</h3>
      <p style={{ textAlign: "justify" }}>
        <span className="code">&lt;audio&gt;</span> ტეგი გამოიყენება აუდიო ფაილების
        ჩასართავად ვებ-გვერდზე. მაგ:
        <span className="code">
          &lt;audio controls&gt;<br />
          &lt;source src="audio.mp3" type="audio/mpeg"&gt;<br />
          თქვენი ბრაუზერი მხარს არ უჭერს აუდიო ელემენტს.<br />
          &lt;/audio&gt;
        </span>
      </p>

      <h3>ვიდეო ელემენტი</h3>
      <p style={{ textAlign: "justify" }}>
        <span className="code">&lt;video&gt;</span> ტეგი გამოიყენება ვიდეო ფაილების
        ჩასართავად ვებ-გვერდზე. <br /> მაგ:{" "}
        <span className="code">
          &lt;video width="320" height="240" controls&gt;<br />
          &lt;source src="video.mp4" type="video/mp4"&gt;<br />
          თქვენი ბრაუზერი მხარს არ უჭერს ვიდეო ელემენტს.<br />
          &lt;/video&gt;
        </span>
      </p>

      <Link to="/Html/Course10">
        <button>გაკვეთილი N10</button>
      </Link>
    </div>
  );
};

export default Course9;
