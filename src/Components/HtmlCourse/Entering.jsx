import { Link } from "react-router-dom";
import "./css/entering.css";

const Entering = () => {
  return (
    <div className="entering-container">
      <h1>აირჩიეთ ასაკი</h1>
      <Link to='Ground'><button>10</button></Link>
      <button>10-15</button>
      <button>15-20</button>
      <button>20+</button>
    </div>
  );
};

export default Entering;
