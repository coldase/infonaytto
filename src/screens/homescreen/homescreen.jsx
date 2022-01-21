//Import styles
import "./homescreen.css";
import { useState } from "react";
import LoginPopup from "../../components/loginpopup/loginpopup";
import { Navigate, Link } from "react-router-dom";
import QuestionSection from "../../components/ukk/question-section/questionsection";

//someicons
import {
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const HomeScreen = ({ currentUser, setCurrentUser }) => {
  const [isLoginPopup, setIsLoginPopup] = useState(false);

  if (sessionStorage.getItem("userid")) {
    return <Navigate to="/esittely" />;
  }

  return (
    <>
      <div className="homescreen-container">
        <div className="homescreen-header">
          <h1>SALON MAINOSPAIKAT OY</h1>
        </div>
        <div className="homescreen-content">
          <div className="homescreen-content-1">
            <h1>INFONÄYTTÖ</h1>
            <div
              onClick={() => setIsLoginPopup(true)}
              className="homescreen-aloita-btn"
            >
              <p>Aloita tästä</p>
            </div>
            <QuestionSection />
          </div>
          {isLoginPopup ? (
            <LoginPopup
              isLoginPopup={isLoginPopup}
              setIsLoginPopup={(val) => setIsLoginPopup(val)}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          ) : null}
          <div className="homescreen-content-2"></div>
          <div className="homescreen-footer"></div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
