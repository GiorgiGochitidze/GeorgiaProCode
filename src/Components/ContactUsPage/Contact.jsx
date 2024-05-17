import { jwtDecode } from "jwt-decode";
import "../CSS/ContactUsCss/contact.css";

const token = sessionStorage.getItem('token')
const decoded = token ? jwtDecode(token) : 'token doesnt exists'

const Contact = () => {
  return (
    <div className="contact-form-container">
      <form
        action="https://formsubmit.co/georgiaprocode@gmail.com"
        method="POST"
        className="form"
      >
        <p className="form-title">კონტაქტი</p>
        <input type="hidden" name="name" value={decoded.userName} />
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="თქვენი ემაილი"
            required
          />
          <span></span>
        </div>
        <div className="input-container">
          <textarea
            className="textarea"
            type="text"
            name="text"
            placeholder="დაწერეთ ტექსტი"
            required
          />
        </div>
        <button type="submit" className="submit">
          გაგზავნა
        </button>
      </form>
    </div>
  );
};

export default Contact;
