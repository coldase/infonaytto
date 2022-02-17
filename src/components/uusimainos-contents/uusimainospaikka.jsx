import "./uusimainospaikka.css";
import UusimainospaikkaCard from "./uusimainospaikkacard";

const UusiMainosPaikka = ({
  mybuttons,
  setmybuttons,
  setisshowmap,
  mainospaikat,
  allscreens,
}) => {
  return (
    <>
      <div className="uusimainospaikka-container">
        <p>Haluan että mainostani näytetään</p>
        <h5>Valitse vähintään yksi kategoria, joka kuvaa mainostasi</h5>
        <div className="uusimainos-paikka-card-container">
          {mainospaikat.map((item) => (
            <UusimainospaikkaCard
              allscreens={allscreens}
              key={item}
              mybuttons={mybuttons}
              item={item}
              setmybuttons={setmybuttons}
            />
          ))}
        </div>
        <div className="uusimainos-mapbtn-container">
          {/* <div onClick={() => setisshowmap(true)} className="uusimainos-mapbtn">
            <p>Näytä alueet kartalla</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default UusiMainosPaikka;
