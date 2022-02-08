import "./mainokseni.css";
import { Link } from "react-router-dom";

const Mainokseni = ({ setCurrentMainosTab, userAds }) => {
  const filterTulossa = (ads) => {
    let temp = [];
    let datenow = Date.now();
    for (let i = 0; i < ads.length; i++) {
      let start = Math.round(
        new Date(`${ads[i].start_date} ${ads[i].start_time}`).getTime()
      );
      if (start > datenow) {
        temp.push(ads[i].ad_id);
      }
    }
    return temp;
  };

  const filterNakyvilla = (ads) => {
    let temp = [];
    let datenow = Date.now();
    for (let i = 0; i < ads.length; i++) {
      let start = Math.round(
        new Date(`${ads[i].start_date} ${ads[i].start_time}`).getTime()
      );
      let end = Math.round(
        new Date(`${ads[i].end_date} ${ads[i].end_time}`).getTime()
      );
      if (start < datenow && end > datenow) {
        temp.push(ads[i].ad_id);
      }
    }
    return temp.length;
  };

  return (
    <div className="mainokseni-con">
      <div className="mainokseni-container">
        <div className="mainokseni-grp">
          <Link
            to="/mainokset"
            onClick={() => setCurrentMainosTab(1)}
            className="mainokseni-btn"
          >
            <p>NÄKYVILLÄ</p>
          </Link>
          <div className="mainokseni-info">
            <p>{filterNakyvilla(userAds)}kpl</p>
          </div>
        </div>
        <div className="mainokseni-grp">
          <Link
            to="/mainokset"
            onClick={() => setCurrentMainosTab(2)}
            className="mainokseni-btn"
          >
            <p>TULEVAT</p>
          </Link>
          <div className="mainokseni-info">
            <p>{filterTulossa(userAds).length}kpl</p>
          </div>
        </div>
        <div className="mainokseni-grp">
          <Link
            to="/uusimainos"
            id="mainokseni-uusimainosbtn"
            className="mainokseni-btn"
          >
            <p>UUSIMAINOS</p>
          </Link>
          <div className="mainokseni-info">
            <p>alkaen 9,95€/3pv</p>
          </div>
        </div>
      </div>
      <Link
        to="/mainokset"
        onClick={() => setCurrentMainosTab(3)}
        className="mainokseni-arkisto-btn"
      >
        <p>Arkisto</p>
      </Link>
    </div>
  );
};
export default Mainokseni;
