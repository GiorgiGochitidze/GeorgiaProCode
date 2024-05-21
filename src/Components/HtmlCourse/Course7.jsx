import { Link } from "react-router-dom";

const Course7 = () => {
  return (
    <div className="entering-container">
      <h1>ფორმები HTML-ში</h1>

      <h3>რა არის ფორმები?</h3>
      <p style={{ textAlign: "justify" }}>
        ფორმები HTML-ის მნიშვნელოვანი ნაწილია. ისინი გამოიყენება მომხმარებლის
        მიერ ინფორმაციის შეყვანისათვის. ფორმა იწყება{" "}
        <span className="code">&lt;form&gt;</span> ტეგით და მთავრდება{" "}
        <span className="code">&lt;/form&gt;</span> ტეგით. აქ არის ფორმის
        ძირითადი ელემენტები:
      </p>

      <h3>რა არის input ელემენტი?</h3>
      <p style={{ textAlign: "justify" }}>
        <span className="code">&lt;input&gt;</span> ელემენტი გამოიყენება
        მონაცემების შესაყვანად ფორმაში. მას შეუძლია ჰქონდეს სხვადასხვა ტიპი,
        მაგალითად:
      </p>
      <ul className="example-list" style={{ textAlign: "center" }}>
        <li>
          <span className="code">type="text"</span> - ტექსტური ველი{" "}
          <input type="text" placeholder="შეიყვანეთ ტექსტი" />
        </li>
        <li>
          <span className="code">type="password"</span> - პაროლის ველი {""}
          <input type="password" placeholder="შეიყვანეთ ტექსტი" />
        </li>
        <li>
          <span className="code">type="email"</span> - ელ. ფოსტის ველი{" "}
          <input type="email" placeholder="example@gmail.com" />
        </li>
        <li>
          <span className="code">type="number"</span> - რიცხვების ველი{" "}
          <input type="number" placeholder="შეიყვანეთ რიცხვი" />
        </li>
        <li>
          <span className="code">type="date"</span> - თარიღის ველი{" "}
          <input type="date" />
        </li>
        <li>
          <span className="code">type="checkbox"</span> - ჩექბოქსი{" "}
          <input style={{ height: "20px" }} type="checkbox" />
        </li>
        <li>
          <span className="code">type="radio"</span> - რადიო ღილაკი
          <input style={{ height: "20px" }} type="radio" />
        </li>
      </ul>

      <ul className="example-list" style={{ textAlign: "center" }}>
        <li>
          <span className="code">
            &lt;input type="text" name="username" /&gt;
          </span>{" "}
          - ტექსტური ველი
        </li>
        <li>
          <span className="code">
            &lt;input type="password" name="password" /&gt;
          </span>{" "}
          - პაროლის ველი
        </li>
        <li>
          <span className="code">
            &lt;input type="email" name="email" /&gt;
          </span>{" "}
          - ელ. ფოსტის ველი
        </li>
        <li>
          <span className="code">
            &lt;textarea name="message"&gt;&lt;/textarea&gt;
          </span>{" "}
          - ტექსტის ფართო ველი
        </li>
        <li>
          <span className="code">
            &lt;button type="submit"&gt;Submit&lt;/button&gt;
          </span>{" "}
          - ღილაკი
        </li>
        <li style={{ textAlign: "start" }}>
          ჩამოსაშლელი მენიუ <br />
          <span className="code">
            &lt;select name="options"&gt; <br />
            &lt;option value="1"&gt;Option 1&lt;/option&gt;
            <br />
            &lt;option value="2"&gt;Option 2&lt;/option&gt; <br />
            &lt;/select&gt;
          </span>
        </li>
      </ul>

      <p>
        <b>ატრიბუტები:</b> <br />
        <span className="code">action</span> - განსაზღვრავს URL-ს, სადაც ფორმის
        მონაცემები გაგზავნილია. <br />
        <span className="code">method</span> - აჩვენებს მონაცემების გაგზავნის
        მეთოდს (GET ან POST). <br />
        <span className="code">name</span> - თითოეული ფორმის ველის დასახელება.{" "}
        <br />
        <span className="code">autocomplete</span> - აძლევს ბრაუზერს უფლებას
        ავტომატურად შეავსოს ველები. <br />
        <span className="code">novalidate</span> - ფორმის ვალიდაციის გამორთვა.{" "}
        <br />
        <span className="code">&lt;label&gt;</span> - გამოიყენება ველების
        დასახელებისათვის.
      </p>

      <Link to="/Html/Course8">
        <button>გაკვეთილი N8</button>
      </Link>
    </div>
  );
};

export default Course7;
