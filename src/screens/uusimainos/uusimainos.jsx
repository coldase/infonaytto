import "./uusimainos.css";
import { Navigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
import { useState, useEffect } from "react";

import UusiMainosProgress from "../../components/uusimainos-progress/uusimainos-progress";
import UusiMainosKuva from "../../components/uusimainos-contents/uusimainoskuva";
import UusiMainosPaikka from "../../components/uusimainos-contents/uusimainospaikka";
import UusiMainosAika from "../../components/uusimainos-contents/uusimainosaika";
import UusiMainosJulkaisu from "../../components/uusimainos-contents/uusimainosjulkaisu";
import Footer from "../../components/footer/footer";
import MyMap from "../../components/map/map";

const UusiMainos = ({ isLoggedIn, logout }) => {
  let mainospaikat = [
    "Koulutus",
    "Liikuntapaikat",
    "Terveyspalvelut",
    "Ruokakaupat",
    "Liikenne",
    "Yleisötapahtumat",
    "Puistot",
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [showmap, setshowmap] = useState(false);

  const [myimg, setmyimg] = useState(null);
  const [mybuttons, setmybuttons] = useState([]);

  useEffect(() => {
    console.log(myimg);
  }, [myimg]);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="uusimainos-container">
        <div className="uusimainos-header">
          <h1>Uusi mainos</h1>
        </div>
        <UusiMainosProgress
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <div className="uusimainos-content">
          {currentStep === 0 ? (
            <UusiMainosKuva setmyimg={(img) => setmyimg(img)} myimg={myimg} />
          ) : null}
          {currentStep === 1 ? (
            <UusiMainosPaikka
              mainospaikat={mainospaikat}
              mybuttons={mybuttons}
              setmybuttons={setmybuttons}
              setshowmap={setshowmap}
            />
          ) : null}
          {currentStep === 2 ? <UusiMainosAika /> : null}
          {currentStep === 3 ? <UusiMainosJulkaisu /> : null}
        </div>
        <Footer />
        {showmap ? (
          <div className="uusimainos-map-container">
            <div className="map-alue-btn-container">
              {mainospaikat.map((paikka) => (
                <div key={paikka} className="map-alue-btn">
                  <p>{paikka}</p>
                </div>
              ))}
            </div>
            <MyMap />
            <div onClick={() => setshowmap(false)} className="closemap-btn">
              <p>Sulje kartta</p>
            </div>
          </div>
        ) : null}
      </div>
      <MyNav logout={logout} />
    </>
  );
};

export default UusiMainos;
