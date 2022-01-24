import "./uusimainoskuva.css";

const UusiMainosKuva = () => {
  return (
    <div className="uusimainoskuva-container">
      <div className="uusimainoskuva-pohja-container">
        <h1>Valitse valmis pohja</h1>
        <div className="uusimainoskuva-pohjat">
          <div className="uusimainoskuva-pohja-card"></div>
          <div className="uusimainoskuva-pohja-card"></div>
          <div className="uusimainoskuva-pohja-card"></div>
          <div className="uusimainoskuva-pohja-card"></div>
          <div className="uusimainoskuva-pohja-card"></div>
          <div className="uusimainoskuva-pohja-card"></div>
          <div className="uusimainoskuva-pohja-card"></div>
          <div className="uusimainoskuva-pohja-card"></div>
          <div className="uusimainoskuva-pohja-card"></div>
        </div>
      </div>
      <div className="uusimainoskuva-omakuva-container">
        <h1>Tai lisää oma kuva</h1>
      </div>
    </div>
  );
};

export default UusiMainosKuva;
