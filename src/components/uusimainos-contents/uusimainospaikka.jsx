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
        <h1>Haluan että mainostani näytetään</h1>
        <h2>Valitse vähintään yksi alue</h2>
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
              <p>Näyttöjä</p>
              <p>12</p>
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
