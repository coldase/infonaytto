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
            <h1 className="esittely-header">ESITTELY</h1>
            <p className="esittely-text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text All the Lorem Ipsum generators on the
              Internet tend to repeat predefined chunks as necessary, making
              this the first true generator
            </p>
            <p className="esittely-text">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc contrary to popular belief, Lorem
              Ipsum is not simply random text.
            </p>
            <p className="esittely-text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia.
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
            <h1 className="esittely-header2">OTSIKKO</h1>
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
            )}
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
            <div className="kirjautunut-esittely-infocard">
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
            </div>
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
