import "./profile.css";
import { Navigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
const Profile = () => {
  if (!sessionStorage.getItem("userid")) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <MyNav />
      <div className="profile-container">
        <div className="profile-header">
          <h1>Profiili</h1>
        </div>
        <div className="profile-content"></div>

        <div className="profile-footer">
          <h1>footer</h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
