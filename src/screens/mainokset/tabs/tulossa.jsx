import "./tulossa.css";
import OmatMainoksetCard from "../../../components/omatmainoksetcard/omatmainoksetcard";
import { Link } from "react-router-dom";

const Tulossa = ({ userAds, update, mainospaikat }) => {
  const filterAds = (ads) => {
    let temp = [];
    let datenow = Date.now();
    for (let i = 0; i < ads.length; i++) {
      let start = Math.round(
        new Date(`${ads[i].start_date} ${ads[i].start_time}`).getTime()
      );
      // let end = Math.round(
      //   new Date(`${ads[i].end_date} ${ads[i].end_time}`).getTime()
      // );
      if (start > datenow) {
        temp.push(ads[i]);
      }
    }
    return temp;
  };

  return (
    <div className="tulossa-container">
      {filterAds(userAds).length !== 0 ? (
        <div className="tulossa-card-container">
          {filterAds(userAds).map((item) => {
            return (
              <OmatMainoksetCard
                key={item.ad_id}
                item={item}
                update={update}
                mainospaikat={mainospaikat}
              />
            );
          })}
        </div>
      ) : (
        <div className="tulossa-empty-container">
          <h5>Sinulta ei ole uusia mainoksia luvassa!</h5>
          <Link to="/uusimainos" className="tulossa-empty-uusimainos-btn">
            <p>uusi mainos</p>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Tulossa;
