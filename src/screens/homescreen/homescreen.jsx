//Import styles
import "./homescreen.css";
import { useState } from "react";
import LoginPopup from "../../components/loginpopup/loginpopup";
import { Navigate, Link } from "react-router-dom";
import QuestionSection from "../../components/ukk/question-section/questionsection";

import papers from "../../assets/images/etusivubg.jpg";

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
    <>
      {isLoginPopup ? (
        <LoginPopup
          isLoginPopup={isLoginPopup}
          setIsLoginPopup={(val) => setIsLoginPopup(val)}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      ) : null}
      <div className="homescreen-container">
        <h1 className="mainheader">SALON KAUPUNGIN MAINOSNÄYTÖT</h1>
        <div className="paper-container">
          <h1 className="paperheader">INFONÄYTÖT</h1>
          <div onClick={() => setIsLoginPopup(true)} className="aloita-btn">
            <p>Aloita tästä</p>
          </div>
          <QuestionSection />
        </div>
        <div className="feedback-container"></div>
        <div className="homescreen-footer"></div>
      </div>
    </>
  );
};

export default HomeScreen;
