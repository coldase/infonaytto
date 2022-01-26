import "./arkisto.css";
import { Navigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
import Footer from "../../components/footer/footer";

const Arkisto = ({ isLoggedIn, logout }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="arkisto-container">
        <h1>Arkisto</h1>
        {/* <Footer /> */}
      </div>
      <MyNav logout={logout} />
    </>
  );
};

export default Arkisto;
