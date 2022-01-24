import "./uusimainos.css";
import { Navigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
import { useState } from "react";

import UusiMainosProgress from "../../components/uusimainos-progress/uusimainos-progress";
import UusiMainosKuva from "../../components/uusimainos-contents/uusimainoskuva";
import UusiMainosPaikka from "../../components/uusimainos-contents/uusimainospaikka";
import UusiMainosAika from "../../components/uusimainos-contents/uusimainosaika";
import UusiMainosJulkaisu from "../../components/uusimainos-contents/uusimainosjulkaisu";

const UusiMainos = () => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!sessionStorage.getItem("userid")) {
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
          {currentStep === 0 ? <UusiMainosKuva /> : null}
          {currentStep === 1 ? <UusiMainosPaikka /> : null}
          {currentStep === 2 ? <UusiMainosAika /> : null}
          {currentStep === 3 ? <UusiMainosJulkaisu /> : null}
        </div>
        <div className="uusimainos-footer">
          <h1>footer</h1>
        </div>
      </div>
      <MyNav />
    </>
  );
};

export default UusiMainos;
