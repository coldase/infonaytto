//Import styles
import "./homescreen.css";
import { useState } from "react";
import LoginPopup from "../../components/loginpopup/loginpopup";
import { Navigate, Link } from "react-router-dom";

const HomeScreen = ({ currentUser, setCurrentUser }) => {
  const [isLoginPopup, setIsLoginPopup] = useState(false);
  const [questions, setquestions] = useState([
    "Kuinka kirjaudun sisään?",
    "Mitä tämä kaikki tarkoittaa ja minne minun tiedot menee?",
    "Miksi käyttäisin tätä palvelua?",
    "asdasa",
  ]);

  if (currentUser) {
    return <Navigate to="/user" />;
  }

  return (
    <div className="homescreen">
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
      <div className="homescreen-section">
        <div className="question-section">
          <div className="question-header">
            <h1>Usein kysyt kysymykset</h1>
          </div>
          <div className="question-container">
            {questions.map((item) => {
              return (
                <div className="question-item">
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Link to="/questions" className="homescreen-question-btn">
        <div className="homescreen-question-btn-text">Tarvitsetko apua</div>
      </Link>
    </div>
  );
};

export default HomeScreen;
