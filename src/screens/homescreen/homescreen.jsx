//Import styles
import "./homescreen.css";
import { useState } from "react";
import LoginPopup from "../../components/loginpopup/loginpopup";

const HomeScreen = ({ currentUser, setCurrentUser }) => {
  const [isLoginPopup, setIsLoginPopup] = useState(true);
  return (
    <div className="homescreen-container">
      <div className="homescreen-content">
        <h1 className="homescreen-header">InfoNäyttö</h1>
        <div className="homescreen-login-btn">
          <div
            onClick={() => setIsLoginPopup(true)}
            className="homescreen-login-btn-text"
          >
            Aloita tästä
          </div>
        </div>
      </div>
      {isLoginPopup ? (
        <LoginPopup
          isLoginPopup={isLoginPopup}
          setIsLoginPopup={(val) => setIsLoginPopup(val)}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      ) : null}
    </div>
  );
};

export default HomeScreen;
