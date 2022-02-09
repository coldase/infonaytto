import "./uusimainosjulkaisu.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UusiMainosJulkaisu = ({
  myimg,
  mybuttons,
  selectedDayRange,
  clearInputs,
  userid,
  setadname,
  adname,
  update,
  setCurrentStep,
}) => {
  const navigate = useNavigate();
  const handleSendData = async (image, alueet, pvm, id, myadname) => {
    let mystartdate = `${pvm.from.year}-${
      pvm.from.month < 10 ? "0" + pvm.from.month : pvm.from.month
    }-${pvm.from.day < 10 ? "0" + pvm.from.day : pvm.from.day}`;
    let myenddate = `${pvm.to.year}-${
      pvm.to.month < 10 ? "0" + pvm.to.month : pvm.to.month
    }-${pvm.to.day < 10 ? "0" + pvm.to.day : pvm.to.day}`;

    let tempalueet = alueet.join(",");

    const formdata = new FormData();
    formdata.append("userid", id);
    formdata.append("image", image);
    formdata.append("ad_type", tempalueet);
    formdata.append("start_date", mystartdate);
    formdata.append("end_date", myenddate);
    formdata.append("start_time", "00:00:00");
    formdata.append("end_time", "23:59:59");
    formdata.append("adname", myadname);

    await axios({
      method: "POST",
      url: process.env.REACT_APP_BACK_URL + "api/add_ad.php",
      data: formdata,
    })
      .then((res) => {
        if (res.data === "success") {
          clearInputs();
          update();
          navigate("/profiili", { replace: true });
        } else {
          alert("ERROR");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="uusimainosjulkaisu-container">
        <div className="adnameinput-container">
          <p>1. mainoksesi nimi</p>
          <input
            maxLength={18}
            onChange={(e) => setadname(e.target.value)}
            type="text"
            name="adname"
            placeholder="max 18 merkkiä"
          />
        </div>
        <div className="uusimainosjulkaisu-image-container">
          <p>2. Lataamasi kuva</p>
          {myimg ? (
            <img
              alt="julkaisu-preview"
              className="julkaisu-kuva-preview"
              src={URL.createObjectURL(myimg)}
            />
          ) : (
            <div className="julkaisu-kuva-puuttuu">
              <p>Kuva puuttuu!</p>
            </div>
          )}
          <div
            onClick={() => setCurrentStep(0)}
            className="julkaisu-vaihda-btn"
          >
            {myimg !== null && myimg !== undefined ? (
              <p>Vaihda</p>
            ) : (
              <p>Lisää</p>
            )}
          </div>
        </div>
        <div className="uusimainosjulkaisu-paikat-container">
          <p>3. Valitsemasi kategoriat</p>
          <div className="paikat-container">
            {mybuttons.length !== 0 ? (
              <>
                {mybuttons.map((cate) => (
                  <div key={cate} className="uusimainosjulkaisu-paikat-card">
                    <p>{cate}</p>
                  </div>
                ))}
              </>
            ) : (
              <p className="julkaisu-puttuu-text">Kategoriat puuttuu</p>
            )}
          </div>
          <div
            onClick={() => setCurrentStep(1)}
            className="julkaisu-vaihda-btn"
          >
            {mybuttons.length === 0 ? <p>Lisää</p> : <p>Vaihda</p>}
          </div>
        </div>
        <div className="uusimainosjulkaisu-ajat-container">
          <p>4. Julkaisu ajankohta</p>
          <div className="uusimainosjulkaisu-aika-ajat-container">
            {selectedDayRange.from ? (
              <div className="uusimainosjulkaisu-ajat-aika">
                <p>
                  {selectedDayRange.from.day}.{selectedDayRange.from.month}.
                  {selectedDayRange.from.year === selectedDayRange.to.year
                    ? ""
                    : selectedDayRange.from.year}{" "}
                  - {selectedDayRange.to.day}.{selectedDayRange.to.month}.
                  {selectedDayRange.to.year}
                </p>
              </div>
            ) : (
              <p className="julkaisu-puttuu-text">Ajankohta puuttuu</p>
            )}
          </div>
          <div
            onClick={() => setCurrentStep(2)}
            className="julkaisu-vaihda-btn"
          >
            {selectedDayRange.from ? <p>Vaihda</p> : <p>Lisää</p>}
          </div>
        </div>
        <div className="uusimainosjulkaisu-julkaise-container">
          <p>5. Tallenna ja julkaise</p>
          <button
            onClick={() =>
              handleSendData(myimg, mybuttons, selectedDayRange, userid, adname)
            }
            disabled={
              adname === null ||
              adname === "" ||
              selectedDayRange.from === null ||
              selectedDayRange.to === null ||
              mybuttons.length === 0 ||
              myimg === null
                ? true
                : false
            }
            className="uusimainosjulkaisu-julkaise-btn"
            style={
              adname === null ||
              adname === "" ||
              selectedDayRange.from === null ||
              selectedDayRange.to === null ||
              mybuttons.length === 0 ||
              myimg === null
                ? { opacity: 0.5 }
                : null
            }
          >
            <p>Julkaise</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default UusiMainosJulkaisu;
