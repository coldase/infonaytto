import "./mainokset.css";
import { Navigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";

const Mainokset = ({ userData }) => {
  if (!sessionStorage.getItem("userid")) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="mainokset-container">
        <div className="mainokset-header">
          <h1>mainokset</h1>
        </div>
        <div className="mainokset-content"></div>

        <div className="mainokset-footer">
          <h1>footer</h1>
        </div>
      </div>
      <MyNav />
    </>
  );
};

export default Mainokset;
