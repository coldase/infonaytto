//Import styles
import { Navigate } from "react-router-dom";
import "./userscreen.css";
import { useState } from "react";

import UserNav from "../../components/usernav/usernav";
import OmasivuTab from "./tabs/omasivutab";

const UserScreen = ({ currentUser }) => {
  const [isnav, setisnav] = useState(true);
  const [currentTab, setCurrentTab] = useState(0);
  //if user is not logged in, redirect back to homepage
  if (!localStorage.getItem("userid")) {
    return <Navigate to="/" />;
  }

  const getRightUserTab = (tabnum) => {
    switch (tabnum) {
      case 0:
        return <OmasivuTab />;
    }
  };

  return (
    <>
      <UserNav isnav={isnav} setisnav={(val) => setisnav(val)} />
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
