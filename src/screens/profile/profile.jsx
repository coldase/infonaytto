import "./profile.css";
import { useNavigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
import ProfileCard from "../../components/profilecard/profilecard";
import ProfileOmatMainokset from "../../components/profileomatmainokset/profileomatmainokset";

// import Footer from "../../components/footer/footer";

const Profile = ({
  isLoggedIn,
  logout,
  setCurrentMainosTab,
  userinfodata,
  setIsLoginPopup,
  setLoginTab,
  setisshowmap,
}) => {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/esittely", { replace: true });
  }

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
