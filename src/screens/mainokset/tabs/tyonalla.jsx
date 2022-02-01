import "./tyonalla.css";
import { Link } from "react-router-dom";
const Tyonalla = () => {
  return (
    <div className="tyonalla-container">
      <div className="tyonalla-empty-container">
        <h5>Sinlla ei ole mainoksia työnalla!</h5>
        <Link to="/uusimainos" className="tyonalla-empty-uusimainos-btn">
          <p>Aloita suunnittelu</p>
        </Link>
      </div>
    </div>
  );
};
export default Tyonalla;
