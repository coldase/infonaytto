import { Link } from "react-router-dom";
import "./mynav.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdShoppingCart, MdCollections } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import { FiLogOut, FiLogIn } from "react-icons/fi";
import { useState } from "react";

const MyNav = ({
  logout,
  isLoggedIn,
  setIsLoginPopup,
  setLoginTab,
  setisshowmap,
}) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      onClick={() => {
        setisshowmap(false);
        setNavOpen(!navOpen);
      }}
      onMouseEnter={() => setNavOpen(true)}
      onMouseLeave={() => setNavOpen(false)}
    >
      {navOpen ? (
        <div className="mynav">
          <div className="navheader">
            <p>infoNÄYTÖT</p>
          </div>

          <Link to={"/uusimainos"}>
            <div className="navlink">
              <MdShoppingCart style={{ alignSelf: "center" }} size={50} />
              <p>Uusi mainos</p>
            </div>
          </Link>
          {isLoggedIn ? (
            <Link to="/mainokset">
              <div className="navlink">
                <MdCollections style={{ alignSelf: "center" }} size={50} />
                <p>Mainokseni</p>
              </div>
            </Link>
          ) : null}
          <Link to="/esittely">
            <div className="navlink">
              <AiFillInfoCircle style={{ alignSelf: "center" }} size={50} />
              <p>Esittely</p>
            </div>
          </Link>
          <div className="navseparator"></div>
          {isLoggedIn ? (
            <Link to="/profiili">
              <div className="navlink">
                <FaUserCircle style={{ alignSelf: "center" }} size={50} />
                <p>Profiili</p>
              </div>
            </Link>
          ) : null}
          {isLoggedIn ? (
            <div
              className="navlink"
              onClick={navOpen ? () => handleLogout() : null}
            >
              <FiLogOut style={{ alignSelf: "center" }} size={50} />
              <p>Kirjaudu ulos</p>
            </div>
          ) : (
            <div
              className="navlink"
              onClick={
                navOpen
                  ? () => {
                      setIsLoginPopup(true);
                      setLoginTab(true);
                    }
                  : null
              }
            >
              <FiLogIn style={{ alignSelf: "center" }} size={50} />
              <p>Kirjaudu sisään</p>
            </div>
          )}
        </div>
      ) : (
        <div className="mynav">
          <div className="navheader">
            <p>iN</p>
          </div>
          <div className="navlink">
            <MdShoppingCart style={{ alignSelf: "center" }} size={50} />
          </div>
          {isLoggedIn ? (
            <div className="navlink">
              <MdCollections style={{ alignSelf: "center" }} size={50} />
            </div>
          ) : null}
          <div className="navlink">
            <AiFillInfoCircle style={{ alignSelf: "center" }} size={50} />
          </div>
          <div className="navseparator"></div>
          {isLoggedIn ? (
            <div className="navlink">
              <FaUserCircle style={{ alignSelf: "center" }} size={50} />
            </div>
          ) : null}

          {isLoggedIn ? (
            <div className="navlink" onClick={navOpen ? handleLogout : null}>
              <FiLogOut style={{ alignSelf: "center" }} size={50} />
            </div>
          ) : (
            <div
              className="navlink"
              onClick={
                navOpen
                  ? () => {
                      setLoginTab(true);
                      setIsLoginPopup(true);
                    }
                  : null
              }
            >
              <FiLogIn style={{ alignSelf: "center" }} size={50} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyNav;
