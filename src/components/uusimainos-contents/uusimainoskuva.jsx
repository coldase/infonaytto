import "./uusimainoskuva.css";
import { useRef, useState } from "react";
import KukeLogo from "../../assets/images/kukelogo.png";
import CanvaLogo from "../../assets/images/canvalogo.png";

const UusiMainosKuva = ({ setmyimg, myimg }) => {
  const inputFile = useRef(null);
  const handle_btn = () => {
    inputFile.current.click();
  };

  const [showmainostoimistotab, setshowmainostoimistotab] = useState(false);

  return (
    <>
      {!showmainostoimistotab ? (
        <div className="uusimainoskuva-container">
          <div className="uusimainoskuva-omakuva-container">
            <p>Minulla on jo mainos:</p>
            {myimg ? (
              <img
                alt="mainoskuva-preview"
                className="uusimainoskuva-omakuva-preview"
                src={URL.createObjectURL(myimg)}
              />
            ) : null}
            <div
              onClick={handle_btn}
              className="uusimainoskuva-omakuva-lisaa-btn"
              style={
                myimg !== null && myimg !== undefined ? { height: 60 } : null
              }
            >
              {myimg !== null && myimg !== undefined ? (
                <p>VAIHDA</p>
              ) : (
                <p>LATAA MAINOS</p>
              )}
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
          <div className="uusimainoskuva-apua-content">
            <p>TARVITSEN APUA:</p>
            <div
              onClick={() => setshowmainostoimistotab(true)}
              className="uusimainoskuva-apua-btn"
            >
              <p>OTA YHTEYTTÄ</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="uusimainoskuva-container">
            <div className="uusimainoskuva-omakuva-container">
              <p>Ota yhteyttä mainostoimistoon</p>
              <img
                className="uusimainoskuva-logos"
                src={KukeLogo}
                alt="kukelogo"
              />
              <p id="uusimainosinfoheader">Sähköpostilla</p>
              <p id="uusimainosinfo">hei@kuke.fi</p>
              <p id="uusimainosinfoheader">Soittamalla</p>
              <p id="uusimainosinfo">044 285 4077</p>
              <div className="uusimainos-exp-box">
                <p>
                  "Mainostoimisto Kuke teki loistavan mainoksen eikä maksanut
                  paljon, Ymmärsivät heti mitä halusin"
                </p>
              </div>
            </div>
          </div>
          <div className="uusimainoskuva-container">
            <div className="uusimainoskuva-omakuva-container">
              <p>Lataa suunnitteluohjelma</p>
              <img
                className="uusimainoskuva-logos"
                src={CanvaLogo}
                alt="canvalogo"
              />
              <p id="uusimainosinfoheader">Rekisteröidy</p>
              <p id="uusimainosinfo">www.canva.com</p>

              <div className="uusimainos-exp-box">
                <p>
                  "Canva.com ilmaisella rekisteröitymisellä voit tehdä näyttäviä
                  mainoksia helposti itse. Valitsin Instagram tarina pohjan.
                  Lisäsin siihen kuvia ja tekstiä, jonka jälkeen sain
                  hyvälaatuisen mainoksen. Todella helppoa!"
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setshowmainostoimistotab(false)}
            className="uusimainoskuva-apua-btn"
          >
            <p>Takaisin</p>
          </div>
        </>
      )}
    </>
  );
};

export default UusiMainosKuva;
