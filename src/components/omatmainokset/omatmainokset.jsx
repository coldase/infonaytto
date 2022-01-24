import "./omatmainokset.css";
import { Link } from "react-router-dom";

const OmatMainokset = () => {
  return (
    <div className="omatmainokset-container">
      <h1 className="omatmainokset-header">OMAT MAINOKSET</h1>
      <div className="omatmainokset-card-container">
        <div className="omatmainokset-card">
          <h1>MENNEET</h1>
        </div>
        <div className="omatmainokset-card2">
          <h1>AKTIIVISET</h1>
        </div>
        <div className="omatmainokset-card3">
          <h1>TULEVAT</h1>
        </div>
      </div>

      <Link to="/uusimainos" className="omatmainokset-uusimainos-btn">
        <p>Uusi mainos</p>
      </Link>
    </div>
  );
};

export default OmatMainokset;
