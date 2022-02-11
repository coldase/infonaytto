import "./uusimainosaika.css";
import Calendar from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

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
      placeholder={selectedDayRange.to !== null ? "Vaihda" : "Valitse"}
      className="my-custom-input-class" // a styling class
    />
  );

  return (
    <div className="uusimainosaika-container">
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
        </div>

        <div
          onClick={() => setSelectedPaketti(1)}
          className={
            selectedPaketti === 1
              ? "selected-paketti"
              : "paivamaara-paketti-card"
          }
        >
          <p>1 Kuukausi</p>
        </div>
        <div
          onClick={() => setSelectedPaketti(2)}
          className={
            selectedPaketti === 2
              ? "selected-paketti"
              : "paivamaara-paketti-card"
          }
        >
          <p>6 kuukautta</p>
        </div>

        <div
          onClick={() => setSelectedPaketti(3)}
          className={
            selectedPaketti === 3
              ? "selected-paketti"
              : "paivamaara-paketti-card"
          }
        >
          <p>Pysyvä</p>
        </div>
      </div>

      <div className="paivamaarat-headers">
        {selectedDayRange.to == null || selectedDayRange.from === null ? (
          <>
            {selectedPaketti === 0 ? (
              <p>2. Valitse ajankohta:</p>
            ) : (
              <p>2. Valitse aloituspäivä:</p>
            )}
          </>
        ) : (
          <>
            {selectedPaketti !== 3 ? (
              <p>2. Mainoksen ajankohta</p>
            ) : (
              <p>2. Mainoksen aloitus päivämäärä</p>
            )}
          </>
        )}
      </div>
      <div className="paivamaarat">
        {selectedDayRange.to !== null && selectedDayRange.from !== null ? (
          <div className="ajat-cont">
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
        ) : (
          <div className="ajat-cont"></div>
        )}
      </div>
      <div className="mainosaikabtn">
        <Calendar
          calendarPopperPosition={"top"}
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
