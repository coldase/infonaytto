import "./mainokset.css";
import { useNavigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
// import Footer from "../../components/footer/footer";

//Tabs
import Tyonalla from "./tabs/tyonalla";
import Nakyvilla from "./tabs/nakyvilla";
import Tulossa from "./tabs/tulossa";
import Arkisto from "./tabs/arkisto";
import MainoksetProgress from "../../components/mainokset-progress/mainokset-progress";

const Mainokset = ({
  isLoggedIn,
  update,
  logout,
  currentMainosTab,
  setCurrentMainosTab,
  userAds,
  setIsLoginPopup,
  setLoginTab,
  setisshowmap,
}) => {
  const navigate = useNavigate();

  if (!isLoggedIn && !localStorage.getItem("token")) {
    navigate("/esittely", { replace: true });
  }

  return (
    <>
      <div className="mainokset-container">
        <div className="mainokset-header">
          <h1>OMAT MAINOKSET</h1>
        </div>
        <MainoksetProgress
          currentStep={currentMainosTab}
          setCurrentStep={setCurrentMainosTab}
        />

        {currentMainosTab === 0 ? <Tyonalla /> : null}
        {currentMainosTab === 1 ? (
          <Nakyvilla userAds={userAds} update={update} />
        ) : null}
        {currentMainosTab === 2 ? (
          <Tulossa userAds={userAds} update={update} />
        ) : null}
        {currentMainosTab === 3 ? (
          <Arkisto userAds={userAds} update={update} />
        ) : null}
        {/* <Footer /> */}
      </div>
      <MyNav
        setLoginTab={setLoginTab}
        isLoggedIn={isLoggedIn}
        logout={logout}
        setIsLoginPopup={setIsLoginPopup}
        setisshowmap={setisshowmap}
      />
    </>
  );
};

export default Mainokset;
