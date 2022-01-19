//Import styles
import "./homescreen.css";
import { useState } from "react";
import LoginPopup from "../../components/loginpopup/loginpopup";
import { Navigate, Link } from "react-router-dom";
import QuestionSection from "../../components/ukk/question-section/questionsection";

//icons
import {
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const HomeScreen = ({ currentUser, setCurrentUser }) => {
  const [isLoginPopup, setIsLoginPopup] = useState(false);

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
        <QuestionSection />
      </div>
      <div className="homescreen-footer">
        <h1>asiakaspalvelu@infonaytto.fi</h1>
        <div>
          <BsLinkedin className="some-icon" size={35} />
          <BsFacebook className="some-icon" size={35} />
          <BsInstagram className="some-icon" size={35} />
          <BsTwitter className="some-icon" size={35} />
          <BsYoutube className="some-icon" size={35} />
        </div>
      </div>
      <Link to="/help" className="homescreen-question-btn">
        <div className="homescreen-question-btn-text">Apua</div>
      </Link>
    </div>
  );
};

export default HomeScreen;
