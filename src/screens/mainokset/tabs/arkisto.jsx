import "./arkisto.css";
import OmatMainoksetCard from "../../../components/omatmainoksetcard/omatmainoksetcard";
import { Link } from "react-router-dom";
const Arkisto = ({ userAds, update }) => {
  const filterAds = (ads) => {
    let temp = [];
    let datenow = Date.now();
    for (let i = 0; i < ads.length; i++) {
      // let start = Math.round(
      //   new Date(`${ads[i].start_date} ${ads[i].start_time}`).getTime()
      // );
      let end = Math.round(
        new Date(`${ads[i].end_date} ${ads[i].end_time}`).getTime()
      );
      if (end < datenow) {
        temp.push(ads[i]);
      }
    }
    return temp;
  };

  return (
    <div className="arkisto-container">
      {filterAds(userAds).length !== 0 ? (
        <div className="arkisto-card-container">
          {filterAds(userAds).map((item) => {
            return (
              <OmatMainoksetCard key={item.ad_id} item={item} update={update} />
            );
          })}
        </div>
      ) : (
        <div className="arkisto-empty-container">
          <h5>Arkistosi humisee tyhjyyttään!</h5>
          <Link to="/uusimainos" className="arkisto-empty-uusimainos-btn">
            <p>Aloita mainostus</p>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Arkisto;
