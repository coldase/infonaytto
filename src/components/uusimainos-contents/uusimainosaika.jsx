import "./uusimainosaika.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { useState, useEffect, useRef } from "react";

const UusiMainosAika = ({ selectedDayRange, setSelectedDayRange }) => {
  const calendarRef = useRef(null);

  const test = () => {
    calendarRef.current.focus();
  };
  // useEffect(() => {
  //   console.log(selectedDayRange);
  // }, [selectedDayRange]);

  return (
    <div className="uusimainosaika-container">
      <div className="paivamaarat-headers">
        <h1>Valitse ajankohta</h1>
      </div>

      <DatePicker
        calendarClassName="responsive-calendar"
        value={selectedDayRange}
        onChange={setSelectedDayRange}
        inputPlaceholder={" "}
        shouldHighlightWeekends
        colorPrimary="#0fbcf9"
        colorPrimaryLight="rgba(75, 207, 250, 0.4)"
      />
      {selectedDayRange.from !== null && selectedDayRange.to !== null ? (
        <div className="paivamaarat">
          <h1>
            {selectedDayRange.from.day}.{selectedDayRange.from.month}.
            {selectedDayRange.from.year}
          </h1>
          <h1>-</h1>
          <h1>
            {selectedDayRange.to.day}.{selectedDayRange.to.month}.
            {selectedDayRange.to.year}
          </h1>
        </div>
      ) : null}
    </div>
  );
};

export default UusiMainosAika;
