import "./profile-progress.css";

const ProfileProgress = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="profile-progress-container">
      <div
        onClick={() => setCurrentStep(0)}
        className={"profile-progress-step"}
        style={currentStep === 0 ? { borderBottom: "4px solid black" } : null}
      >
        <p style={currentStep === 0 ? { color: "#343a40" } : null}>
          Mainokseni
        </p>
      </div>
      <div
        onClick={() => setCurrentStep(1)}
        style={currentStep === 1 ? { borderBottom: "4px solid black" } : null}
        className="profile-progress-step"
      >
        <p style={currentStep === 1 ? { color: "#343a40" } : null}>Tietoni</p>
      </div>
      {/* <div
        onClick={() => setCurrentStep(2)}
        style={currentStep === 2 ? { borderBottom: "4px solid black" } : null}
        className="profile-progress-step"
      >
        <p style={currentStep === 2 ? { color: "#343a40" } : null}>
          Tilaukseni
        </p>
      </div> */}
    </div>
  );
};

export default ProfileProgress;
