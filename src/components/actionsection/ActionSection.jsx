import "./ActionSection.css";
import { Link } from "react-router-dom";

const ActionSection = () => {
  return (
    <div className="actionsection">
      <div className="notes">
        <p>
          Interested in joining our school? Click
          <span className="btn">
            <Link>Join Us</Link>
          </span>
          button
        </p>
      </div>
    </div>
  );
};

export default ActionSection;
