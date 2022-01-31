import "./arkisto.css";
import OmatMainoksetCard from "../../../components/omatmainoksetcard/omatmainoksetcard";

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
      <div className="arkisto-card-container">
        {userAds
          ? filterAds(userAds).map((item) => {
              return (
                <OmatMainoksetCard
                  update={update}
                  key={item.ad_id}
                  item={item}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
export default Arkisto;
