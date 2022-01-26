import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

import HomeScreen from "./screens/homescreen/homescreen";
import Esittely from "./screens/esittely/esittely";
import Profile from "./screens/profile/profile";
import UusiMainos from "./screens/uusimainos/uusimainos";
import Mainokset from "./screens/mainokset/mainokset";
import Arkisto from "./screens/arkisto/arkisto";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isshowmap, setisshowmap] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [userData, setUserData] = useState({
    user_ads: [],
    user_info: [],
  });

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
            />
          }
        />
        <Route
          path="/mainokset"
          element={<Mainokset isLoggedIn={isLoggedIn} logout={logout} />}
        />

        <Route
          path="/esittely"
          element={<Esittely isLoggedIn={isLoggedIn} logout={logout} />}
        />
        <Route
          path="/profiili"
          element={<Profile isLoggedIn={isLoggedIn} logout={logout} />}
        />

        <Route
          path="/arkisto"
          element={<Arkisto isLoggedIn={isLoggedIn} logout={logout} />}
        />
      </Routes>
    </>
  );
};
export default App;
