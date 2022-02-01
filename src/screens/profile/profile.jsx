import "./profile.css";
import { Navigate } from "react-router-dom";
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
}) => {
  if (!isLoggedIn) {
    return <Navigate to="/esittely" />;
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
        isLoggedIn={isLoggedIn}
        logout={logout}
        setIsLoginPopup={setIsLoginPopup}
      />
    </>
  );
};

export default Profile;
