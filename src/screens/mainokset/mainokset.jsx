import "./mainokset.css";
import { Navigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
import ProfileCard from "../../components/profilecard/profilecard";
import OmatMainokset from "../../components/omatmainokset/omatmainokset";

const Mainokset = ({ userData }) => {
  if (!sessionStorage.getItem("userid")) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="mainokset-container">
        <div className="mainokset-content">
          <ProfileCard />
          <OmatMainokset />
        </div>

        <div className="mainokset-footer">
          <h1>footer</h1>
        </div>
      </div>
      <MyNav />
    </>
  );
};

export default Mainokset;
