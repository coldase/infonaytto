import "./profile.css";
import { Navigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";

const Profile = ({ isLoggedIn, logout }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="profile-container">
        <div className="profile-header">
          <h1>Profiili</h1>
        </div>
        <div className="profile-content"></div>

        <div className="profile-footer">
          <h1>footer</h1>
        </div>
      </div>
      <MyNav logout={logout} />
    </>
  );
};

export default Profile;
