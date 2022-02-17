import "./profile.css";
import { useNavigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
// import Footer from "../../components/footer/footer";
import { useEffect, useState } from "react";

import ProfileProgress from "../../components/profile-progress/profile-progress";
import Mainokseni from "./tabs/mainokseni.jsx";
import Tietoni from "./tabs/tietoni.jsx";
import Tilaukseni from "./tabs/tilaukseni.jsx";
import SalasananVaihto from "../../components/salasananvaihto/salasananvaihto";

const Profile = ({
  isLoggedIn,
  update,
  logout,
  currentProfileTab,
  setCurrentProfileTab,
  setIsLoginPopup,
  setLoginTab,
  setisshowmap,
  userinfodata,
  userAds,
  setCurrentMainosTab,
}) => {
  const navigate = useNavigate();
  const [showsalasananvaihto, setshowsalasananvaihto] = useState(false);

  useEffect(() => {
    if (!isLoggedIn && !localStorage.getItem("token")) {
      navigate("/esittely", { replace: true });
    }

    setCurrentProfileTab(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="profile-container">
        <div className="profile-header">
          <h1>asiakasprofiili</h1>
        </div>
        <ProfileProgress
          currentStep={currentProfileTab}
          setCurrentStep={setCurrentProfileTab}
        />
        <div className="profile-content">
          {currentProfileTab === 0 ? (
            <Mainokseni
              userAds={userAds}
              setCurrentMainosTab={setCurrentMainosTab}
            />
          ) : null}
          {currentProfileTab === 1 ? (
            <Tietoni
              userinfodata={userinfodata}
              update={update}
              showSalasana={() => setshowsalasananvaihto(true)}
            />
          ) : null}
          {currentProfileTab === 2 ? <Tilaukseni /> : null}
        </div>
      </div>
      {showsalasananvaihto ? (
        <SalasananVaihto
          userinfodata={userinfodata}
          closeSalasana={() => setshowsalasananvaihto(false)}
        />
      ) : null}
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

export default Profile;
