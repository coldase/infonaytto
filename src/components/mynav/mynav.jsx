import { Link, Navigate } from "react-router-dom";
import "./mynav.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";

const MyNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("userid");
    window.location.href = "/";
  };

  return (
    <div onClick={() => setNavOpen(!navOpen)}>
      {navOpen ? (
        <div className="mynav">
          <div className="navheader">
            <p>infoNÄYTÖT</p>
          </div>
          <Link to="/esittely">
            <div className="navlink">
              <AiFillInfoCircle style={{ alignSelf: "center" }} size={50} />
              <p>Esittely</p>
            </div>
          </Link>
          <Link to={"/mainokset"}>
            <div className="navlink">
              <MdShoppingCart style={{ alignSelf: "center" }} size={50} />
              <p>Jätä mainos</p>
            </div>
          </Link>
          <div className="navseparator"></div>
          <Link to="/profiili">
            <div className="navlink">
              <FaUserCircle style={{ alignSelf: "center" }} size={50} />
              <p>Profiili</p>
            </div>
          </Link>
          <div className="navlink" onClick={navOpen ? handleLogout : null}>
            <FiLogOut style={{ alignSelf: "center" }} size={50} />
            <p>Logout</p>
          </div>
        </div>
      ) : (
        <div className="mynav">
          <div className="navheader">
            <p>iN</p>
          </div>
          <div className="navlink">
            <AiFillInfoCircle style={{ alignSelf: "center" }} size={50} />
          </div>
          <div className="navlink">
            <MdShoppingCart style={{ alignSelf: "center" }} size={50} />
          </div>
          <div className="navseparator"></div>
          <div className="navlink">
            <FaUserCircle style={{ alignSelf: "center" }} size={50} />
          </div>
          <div className="navlink" onClick={navOpen ? handleLogout : null}>
            <FiLogOut style={{ alignSelf: "center" }} size={50} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyNav;
