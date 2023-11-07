import "../CSS/ContactUsCss/contact.css";

const Contact = () => {
  return (
    <div className="contact-form-container">
      <form className="form">
        <p className="form-title">კონტაქტი</p>
        <div className="input-container">
          <input type="email" placeholder="თქვენი ემაილი" />
          <span></span>
        </div>
        <div className="input-container">
          <input type="text" placeholder="დაწერეთ ტექსტი" />
        </div>
        <button type="submit" className="submit">
          გაგზავნა
        </button>
      </form>
    </div>
  );
};

export default Contact;
