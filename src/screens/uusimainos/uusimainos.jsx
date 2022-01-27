import "./uusimainos.css";
import { Navigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
import { useState, useEffect } from "react";

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
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const [myimg, setmyimg] = useState(null);
  const [mybuttons, setmybuttons] = useState([]);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const clearInputs = () => {
    setmyimg(null);
    setmybuttons([]);
    setSelectedDayRange({
      from: null,
      to: null,
    });
  };

  // useEffect(() => {
  //   console.log(selectedDayRange);
  // }, [selectedDayRange]);

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
              userid={userid}
              clearInputs={clearInputs}
              myimg={myimg}
              mybuttons={mybuttons}
              selectedDayRange={selectedDayRange}
            />
          ) : null}
        </div>
        {/* <Footer /> */}
      </div>
      {isshowmap ? (
        <MyMapContainer
          setisshowmap={setisshowmap}
          mainospaikat={mainospaikat}
        />
      ) : null}
      <MyNav logout={logout} />
    </>
  );
};

export default UusiMainos;
