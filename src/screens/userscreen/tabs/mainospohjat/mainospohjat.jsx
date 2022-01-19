import "./mainospohjat.css";
import { useRef, useState } from "react";
import axios from "axios";

const MainosPohjat = () => {
  const inputFile = useRef(null);
  const [myimg, setmyimg] = useState(null);

  const handle_btn = () => {
    inputFile.current.click();
  };

  const handle_send = async (img) => {
    const form = new FormData();
    form.append("userid", sessionStorage.getItem("userid"));
    form.append("ad_type", "1React");
    form.append("image", img);
    await axios({
      url: process.env.REACT_APP_BACK_URL + "/api/add_ad.php",
      method: "POST",
      data: form,
    })
      .then((res) => {
        console.log(res);
        setmyimg(null);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mainospohjat-container">
      <div className="mainospohjat-header">
        <h1>Mainospohjat</h1>
      </div>
      <div className="mainospohjat-content">
        <h2>Valitse valmis pohja</h2>
        <div className="template-card-container">
          <div className="template-card"></div>
          <div className="template-card"></div>
          <div className="template-card"></div>
          <div className="template-card"></div>
          <div className="template-card"></div>
          <div className="template-card"></div>
          <div className="template-card"></div>
        </div>
        <h2>Tai lisää omalla kuvalla</h2>
        <div className="luo-mainos-container">
          <div className="luomainosinputs">
            {myimg ? <p id="valittutext">Kuva valittu</p> : null}
            {!myimg ? (
              <div
                onClick={() => handle_btn()}
                className="lisaa-oma-mainos-btn"
              >
                <p>Valitse kuva</p>
              </div>
            ) : (
              <div
                onClick={() => handle_send(myimg)}
                className="lisaa-oma-mainos-btn"
                style={{ backgroundColor: "rgb(4,170,109)" }}
              >
                <p>Lähetä kuva</p>
              </div>
            )}

            <input
              ref={inputFile}
              type="file"
              onChange={(e) => setmyimg(e.target.files[0])}
              name="image"
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
      <div className="mainospohjat-footer">{/* <h1>footer</h1> */}</div>
    </div>
  );
};

export default MainosPohjat;
