import "./tietoni.css";
import ProfileCard from "../../../components/profilecard/profilecard";

const Tietoni = ({ userinfodata }) => {
  return (
    <div className="tietoni-container">
      <ProfileCard userinfodata={userinfodata} />
      <div className="tietoni-btn-container">
        <div className="tietoni-btn" onClick={() => alert("Under development")}>
          <p>Vaihda salasana</p>
        </div>
        {/* <div className="tietoni-btn" onClick={() => alert("Under development")}>
          <p>Vaihda laskutustapa</p>
        </div> */}
        <div className="tietoni-btn" onClick={() => alert("Under development")}>
          <p>Vahvista muutokset</p>
        </div>
      </div>
    </div>
  );
};
export default Tietoni;
