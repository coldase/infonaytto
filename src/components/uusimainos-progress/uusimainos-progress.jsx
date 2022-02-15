import "./uusimainos-progress.css";

const UusiMainosProgress = ({
  currentStep,
  setCurrentStep,
  setshowmainostoimistotab,
}) => {
  return (
    <div className="uusimainos-progress-container">
      <div
        onClick={() => {
          setCurrentStep(0);
          setshowmainostoimistotab(0);
        }}
        className={"uusimainos-progress-step"}
        style={currentStep === 0 ? { borderBottom: "4px solid black" } : null}
      >
        <p style={currentStep === 0 ? { color: "#343a40" } : null}>Pohja</p>
      </div>
      <div
        onClick={() => setCurrentStep(1)}
        style={currentStep === 1 ? { borderBottom: "4px solid black" } : null}
        className="uusimainos-progress-step"
      >
        <p style={currentStep === 1 ? { color: "#343a40" } : null}>Paikka</p>
      </div>
      <div
        onClick={() => setCurrentStep(2)}
        style={currentStep === 2 ? { borderBottom: "4px solid black" } : null}
        className="uusimainos-progress-step"
      >
        <p style={currentStep === 2 ? { color: "#343a40" } : null}>Aika</p>
      </div>
      <div
        onClick={() => setCurrentStep(3)}
        style={currentStep === 3 ? { borderBottom: "4px solid black" } : null}
        className="uusimainos-progress-step"
      >
        <p style={currentStep === 3 ? { color: "#343a40" } : null}>Julkaisu</p>
      </div>
    </div>
  );
};

export default UusiMainosProgress;
