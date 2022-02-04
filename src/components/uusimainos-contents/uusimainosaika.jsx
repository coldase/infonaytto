import "./uusimainosaika.css";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";

const UusiMainosAika = ({ selectedDayRange, setSelectedDayRange }) => {
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
      <div className="paivamaarat-headers">
        {selectedDayRange.from === null && selectedDayRange.to === null ? (
          <p>Valitse ajankohta</p>
        ) : (
          <p>Mainosta näytetään</p>
        )}
      </div>

      <div className="paivamaarat">
        {selectedDayRange.from !== null && selectedDayRange.to !== null ? (
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
        ) : null}
      </div>
      <div className="mainosaikabtn">
        <DatePicker
          renderInput={renderCustomInput}
          calendarClassName="responsive-calendar"
          value={selectedDayRange}
          onChange={setSelectedDayRange}
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
