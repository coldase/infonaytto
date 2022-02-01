import "./esittely.css";
import { Link } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
import Footer from "../../components/footer/footer";
import MyMapContainer from "../../components/map/map-container";

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
      <div
        onClick={isshowmap ? () => setisshowmap(false) : null}
        className="esittely-container"
      >
        <div className="esittely-content">
          <h1 className="esittely-header">ESITTELY</h1>
          <p className="esittely-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator
          </p>
          <p className="esittely-text">
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable. The generated Lorem Ipsum is therefore always free
            from repetition, injected humour, or non-characteristic words etc
            contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          <p className="esittely-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia.
          </p>
          <div
            onClick={() => setisshowmap(true)}
            className="katsonaytot-kartalta-btn"
          >
            <p>Katso näytöt kartalta</p>
          </div>
        </div>
        <div className="esittely-content2">
          <h1 className="esittely-header2">OTSIKKO</h1>
          <p className="esittely-text2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text
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
