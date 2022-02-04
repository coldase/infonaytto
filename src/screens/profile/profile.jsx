import "./profile.css";
import MyNav from "../../components/mynav/mynav";
import ProfileCard from "../../components/profilecard/profilecard";
import ProfileOmatMainokset from "../../components/profileomatmainokset/profileomatmainokset";
import { useEffect } from "react/cjs/react.development";

// import Footer from "../../components/footer/footer";

const Profile = ({
  isLoggedIn,
  logout,
  setCurrentMainosTab,
  userinfodata,
  setIsLoginPopup,
  setLoginTab,
  setisshowmap,
  check_if_token_is_logged_in,
}) => {
  useEffect(() => {
    check_if_token_is_logged_in();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="profile-container">
        <div className="profile-content">
          <ProfileCard userinfodata={userinfodata} />
          <ProfileOmatMainokset setCurrentMainosTab={setCurrentMainosTab} />
        </div>

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

export default Profile;
