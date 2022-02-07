import "./mainokset-progress.css";

const MainoksetProgress = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="mainokset-progress-container">
      <div
        onClick={() => setCurrentStep(0)}
        className={"mainokset-progress-step"}
        style={currentStep === 0 ? { borderBottom: "4px solid black" } : null}
      >
        <p style={currentStep === 0 ? { color: "#343a40" } : null}>Työn alla</p>
      </div>
      <div
        onClick={() => setCurrentStep(1)}
        style={currentStep === 1 ? { borderBottom: "4px solid black" } : null}
        className="mainokset-progress-step"
      >
        <p style={currentStep === 1 ? { color: "#343a40" } : null}>Näkyvillä</p>
      </div>
      <div
        onClick={() => setCurrentStep(2)}
        style={currentStep === 2 ? { borderBottom: "4px solid black" } : null}
        className="mainokset-progress-step"
      >
        <p style={currentStep === 2 ? { color: "#343a40" } : null}>Tulossa</p>
      </div>
      <div
        onClick={() => setCurrentStep(3)}
        style={currentStep === 3 ? { borderBottom: "4px solid black" } : null}
        className="mainokset-progress-step"
      >
        <p style={currentStep === 3 ? { color: "#343a40" } : null}>Arkisto</p>
      </div>
    </div>
  );
};

export default MainoksetProgress;
