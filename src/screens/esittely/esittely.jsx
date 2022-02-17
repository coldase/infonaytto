import "./esittely.css";
import { Link } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
import Footer from "../../components/footer/footer";
import MyMapContainer from "../../components/map/map-container";

import KukeLogo from "../../assets/images/kukelogo.png";
import LightLogo from "../../assets/images/lightlogo.png";
import WallLogo from "../../assets/images/walllogo.png";

const Esittely = ({
  isLoggedIn,
  logout,
  isshowmap,
  setisshowmap,
  mainospaikat,
  setIsLoginPopup,
  setLoginTab,
}) => {
  return (
    <>
      {!isLoggedIn ? (
        <div
          onClick={isshowmap ? () => setisshowmap(false) : null}
          className="esittely-container"
        >
          <div className="esittely-content">
            <h1 className="esittely-header">LISÄTIETOJA</h1>
            <p className="esittely-text">
              Infonäytöt ovat etäohjattujen näyttöjen avulla toteutettua
              sähköistä viestintää. Näyttöjä voidaan asentaa erilaisiin
              ympäristöihin tarpeeseen ja kohdeyleisöön sopiviksi. Ne tuovat
              tiloihin ketterästi muunneltavaa opastusta sekä virikettä ja
              pelillisyyttä kuvan ja tekstin muodossa. Sisältöjen luonti ja
              hallinta on helppoa ja tavoitat kohderyhmäsi juuri sillä
              sekunnilla kuin haluat. Sillä sisältöjen ajoittaminen ennakkoon
              helpottaa jatkuvaa ja oikea-aikaista sisällön jakamista, joka on
              yhtä helppoa kuin kalenterin selailu.
            </p>
            <p className="esittely-text">
              Sisältöjen luonti ja hallinta on helppoa ja tavoitat kohderyhmäsi
              juuri sillä sekunnilla kuin haluat. Sillä sisältöjen ajoittaminen
              ennakkoon helpottaa jatkuvaa ja oikea-aikaista sisällön jakamista,
              joka on yhtä helppoa kuin kalenterin selailu.
            </p>
            <p className="esittely-text">
              Kaikki sisältö ei toimi kaikille. Tästä syystä voit valita
              näyttökohtaisesti missä sisältösi näkyy jotta juuri
              oikeakohdeyleisö saavutetaan
            </p>
            <p className="esittely-text">
              Voit jakaa sisältöä olemassa oleviin näyttöihin tai lisätä
              näyttöjä lisää. Omia infonäyttöjä voit lisätä helposti. Tähän
              käyvät jo olemassa olevan näyttösi joissa on selain ja näin ohjata
              siihen sisältöä. Tällöin sinun tulee valita mitä mainoksia
              kohdeyleisösi haluaa nähdä vai haluatko että näytöt ovat vain
              omassa käytössäsi.
            </p>
            {!isLoggedIn ? (
              <div
                onClick={() => {
                  setIsLoginPopup(true);
                  setLoginTab(true);
                }}
                className="katsonaytot-kartalta-btn"
              >
                <p>Kirjaudu sisään</p>
              </div>
            ) : null}
          </div>
          <div className="esittely-content2">
            {/* <h1 className="esittely-header2">OTSIKKO</h1>
            <p className="esittely-text2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text
            </p>
            {isLoggedIn ? (
              <Link className="aloitatasta-btn" to="/profiili">
                <p>Aloita tästä</p>
              </Link>
            ) : (
              <Link className="aloitatasta-btn" to="/uusimainos">
                <p>Aloita tästä</p>
              </Link>
            )} */}
          </div>
          <Footer />
        </div>
      ) : (
        <div className="kirjautunut-esittely-container">
          <h1 className="kirjautunut-esittely-header">uutta palvelussamme</h1>
          <div className="kirjautunut-esittely-infocard-container">
            <div className="kirjautunut-esittely-infocard">
              <div className="kirjautunut-esittely-infocard-image-container">
                <img src={KukeLogo} alt="kukelogo" />
              </div>
              <div className="kirjautunut-esittely-infocard-text-container">
                <p>27.1.</p>
                <p>
                  Saimme uuden yhteistyökumppanin! Säästät aikaasi antamalla
                  Kuken suunnitella mainoksesi.
                </p>
                <p>hei@kuke.fi</p>
              </div>
            </div>
            <div className="kirjautunut-esittely-infocard">
              <div className="kirjautunut-esittely-infocard-image-container">
                <img src={LightLogo} alt="lightbulb" />
              </div>
              <div className="kirjautunut-esittely-infocard-text-container">
                <p>27.1.</p>
                <p>
                  Olemme päivittäneet sivujemme ulkoasua ja lisänneet apuja oman
                  mainoksen tekemiseen.
                </p>
                <p>
                  Muistutamme että olemme edelleen kehitysvaiheessa ja otamme
                  mielellämme palautettanne vastaan!
                </p>
              </div>
            </div>
            {/* <div className="kirjautunut-esittely-infocard">
              <div className="kirjautunut-esittely-infocard-image-container">
                <img src={WallLogo} alt="wall" />
              </div>
              <div className="kirjautunut-esittely-infocard-text-container">
                <p>HINNASTO</p>
                <div className="kirjautunut-esittely-infocard-text-hinnat">
                  <p>VIIKKO 0,00€</p>
                  <p>KUUKAUSI 0,00€</p>
                  <p>3 KUUKAUTTA 0,00€</p>
                  <p>6 KUUKAUTTA 0,00€</p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="kirjautunut-esittely-btn-container">
            <Link to="/profiili" className="kirjautunut-esittely-btn">
              <p>PROFIILI</p>
            </Link>
            <Link to="/uusimainos" className="kirjautunut-esittely-btn">
              <p>UUSI MAINOS</p>
            </Link>
          </div>
        </div>
      )}
      {isshowmap ? (
        <MyMapContainer
          setisshowmap={setisshowmap}
          mainospaikat={mainospaikat}
        />
      ) : null}
      <MyNav
        setLoginTab={setLoginTab}
        isLoggedIn={isLoggedIn}
        logout={logout}
        setIsLoginPopup={setIsLoginPopup}
        setisshowmap={setisshowmap}
      />
    </>
  );
};

export default Esittely;
