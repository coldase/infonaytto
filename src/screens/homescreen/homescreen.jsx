//Import styles
import "./homescreen.css";
import { Link } from "react-router-dom";
import QuestionSection from "../../components/ukk/question-section/questionsection";
import Footer from "../../components/footer/footer";
import { Navigate } from "react-router-dom";

//someicons
// import {
//   BsLinkedin,
//   BsFacebook,
//   BsInstagram,
//   BsTwitter,
//   BsYoutube,
// } from "react-icons/bs";

const HomeScreen = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <Navigate to="/profiili" />;
  }
  return (
    <>
      <div className="homescreen-container">
        <div className="homescreen-header">
          {/* <h1>SALON MAINOSPAIKAT OY</h1> */}
        </div>
        <div className="homescreen-content">
          <div className="homescreen-content-1">
            <h1>INFONÄYTTÖ</h1>
            <Link to="/esittely" className="homescreen-aloita-btn">
              <p>Aloita tästä</p>
            </Link>
            <QuestionSection />
          </div>

          <div className="homescreen-content-2">
            <div className="homescreen-kokemus-container">
              <p>
                "Two things are infinite: the universe and human stupidity; and
                I'm not sure about the universe."
              </p>
              <p>- Albert Einstein</p>
            </div>
            <div className="homescreen-kokemus-container">
              <p>
                "Have the courage to follow your heart and intuition. They
                somehow already know what you truly want to become. Everything
                else is secondary."
              </p>
              <p>- Steve Jobs</p>
            </div>
            <div className="homescreen-kokemus-container">
              <p>
                "I can calculate the motion of heavenly bodies but not the
                madness of people."
              </p>
              <p>- Isaac Newton</p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
