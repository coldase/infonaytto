import "./mainokset.css";
import { Navigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
import ProfileCard from "../../components/profilecard/profilecard";
import OmatMainokset from "../../components/omatmainokset/omatmainokset";
// import Footer from "../../components/footer/footer";

const Mainokset = ({ isLoggedIn, logout }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="mainokset-container">
        <div className="mainokset-content">
          <ProfileCard />
          <OmatMainokset />
        </div>

        {/* <Footer /> */}
      </div>
      <MyNav logout={logout} />
    </>
  );
};

export default Mainokset;
