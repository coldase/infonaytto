import "./profileomatmainokset.css";
import { Link } from "react-router-dom";

const ProfileOmatMainokset = () => {
  return (
    <div className="profileomatmainokset-container">
      <h1 className="profileomatmainokset-header">OMAT MAINOKSET</h1>
      <div className="profileomatmainokset-card-container">
        <div className="profileomatmainokset-card">
          <h1>MENOSSA</h1>
        </div>
        <div className="profileomatmainokset-card2">
          <h1>TULEVAT</h1>
        </div>
        <div className="profileomatmainokset-card3">
          <h1>UUSI MAINOS</h1>
        </div>
      </div>

      <Link to="/arkisto" className="profileomatmainokset-arkisto-btn">
        <p>Arkisto</p>
      </Link>
    </div>
  );
};

export default ProfileOmatMainokset;
