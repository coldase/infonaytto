import "./omatmainoksetcard.css";
import axios from "axios";
import { IoMdTrash } from "react-icons/io";

const OmatMainoksetCard = ({ item, update }) => {
  const alueet = item.ad_type.split(",");
  const formatDate = (date) => {
    let l = date.split("-");
    return `${l[2]}.${l[1]}.${l[0]}`;
  };

  const deleteAd = async (adid) => {
    const formdata = new FormData();
    formdata.append("adid", adid);
    await axios({
      method: "POST",
      url: process.env.REACT_APP_BACK_URL + "api/remove_ad.php",
      data: formdata,
    })
      .then((res) => {
        if (res.data === "success") {
          update();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDelBtn = (id) => {
    let choice = window.confirm("Haluatko varmasti poistaa mainoksen?");
    if (choice) {
      deleteAd(id);
    }
  };

  return (
    <div key={item.ad_id} className="omatmainokset-card">
      <div className="omatmainokset-card-image-container">
        <img alt={item.name} src={`data:image/png;base64, ${item.image}`} />
      </div>
      <div
        // onClick={() => deleteAd(item.ad_id)}
        className="omatmainokset-card-info-container"
      >
        <IoMdTrash
          className="omatmainokset-card-trash-icon"
          onClick={() => handleDelBtn(item.ad_id)}
        />
        <p className="omatmainokset-card-name">{item.name}</p>
        <p className="omatmainokset-card-title">Ollut näkyvissä</p>
        <p className="omatmainokset-card-date">
          {formatDate(item.start_date)} - {formatDate(item.end_date)}
        </p>
        <p className="omatmainokset-card-title">Alueet</p>
        <div className="omatmainokset-card-alueet-container">
          {alueet.map((alue) => (
            <p key={alue} className="omatmainokset-card-alueet">
              {alue}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OmatMainoksetCard;
