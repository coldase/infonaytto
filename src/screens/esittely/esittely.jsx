import "./esittely.css";
import { Navigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
import esittelybg from "../../assets/images/esittelybg.jpg";
const Esittely = () => {
  if (!sessionStorage.getItem("userid")) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="esittely-container">
        <img className="esittelybg" src={esittelybg} />
        <div className="esittely-content">
          <div className="esittely-text-container">
            <h1>ESITTELY</h1>
          </div>
        </div>
      </div>
      <MyNav />
    </>
  );
};

export default Esittely;
