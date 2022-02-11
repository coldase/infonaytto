import "./omatmainoksetcard.css";
import axios from "axios";
import { RiPencilFill } from "react-icons/ri";
import { useState } from "react";
import PoistaMainosPopup from "./poistamainospopup";
import MainoksenMuokkaus from "../mainoksenmuokkaus/mainoksenmuokkaus";

const OmatMainoksetCard = ({ item, update, mainospaikat, canDelete }) => {
  const [showpoistamainospopup, setshowpoistamainospopup] = useState(false);
  const [showmainoksenmuokkaus, setshowmainoksenmuokkaus] = useState(false);

  const alueet = item.ad_type.split(",");
  const formatDate = (date) => {
    let l = date.split("-");
    if (l[0] < 3000) {
      return `${l[2]}.${l[1]}.${l[0]}`;
    } else {
      return "Pysyvä";
    }
  };

  const openMuokkaus = () => {
    setshowmainoksenmuokkaus(true);
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
          setshowpoistamainospopup(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div key={item.ad_id} className="omatmainokset-card">
      <div className="omatmainokset-card-image-container">
        <img alt={item.name} src={`data:image/png;base64, ${item.image}`} />
      </div>
      <div className="omatmainokset-card-info-container">
        {/* <button onClick={() => openMuokkaus()}>Muokkaa</button> */}
        <RiPencilFill
          className="omatmainokset-card-trash-icon"
          onClick={() => openMuokkaus(true)}
        />
        <div className="omatmainokset-card-name-container">
          <p className="omatmainokset-card-name">{item.name}</p>
        </div>
        <p className="omatmainokset-card-title">Näkyvissä</p>
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
      {showpoistamainospopup ? (
        <PoistaMainosPopup
          handleDel={() => deleteAd(item.ad_id)}
          item={item}
          close={() => setshowpoistamainospopup(false)}
        />
      ) : null}

      {showmainoksenmuokkaus ? (
        <MainoksenMuokkaus
          canDelete={canDelete}
          setshowpoistamainospopup={setshowpoistamainospopup}
          deleteAd={() => deleteAd(item.ad_id)}
          update={update}
          mainospaikat={mainospaikat}
          item={item}
          close={() => setshowmainoksenmuokkaus(false)}
        />
      ) : null}
    </div>
  );
};

export default OmatMainoksetCard;
