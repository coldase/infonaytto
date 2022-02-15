import "./uusimainoskuva.css";
import { useRef } from "react";
import KukeLogo from "../../assets/images/kukelogo.png";
import CanvaLogo from "../../assets/images/canvalogo.png";

const UusiMainosKuva = ({
  setmyimg,
  myimg,
  showmainostoimistotab,
  setshowmainostoimistotab,
}) => {
  const inputFile = useRef(null);
  const handle_btn = () => {
    inputFile.current.click();
  };

  const get_image_type = (img) => {
    const types = ["jpg", "png", "gif"];
    const l = img.name.split(".");
    if (types.includes(l[l.length - 1])) {
      return true;
    }
    return false;
  };

  const good_size = (img) => {
    if (img.size < 5000000) {
      return true;
    }
    return false;
  };

  return (
    <>
      {showmainostoimistotab === 0 ? (
        <div className="uusimainoskuva-container">
          <div className="uusimainoskuva-omakuva-container">
            <p>Minulla on jo mainos:</p>

            <div
              onClick={() => setshowmainostoimistotab(2)}
              className="uusimainoskuva-omakuva-lisaa-btn"
            >
              <p>LATAA MAINOS</p>
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
              onClick={() => setshowmainostoimistotab(1)}
              className="uusimainoskuva-apua-btn"
            >
              <p>OTA YHTEYTTÄ</p>
            </div>
          </div>
        </div>
      ) : null}
      {showmainostoimistotab === 1 ? (
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
              <p>Lataa ilmainen suunnitteluohjelma</p>
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
      ) : null}

      {showmainostoimistotab === 2 ? (
        <>
          <div className="uusimainoskuva-container">
            <div className="uusimainoskuva-kuvatab-container">
              <p>1. Tarkista kuvatiedostosi ominaisuudet:</p>
              <p>
                Kuvasuhde: <span>16:9</span>
              </p>
              <p>
                Tiedostomuoto:{" "}
                {myimg === null ? (
                  <span>jpg, png, gif</span>
                ) : get_image_type(myimg) ? (
                  <span style={{ color: "green" }}>
                    Hyväksytty tiedostomuoto
                  </span>
                ) : (
                  <span style={{ color: "red" }}>Väärä tiedostomuoto</span>
                )}
              </p>
              <p>
                Resoluutio: <span>1920 x 1080px</span>
              </p>
              <p>
                Koko:{" "}
                <span>
                  {myimg === null ? (
                    <span>Suurin sallittu koko 5mb</span>
                  ) : (
                    <span
                      style={
                        good_size(myimg) ? { color: "green" } : { color: "red" }
                      }
                    >
                      {good_size(myimg)
                        ? "Hyväksytty koko"
                        : "Kuva on liian iso"}
                    </span>
                  )}
                </span>
              </p>
            </div>
            <div className="uusimainoskuva-kuvatab-container">
              <p>2. Lataa tiedosto</p>
              <div
                onClick={handle_btn}
                className="uusimainoskuva-omakuva-lisaa-btn"
                // style={
                //   myimg !== null && myimg !== undefined ? { height: 60 } : null
                // }
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
            <div className="uusimainoskuva-kuvatab-container">
              <p>3. Esikatsele mainoksesi</p>
              {myimg ? (
                <img
                  alt="mainoskuva-preview"
                  className="uusimainoskuva-omakuva-preview"
                  src={URL.createObjectURL(myimg)}
                />
              ) : (
                <div className="uusimainoskuva-omakuva-preview-empty">
                  <p>Ei kuvaa</p>
                </div>
              )}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default UusiMainosKuva;
