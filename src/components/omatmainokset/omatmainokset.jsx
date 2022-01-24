import "./omatmainokset.css";

const OmatMainokset = () => {
  return (
    <div className="omatmainokset-container">
      <h1 className="omatmainokset-header">OMAT MAINOKSET</h1>
      <div className="omatmainokset-card-container">
        <div className="omatmainokset-card"></div>
        <div className="omatmainokset-card"></div>
        <div className="omatmainokset-card"></div>
      </div>
      <div className="omatmainokset-uusimainos-btn">
        <p>Uusi mainos</p>
      </div>
    </div>
  );
};

export default OmatMainokset;
