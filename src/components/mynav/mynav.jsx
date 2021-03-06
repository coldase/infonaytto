import { Link } from "react-router-dom";
import "./mynav.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdShoppingCart, MdCollections } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      onClick={() => {
        setisshowmap(false);
        if (window.innerWidth > 800) {
          setNavOpen(!navOpen);
        }
      }}
      onMouseEnter={() => {
        if (window.innerWidth > 800) {
          setNavOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (window.innerWidth > 800) {
          setNavOpen(false);
        }
      }}
    >
      {navOpen ? (
        <div className="mynav">
          <div className="navheader">
            <p>infoNÄYTÖT</p>
          </div>

          <Link to={"/uusimainos"}>
            <div
              className="navlink"
              style={
                location.pathname === "/uusimainos" ? { opacity: 1 } : null
              }
            >
              <MdShoppingCart style={{ alignSelf: "center" }} size={50} />
              <p>Uusi mainos</p>
            </div>
          </Link>
          {isLoggedIn ? (
            <Link to="/mainokset">
              <div
                className="navlink"
                style={
                  location.pathname === "/mainokset" ? { opacity: 1 } : null
                }
              >
                <MdCollections style={{ alignSelf: "center" }} size={50} />
                <p>Mainokseni</p>
              </div>
            </Link>
          ) : null}
          <Link to="/esittely">
            <div
              className="navlink"
              style={location.pathname === "/esittely" ? { opacity: 1 } : null}
            >
              <AiFillInfoCircle style={{ alignSelf: "center" }} size={50} />
              <p>Esittely</p>
            </div>
          </Link>
          <div className="navseparator"></div>
          {isLoggedIn ? (
            <Link to="/profiili">
              <div
                className="navlink"
                style={
                  location.pathname === "/profiili" ? { opacity: 1 } : null
                }
              >
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
          <Link
            to="/uusimainos"
            className="navlink"
            style={location.pathname === "/uusimainos" ? { opacity: 1 } : null}
          >
            <MdShoppingCart style={{ alignSelf: "center" }} size={50} />
          </Link>{" "}
          {isLoggedIn ? (
            <Link
              to="/mainokset"
              className="navlink"
              style={location.pathname === "/mainokset" ? { opacity: 1 } : null}
            >
              <MdCollections style={{ alignSelf: "center" }} size={50} />
            </Link>
          ) : null}
          <Link
            to="/esittely"
            className="navlink"
            style={location.pathname === "/esittely" ? { opacity: 1 } : null}
          >
            <AiFillInfoCircle style={{ alignSelf: "center" }} size={50} />
          </Link>
          <div className="navseparator"></div>
          {isLoggedIn ? (
            <Link
              to="/profiili"
              className="navlink"
              style={location.pathname === "/profiili" ? { opacity: 1 } : null}
            >
              <FaUserCircle style={{ alignSelf: "center" }} size={50} />
            </Link>
          ) : null}
          {isLoggedIn ? (
            <div
              className="navlink"
              onClick={navOpen || window.innerWidth < 800 ? handleLogout : null}
            >
              <FiLogOut style={{ alignSelf: "center" }} size={50} />
            </div>
          ) : (
            <div
              className="navlink"
              onClick={
                navOpen || window.innerWidth < 800
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
