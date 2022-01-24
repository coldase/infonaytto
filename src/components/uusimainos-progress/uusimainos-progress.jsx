import "./uusimainos-progress.css";

const UusiMainosProgress = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="uusimainos-progress-container">
      <div
        onClick={() => setCurrentStep(0)}
        style={currentStep >= 0 ? { opacity: 1 } : { opacity: 0.5 }}
        className="uusimainos-progress-step"
      >
        <p>Kuva</p>
      </div>
      <div
        onClick={() => setCurrentStep(1)}
        style={currentStep >= 1 ? { opacity: 1 } : { opacity: 0.5 }}
        className="uusimainos-progress-step"
      >
        <p>Paikka</p>
      </div>
      <div
        onClick={() => setCurrentStep(2)}
        style={currentStep >= 2 ? { opacity: 1 } : { opacity: 0.5 }}
        className="uusimainos-progress-step"
      >
        <p>Aika</p>
      </div>
      <div
        onClick={() => setCurrentStep(3)}
        style={currentStep >= 3 ? { opacity: 1 } : { opacity: 0.5 }}
        className="uusimainos-progress-step"
      >
        <p>Julkaisu</p>
      </div>
    </div>
  );
};

export default UusiMainosProgress;
