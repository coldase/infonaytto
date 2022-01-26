import "./mainokset.css";
import { Navigate } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
import Footer from "../../components/footer/footer";
import { useState } from "react";

//Tabs
import Tyonalla from "./tabs/tyonalla";
import Nakyvilla from "./tabs/nakyvilla";
import Tulossa from "./tabs/tulossa";
import Arkisto from "./tabs/arkisto";

const Mainokset = ({
  isLoggedIn,
  logout,
  currentMainosTab,
  setCurrentMainosTab,
}) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="mainokset-container">
        <div className="mainokset-header">
          <h1>OMAT MAINOKSET</h1>
        </div>
        <div className="mainokset-tabs">
          <div
            onClick={() => setCurrentMainosTab(0)}
            style={
              currentMainosTab === 0
                ? { borderBottom: "4px solid black" }
                : null
            }
            className="mainokset-tab-tyonalla-btn"
          >
            <h1>TYÖN ALLA</h1>
          </div>
          <div
            onClick={() => setCurrentMainosTab(1)}
            style={
              currentMainosTab === 1
                ? { borderBottom: "4px solid black" }
                : null
            }
            className="mainokset-tab-nakyvilla-btn"
          >
            <h1>NÄKYVILLÄ</h1>
          </div>
          <div
            onClick={() => setCurrentMainosTab(2)}
            style={
              currentMainosTab === 2
                ? { borderBottom: "4px solid black" }
                : null
            }
            className="mainokset-tab-tulossa-btn"
          >
            <h1>TULOSSA</h1>
          </div>
          <div
            onClick={() => setCurrentMainosTab(3)}
            style={
              currentMainosTab === 3
                ? { borderBottom: "4px solid black" }
                : null
            }
            className="mainokset-tab-arkisto-btn"
          >
            <h1>ARKISTO</h1>
          </div>
        </div>

        {currentMainosTab === 0 ? <Tyonalla /> : null}
        {currentMainosTab === 1 ? <Nakyvilla /> : null}
        {currentMainosTab === 2 ? <Tulossa /> : null}
        {currentMainosTab === 3 ? <Arkisto /> : null}
        {/* <Footer /> */}
      </div>
      <MyNav logout={logout} />
    </>
  );
};

export default Mainokset;
