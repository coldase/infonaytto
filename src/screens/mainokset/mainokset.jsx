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
import { useEffect } from "react";

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
  mainospaikat,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && !localStorage.getItem("token")) {
      navigate("/esittely", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="mainokset-container">
        <div className="mainokset-header">
          {currentMainosTab === 0 ? <h1>Työnalla olevat mainokset</h1> : null}
          {currentMainosTab === 1 ? <h1>Näkyvillä olevat mainokset</h1> : null}
          {currentMainosTab === 2 ? <h1>Tulossa olevat mainokset</h1> : null}
          {currentMainosTab === 3 ? <h1>Menneet mainokset</h1> : null}
        </div>
        <MainoksetProgress
          currentStep={currentMainosTab}
          setCurrentStep={setCurrentMainosTab}
        />

        {currentMainosTab === 0 ? <Tyonalla /> : null}
        {currentMainosTab === 1 ? (
          <Nakyvilla
            mainospaikat={mainospaikat}
            userAds={userAds}
            update={update}
          />
        ) : null}
        {currentMainosTab === 2 ? (
          <Tulossa
            mainospaikat={mainospaikat}
            userAds={userAds}
            update={update}
          />
        ) : null}
        {currentMainosTab === 3 ? (
          <Arkisto
            mainospaikat={mainospaikat}
            userAds={userAds}
            update={update}
          />
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
