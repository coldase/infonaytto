import "./uusimainospaikkacard.css";
import { useState } from "react";

const UusimainospaikkaCard = ({
  mybuttons,
  item,
  setmybuttons,
  allscreens,
}) => {
  const [shownaytot, setshownaytot] = useState(false);
  const handleCardClick = (item) => {
    if (mybuttons.includes(item)) {
      let filteredArray = mybuttons.filter((x) => x !== item);
      setmybuttons(filteredArray);
    } else {
      setmybuttons([...mybuttons, item]);
    }
  };

  const filterScreens = (btntype, allscreens) => {
    const res = [];
    allscreens.forEach((screen) => {
      const types = screen.screen_type.split(",");
      if (types.includes(btntype)) {
        res.push(screen.name);
      }
    });
    return res;
  };
  return (
    <div
      onMouseEnter={() => setshownaytot(true)}
      onMouseLeave={() => setshownaytot(false)}
      key={item}
      onClick={() => handleCardClick(item)}
      className={`uusimainos-paikka-card ${
        mybuttons.includes(item) ? "selected" : null
      }`}
    >
      <p>{item}</p>

      {shownaytot && allscreens.length > 0 ? (
        <div
          className="shownaytot"
          style={
            filterScreens(item, allscreens).length > 0
              ? { borderTop: "2px solid white", paddingBottom: 10 }
              : null
          }
        >
          {filterScreens(item, allscreens).map((it) => (
            <p key={it} className="shownaytot-item">
              {it}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default UusimainospaikkaCard;
