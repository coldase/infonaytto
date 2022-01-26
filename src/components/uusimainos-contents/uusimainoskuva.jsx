import "./uusimainoskuva.css";
import { useRef } from "react";

const UusiMainosKuva = ({ setmyimg, myimg }) => {
  let mainostemplates = 12;
  const inputFile = useRef(null);
  const handle_btn = () => {
    inputFile.current.click();
  };

  return (
    <div className="uusimainoskuva-container">
      <div className="uusimainoskuva-pohja-container">
        <h1>Valitse valmis pohja</h1>
        <div className="uusimainoskuva-pohjat">
          {[...Array(mainostemplates)].map((item) => (
            <div key={item} className="uusimainoskuva-pohja-card"></div>
          ))}
        </div>
      </div>
      <div className="uusimainoskuva-omakuva-container">
        <h1>Tai lisää oma kuva</h1>
        {myimg ? (
          <img
            alt="mainoskuva-preview"
            className="uusimainoskuva-omakuva-preview"
            src={URL.createObjectURL(myimg)}
          />
        ) : null}
        <div onClick={handle_btn} className="uusimainoskuva-omakuva-lisaa-btn">
          {myimg !== null ? <p>Vaihda kuva</p> : <p>Valitse kuva</p>}
        </div>

        <input
          ref={inputFile}
          type="file"
          onChange={(e) => {
            setmyimg(e.target.files[0]);
          }}
          name="image"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default UusiMainosKuva;
