import "./uusimainos.css";
import { Navigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";

const UusiMainos = () => {
  if (!sessionStorage.getItem("userid")) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <MyNav />
      <div className="uusimainos-container">
        <div className="uusimainos-header">
          <h1>Uusi mainos</h1>
        </div>
        <div className="uusimainos-content"></div>

        <div className="uusimainos-footer">
          <h1>footer</h1>
        </div>
      </div>
    </>
  );
};

export default UusiMainos;
