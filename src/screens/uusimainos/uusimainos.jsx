import "./uusimainos.css";
import MyNav from "../../components/mynav/mynav";
import { useState } from "react";

import UusiMainosProgress from "../../components/uusimainos-progress/uusimainos-progress";
import UusiMainosKuva from "../../components/uusimainos-contents/uusimainoskuva";
import UusiMainosPaikka from "../../components/uusimainos-contents/uusimainospaikka";
import UusiMainosAika from "../../components/uusimainos-contents/uusimainosaika";
import UusiMainosJulkaisu from "../../components/uusimainos-contents/uusimainosjulkaisu";
// import Footer from "../../components/footer/footer";
import MyMapContainer from "../../components/map/map-container";

const UusiMainos = ({
  isLoggedIn,
  logout,
  isshowmap,
  setisshowmap,
  mainospaikat,
  userid,
  update,
  setIsLoginPopup,
  setLoginTab,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const [myimg, setmyimg] = useState(null);
  const [mybuttons, setmybuttons] = useState([]);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const [adname, setadname] = useState(null);

  const clearInputs = () => {
    setmyimg(null);
    setmybuttons([]);
    setSelectedDayRange({
      from: null,
      to: null,
    });
  };

  return (
    <>
      <div className="uusimainos-container">
        <div className="uusimainos-header">
          <h1>Uusi mainos</h1>
        </div>
        {isLoggedIn ? (
          <div>
            <UusiMainosProgress
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
            <div className="uusimainos-content">
              {currentStep === 0 ? (
                <UusiMainosKuva
                  setmyimg={(img) => setmyimg(img)}
                  myimg={myimg}
                />
              ) : null}
              {currentStep === 1 ? (
                <UusiMainosPaikka
                  mainospaikat={mainospaikat}
                  mybuttons={mybuttons}
                  setmybuttons={setmybuttons}
                  setisshowmap={setisshowmap}
                />
              ) : null}
              {currentStep === 2 ? (
                <UusiMainosAika
                  selectedDayRange={selectedDayRange}
                  setSelectedDayRange={setSelectedDayRange}
                />
              ) : null}
              {currentStep === 3 ? (
                <UusiMainosJulkaisu
                  update={update}
                  setadname={setadname}
                  adname={adname}
                  userid={userid}
                  clearInputs={clearInputs}
                  myimg={myimg}
                  mybuttons={mybuttons}
                  selectedDayRange={selectedDayRange}
                />
              ) : null}
            </div>
          </div>
        ) : (
          <div className="uusimainos-empty-container">
            <div className="uusimainos-empty-content">
              <h5>Rekisteröitymällä pääset mainostamaan</h5>
              <div
                onClick={() => {
                  setIsLoginPopup(true);
                  setLoginTab(false);
                }}
                className="uusimainos-empty-login-btn"
              >
                <p>Rekisteröidy</p>
              </div>
            </div>
          </div>
        )}
        {/* <Footer /> */}
      </div>
      {isshowmap ? (
        <MyMapContainer
          setisshowmap={setisshowmap}
          mainospaikat={mainospaikat}
        />
      ) : null}
      <MyNav
        setLoginTab={setLoginTab}
        isLoggedIn={isLoggedIn}
        logout={logout}
        setIsLoginPopup={setIsLoginPopup}
      />
    </>
  );
};

export default UusiMainos;
