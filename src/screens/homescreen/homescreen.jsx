//Import styles
import "./homescreen.css";
import { useState } from "react";
import LoginPopup from "../../components/loginpopup/loginpopup";
import { Navigate, Link } from "react-router-dom";
import { AiFillWindows } from "react-icons/ai";

const HomeScreen = ({ currentUser, setCurrentUser }) => {
  const [isLoginPopup, setIsLoginPopup] = useState(false);

  if (currentUser) {
    return <Navigate to="/user" />;
  }

  const handleQuestionsBtn = () => {
    return <Navigate to="/questions" />;
  };

  return (
    <>
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
      <Link to="/questions" className="homescreen-question-btn">
        <div className="homescreen-question-btn-text">Tarvitsetko apua</div>
      </Link>
    </>
  );
};

export default HomeScreen;
