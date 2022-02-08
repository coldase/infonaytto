import "./uusimainosaika.css";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import Calendar from "@hassanmojab/react-modern-calendar-datepicker";

const UusiMainosAika = ({
  selectedDayRange,
  selectedPaketti,
  handleOnChange,
  setSelectedPaketti,
}) => {
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder={"Valitse päivät"}
      className="my-custom-input-class" // a styling class
    />
  );

  return (
    <div className="uusimainosaika-container">
      {/* <div className="paivamaarat">
        {selectedDayRange.to !== null ? (
          <>
            <p>
              {selectedDayRange.from.day}.{selectedDayRange.from.month}.
              {selectedDayRange.from.year}
            </p>
            <p> - </p>
            <p>
              {selectedDayRange.to.day}.{selectedDayRange.to.month}.
              {selectedDayRange.to.year}
            </p>
          </>
        ) : (
          <p>Ei valittua aikaa</p>
        )}
      </div> */}
      <div className="paivamaarat-headers">
        <p>1. Valitse paketti:</p>
      </div>
      <div className="paivamaara-paketti-container">
        <div
          onClick={() => setSelectedPaketti(0)}
          className={
            selectedPaketti === 0
              ? "selected-paketti"
              : "paivamaara-paketti-card"
          }
        >
          <p>Valitse vapaasti</p>
          <p>0.00€</p>
        </div>
        <div
          onClick={() => setSelectedPaketti(1)}
          className={
            selectedPaketti === 1
              ? "selected-paketti"
              : "paivamaara-paketti-card"
          }
        >
          <p>1 Viikko</p>
          <p>0.00€</p>
        </div>
        <div
          onClick={() => setSelectedPaketti(2)}
          className={
            selectedPaketti === 2
              ? "selected-paketti"
              : "paivamaara-paketti-card"
          }
        >
          <p>1 Kuukausi</p>
          <p>0.00€</p>
        </div>
        <div
          onClick={() => setSelectedPaketti(3)}
          className={
            selectedPaketti === 3
              ? "selected-paketti"
              : "paivamaara-paketti-card"
          }
        >
          <p>3 kuukautta</p>
          <p>0.00€</p>
        </div>
      </div>

      <div className="paivamaarat-headers">
        {selectedPaketti === 0 ? (
          <p>2. Valitse ajankohta:</p>
        ) : (
          <p>2. Valise aloituspäivä:</p>
        )}
      </div>

      <div className="mainosaikabtn">
        <Calendar
          renderInput={renderCustomInput}
          calendarClassName="responsive-calendar"
          value={selectedDayRange}
          onChange={(val) => handleOnChange(val)}
          inputPlaceholder={" "}
          shouldHighlightWeekends
          colorPrimary="#0fbcf9"
          colorPrimaryLight="rgba(75, 207, 250, 0.4)"
        />
      </div>
    </div>
  );
};

export default UusiMainosAika;
