//Import styles
import { Navigate } from "react-router-dom";
import "./userscreen.css";
import { useState } from "react";

import UserNav from "../../components/usernav/usernav";
import Omasivu from "./tabs/omasivu/omasivu";
import MainosPohjat from "./tabs/mainospohjat/mainospohjat";
import MainosAjat from "./tabs/mainosajat/mainosajat";
import MainosPaikat from "./tabs/mainospaikat/mainospaikat";
import OmatTiedot from "./tabs/omattiedot/omattiedot";
import Naytot from "./tabs/naytot/naytot";
import Nayttojenhallinta from "./tabs/nayttojenhallinta/nayttojenhallinta";
import Asetukset from "./tabs/asetukset/asetukset";

const UserScreen = ({ currentUser }) => {
  const [isnav, setisnav] = useState(false);
  const [currentTab, setCurrentTab] = useState(2);
  //if user is not logged in, redirect back to homepage
  if (!localStorage.getItem("userid")) {
    return <Navigate to="/" />;
  }

  const getRightUserTab = (tabnum) => {
    switch (tabnum) {
      case 0:
        return <Omasivu />;
      case 1:
        return <MainosPohjat />;
      case 2:
        return <MainosAjat />;
      case 3:
        return <MainosPaikat />;
      case 4:
        return <OmatTiedot />;
      case 5:
        return <Naytot />;
      case 6:
        return <Nayttojenhallinta />;
      case 7:
        return <Asetukset />;
    }
  };

  return (
    <>
      <UserNav
        setTab={(n) => setCurrentTab(n)}
        isnav={isnav}
        setisnav={(val) => setisnav(val)}
      />
      <div
        onClick={() => setisnav(false)}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {getRightUserTab(currentTab)}
      </div>
    </>
  );
};

export default UserScreen;
