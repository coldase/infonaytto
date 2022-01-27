import "./profile.css";
import { Navigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
import ProfileCard from "../../components/profilecard/profilecard";
import ProfileOmatMainokset from "../../components/profileomatmainokset/profileomatmainokset";
// import Footer from "../../components/footer/footer";

const Profile = ({ isLoggedIn, logout, setCurrentMainosTab, userinfodata }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
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
      <MyNav logout={logout} />
    </>
  );
};

export default Profile;
