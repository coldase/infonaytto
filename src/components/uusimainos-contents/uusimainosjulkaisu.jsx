import "./uusimainosjulkaisu.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UusiMainosJulkaisu = ({
  myimg,
  mybuttons,
  selectedDayRange,
  clearInputs,
  userid,
}) => {
  const navigate = useNavigate();
  const handleSendData = async (image, alueet, pvm, id) => {
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
    formdata.append("end_time", "00:00:00");

    await axios({
      method: "POST",
      url: process.env.REACT_APP_BACK_URL + "api/add_ad.php",
      data: formdata,
    })
      .then((res) => {
        if (res.data === "success") {
          clearInputs();
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
        <div className="uusimainosjulkaisu-image-container">
          {myimg ? (
            <img
              alt="julkaisu-preview"
              className="julkaisu-kuva-preview"
              src={URL.createObjectURL(myimg)}
            />
          ) : null}
        </div>

        <div className="uusimainosjulkaisu-info-container">
          <h2>Mainosta näytetään</h2>
          {selectedDayRange.from !== null && selectedDayRange.to !== null ? (
            <div className="uusimainosjulkaisu-paivamaara">
              <p>
                {selectedDayRange.from.day}.{selectedDayRange.from.month}.
                {selectedDayRange.from.year}
              </p>
              <p>-</p>
              <p>
                {selectedDayRange.to.day}.{selectedDayRange.to.month}.
                {selectedDayRange.to.year}
              </p>
            </div>
          ) : null}
          <h2>Paikassa</h2>
          <div className="uusimainosjulkaisu-paikat-container">
            {mybuttons
              ? mybuttons.map((item) => {
                  return <p key={item}>{item}</p>;
                })
              : null}
          </div>
        </div>
      </div>
      <button
        onClick={() =>
          handleSendData(myimg, mybuttons, selectedDayRange, userid)
        }
        disabled={
          selectedDayRange.from === null ||
          selectedDayRange.to === null ||
          mybuttons.length === 0 ||
          myimg === null
            ? true
            : false
        }
        className="uusimainosjulkaisu-julkaise-btn"
        style={
          selectedDayRange.from === null ||
          selectedDayRange.to === null ||
          mybuttons.length === 0 ||
          myimg === null
            ? { opacity: 0.5 }
            : null
        }
      >
        <p>Julkaise mainos</p>
      </button>
    </>
  );
};

export default UusiMainosJulkaisu;
