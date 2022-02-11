import "./mainoksenmuokkaus.css";
import Calendar from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { useState, useEffect } from "react";
const MainoksenMuokkaus = ({
  close,
  item,
  mainospaikat,
  update,
  setshowpoistamainospopup,
  canDelete,
}) => {
  const [selectedPaketti, setSelectedPaketti] = useState(0);
  const [selectedPaikat, setSelectedPaikat] = useState([]);
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  useEffect(() => {
    setSelectedDayRange({
      from: null,
      to: null,
    });
  }, [selectedPaketti]);

  useEffect(() => {
    setSelectedPaikat(item.ad_type.split(","));
  }, []);

  const handleSave = () => {
    close();
    update();
  };

  const handleOnChange = (val) => {
    let temp = null;
    if (selectedPaketti === 0) {
      temp = val;
    } else if (selectedPaketti === 1) {
      val.to = { ...val.from, month: val.from.month + 1 };
      temp = val;
    } else if (selectedPaketti === 2) {
      val.to = { ...val.from, month: val.from.month + 6 };
      temp = val;
    } else if (selectedPaketti === 3) {
      val.to = { ...val.from, year: val.from.year + 1000 };
      temp = val;
    }
    setSelectedDayRange(temp);
  };

  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder={selectedDayRange.to !== null ? "Vaihda" : "Valitse"}
      className="mainoksenmuokkaus-my-custom-input-class" // a styling class
    />
  );
  return (
    <div className="mainoksenmuokkaus-container">
      <p className="mainoksenmuokkau-nimi">{item.name}</p>
      {/* <div className="mainoksenmuokkaus-image-container">
        <img src={`data:image/png;base64, ${item.image}`} alt={item.name} />
      </div> */}

      <p className="mainoksenmuokkaus-header">Kategoriat</p>
      <div className="mainoksenmuokkaus-paketti-container">
        {mainospaikat.map((alue) => {
          return (
            <div
              onClick={() => {
                if (!selectedPaikat.includes(alue)) {
                  setSelectedPaikat([...selectedPaikat, alue]);
                } else {
                  setSelectedPaikat(
                    selectedPaikat.filter((item) => item !== alue)
                  );
                }
              }}
              className={
                selectedPaikat.includes(alue)
                  ? "mainoksenmuokkaus-selected-paketti"
                  : "mainoksenmuokkaus-paketti-card"
              }
              key={alue}
            >
              <p>{alue}</p>
            </div>
          );
        })}
      </div>
      <p className="mainoksenmuokkaus-header">Uusi aika</p>
      <div className="mainoksenmuokkaus-paketti-container">
        <div
          onClick={() => setSelectedPaketti(0)}
          className={
            selectedPaketti === 0
              ? "mainoksenmuokkaus-selected-paketti"
              : "mainoksenmuokkaus-paketti-card"
          }
        >
          <p>Valitse vapaasti</p>
        </div>
        <div
          onClick={() => setSelectedPaketti(1)}
          className={
            selectedPaketti === 1
              ? "mainoksenmuokkaus-selected-paketti"
              : "mainoksenmuokkaus-paketti-card"
          }
        >
          <p>1 Kuukausi</p>
        </div>
        <div
          onClick={() => setSelectedPaketti(2)}
          className={
            selectedPaketti === 2
              ? "mainoksenmuokkaus-selected-paketti"
              : "mainoksenmuokkaus-paketti-card"
          }
        >
          <p>6 Kuukautta</p>
        </div>
        <div
          onClick={() => setSelectedPaketti(3)}
          className={
            selectedPaketti === 3
              ? "mainoksenmuokkaus-selected-paketti"
              : "mainoksenmuokkaus-paketti-card"
          }
        >
          <p>Pysyvä</p>
        </div>
      </div>
      {selectedDayRange.to !== null && selectedDayRange.from !== null ? (
        <div className="mainoksenmuokkaus-ajat-cont">
          <p>
            {selectedDayRange.from.day < 10
              ? "0" + selectedDayRange.from.day
              : selectedDayRange.from.day}
            .
            {selectedDayRange.from.month < 10
              ? "0" + selectedDayRange.from.month
              : selectedDayRange.from.month}
            .{selectedDayRange.from.year}
          </p>
          {selectedDayRange.to.year < 3000 ? (
            <>
              <p> - </p>
              <p>
                {selectedDayRange.to.day < 10
                  ? "0" + selectedDayRange.to.day
                  : selectedDayRange.to.day}
                .
                {selectedDayRange.to.month < 10
                  ? "0" + selectedDayRange.to.month
                  : selectedDayRange.to.month}
                .{selectedDayRange.to.year}
              </p>
            </>
          ) : null}
        </div>
      ) : null}
      <div className="mainoksenmuokkaus-mainosaikabtn">
        <Calendar
          calendarPopperPosition={"top"}
          renderInput={renderCustomInput}
          calendarClassName="mainoksenmuokkaus-responsive-calendar"
          value={selectedDayRange}
          onChange={(val) => handleOnChange(val)}
          inputPlaceholder={" "}
          shouldHighlightWeekends
          colorPrimary="#0fbcf9"
          colorPrimaryLight="rgba(75, 207, 250, 0.4)"
        />
      </div>
      <div className="mainoksenmuokkaus-tallenna-btn-container">
        <div
          onClick={() => handleSave()}
          className="mainoksenmuokkaus-tallenna-btn"
        >
          <p>Tallenna</p>
        </div>
        {/* {canDelete ? ( */}
        <div
          onClick={() => setshowpoistamainospopup(true)}
          className="mainoksenmuokkaus-poista-btn"
        >
          <p>Poista</p>
        </div>
        {/* ) : null} */}
      </div>
    </div>
  );
};

export default MainoksenMuokkaus;
