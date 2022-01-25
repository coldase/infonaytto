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

const UusiMainos = ({ isLoggedIn, logout }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const [myimg, setmyimg] = useState(null);

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
          {currentStep === 1 ? <UusiMainosPaikka /> : null}
          {currentStep === 2 ? <UusiMainosAika /> : null}
          {currentStep === 3 ? <UusiMainosJulkaisu /> : null}
        </div>
        <Footer />
      </div>
      <MyNav logout={logout} />
    </>
  );
};

export default UusiMainos;
