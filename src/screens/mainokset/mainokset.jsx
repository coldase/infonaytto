import "./mainokset.css";
import { Navigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
import Footer from "../../components/footer/footer";

const Mainokset = ({ isLoggedIn, logout }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="mainokset-container">
        <h1>mainokseni</h1>
        {/* <Footer /> */}
      </div>
      <MyNav logout={logout} />
    </>
  );
};

export default Mainokset;