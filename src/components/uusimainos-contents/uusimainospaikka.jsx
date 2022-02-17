import "./uusimainospaikka.css";

const UusiMainosPaikka = ({
  mybuttons,
  setmybuttons,
  setisshowmap,
  mainospaikat,
}) => {
  const handleCardClick = (item) => {
    if (mybuttons.includes(item)) {
      let filteredArray = mybuttons.filter((x) => x !== item);
      setmybuttons(filteredArray);
    } else {
      setmybuttons([...mybuttons, item]);
    }
  };

  return (
    <>
      <div className="uusimainospaikka-container">
        <p>Haluan että mainostani näytetään</p>
        <h5>Valitse vähintään yksi kategoria, joka kuvaa mainostasi</h5>
        <div className="uusimainos-paikka-card-container">
          {mainospaikat.map((item) => (
            <div
              key={item}
              onClick={() => handleCardClick(item)}
              className={`uusimainos-paikka-card ${
                mybuttons.includes(item) ? "selected" : null
              }`}
            >
              <p>{item}</p>
              {/* <p>Näyttöjä</p>
              <p>12</p> */}
            </div>
          ))}
        </div>
        <div className="uusimainos-mapbtn-container">
          <div onClick={() => setisshowmap(true)} className="uusimainos-mapbtn">
            <p>Näytä alueet kartalla</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UusiMainosPaikka;
