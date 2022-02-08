import "./uusimainos.css";
import MyNav from "../../components/mynav/mynav";
import { useEffect, useState } from "react";

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
  const [selectedPaketti, setSelectedPaketti] = useState(0);

  const [mybuttons, setmybuttons] = useState([]);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const setToday = () => {
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    setSelectedDayRange({
      from: {
        day: d,
        month: m,
        year: y,
      },
      to: null,
    });
  };

  const [adname, setadname] = useState(null);

  const clearInputs = () => {
    setmyimg(null);
    setmybuttons([]);
    setSelectedDayRange({ from: null, to: null });
  };

  const handleOnChange = (val) => {
    let temp = null;
    if (selectedPaketti === 0) {
      temp = val;
    } else if (selectedPaketti === 1) {
      val.to = { ...val.from, day: val.from.day + 7 };
      temp = val;
    } else if (selectedPaketti === 2) {
      val.to = { ...val.from, month: val.from.month + 1 };
      temp = val;
    } else if (selectedPaketti === 3) {
      val.to = { ...val.from, month: val.from.month + 3 };
      temp = val;
    }
    setSelectedDayRange(temp);
  };

  useEffect(() => {
    if (selectedDayRange.from) {
      handleOnChange(selectedDayRange);
    }
  }, [selectedPaketti]);

  return (
    <>
      <div
        onClick={isshowmap ? () => setisshowmap(false) : null}
        className="uusimainos-container"
      >
        <div className="uusimainos-header">
          {currentStep === 0 ? <h1>Uusi mainos</h1> : null}
          {currentStep === 1 ? <h1>Valitse missä mainos näkyy</h1> : null}
          {currentStep === 2 ? <h1>Valitse ajankohta</h1> : null}
          {currentStep === 3 ? <h1>Julkaise mainos</h1> : null}
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
                  handleOnChange={handleOnChange}
                  selectedPaketti={selectedPaketti}
                  setSelectedPaketti={setSelectedPaketti}
                  selectedDayRange={selectedDayRange}
                  setSelectedDayRange={setSelectedDayRange}
                />
              ) : null}
              {currentStep === 3 ? (
                <UusiMainosJulkaisu
                  setCurrentStep={setCurrentStep}
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
        setisshowmap={setisshowmap}
      />
    </>
  );
};

export default UusiMainos;
