import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

import HomeScreen from "./screens/homescreen/homescreen";
import Esittely from "./screens/esittely/esittely";
import Profile from "./screens/profile/profile";
import UusiMainos from "./screens/uusimainos/uusimainos";
import Mainokset from "./screens/mainokset/mainokset";

const App = () => {
  const [currentMainosTab, setCurrentMainosTab] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isshowmap, setisshowmap] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [userData, setUserData] = useState({
    user_ads: [],
    user_info: [],
  });

  let mainospaikat = [
    "Koulutus",
    "Liikuntapaikat",
    "Terveyspalvelut",
    "Ruokakaupat",
    "Liikenne",
    "Yleisötapahtumat",
    "Puistot",
  ];

  const logout = () => {
    setIsLoggedIn(false);
  };

  // useEffect(() => {
  //   console.log(isshowmap);
  // }, [isshowmap]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen
              userData={userData}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={(val) => setIsLoggedIn(val)}
            />
          }
        />
        <Route
          path="/uusimainos"
          element={
            <UusiMainos
              isLoggedIn={isLoggedIn}
              logout={logout}
              isshowmap={isshowmap}
              setisshowmap={setisshowmap}
              mainospaikat={mainospaikat}
            />
          }
        />
        <Route
          path="/mainokset"
          element={
            <Mainokset
              isLoggedIn={isLoggedIn}
              logout={logout}
              currentMainosTab={currentMainosTab}
              setCurrentMainosTab={setCurrentMainosTab}
            />
          }
        />

        <Route
          path="/esittely"
          element={
            <Esittely
              isshowmap={isshowmap}
              setisshowmap={setisshowmap}
              isLoggedIn={isLoggedIn}
              logout={logout}
              mainospaikat={mainospaikat}
            />
          }
        />
        <Route
          path="/profiili"
          element={
            <Profile
              isLoggedIn={isLoggedIn}
              logout={logout}
              setCurrentMainosTab={setCurrentMainosTab}
            />
          }
        />
      </Routes>
    </>
  );
};
export default App;
