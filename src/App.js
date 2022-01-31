import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import HomeScreen from "./screens/homescreen/homescreen";
import Esittely from "./screens/esittely/esittely";
import Profile from "./screens/profile/profile";
import UusiMainos from "./screens/uusimainos/uusimainos";
import Mainokset from "./screens/mainokset/mainokset";

const App = () => {
  const [currentMainosTab, setCurrentMainosTab] = useState(0);
  const [userinfodata, setuserinfodata] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isshowmap, setisshowmap] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [userAds, setUserAds] = useState([]);

  const [updatehelper, setupdatehelper] = useState(true);

  let mainospaikat = [
    "Koulutus",
    "Liikuntapaikat",
    "Terveyspalvelut",
    "Ruokakaupat",
    "Liikenne",
    "Yleisötapahtumat",
    "Puistot",
  ];

  const handleLogin = async (email, pwd) => {
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", pwd);
    await axios({
      method: "POST",
      url: process.env.REACT_APP_BACK_URL + "api/login.php",
      data: formdata,
    })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          setuserinfodata(res.data);
          setIsLoggedIn(true);
          setAuthToken(res.data.token);
        } else {
          return false;
        }
      })
      .catch((err) => console.log(err));
  };

  const handleGetInfoData = async ($token) => {
    let formdata = new FormData();
    formdata.append("token", $token);
    await axios({
      method: "POST",
      url: process.env.REACT_APP_BACK_URL + "api/get_userinfo_data.php",
      data: formdata,
    })
      .then((res) => setuserinfodata(res.data))
      .catch((err) => console.log(err));
  };

  const handleGetAdData = async (id, token) => {
    let formdata = new FormData();
    formdata.append("userid", id);
    formdata.append("token", token);

    await axios({
      method: "POST",
      url: process.env.REACT_APP_BACK_URL + "api/get_ads_by_user.php",
      data: formdata,
    })
      .then((res) => setUserAds(res.data))
      .catch((err) => console.log(err));
  };

  const logout = async () => {
    let formdata = new FormData();
    formdata.append("token", localStorage.getItem("token"));
    await axios({
      method: "POST",
      url: process.env.REACT_APP_BACK_URL + "api/logout.php",
      data: formdata,
    })
      .then((res) => {
        if (res.data === "success") {
          setIsLoggedIn(false);
          setuserinfodata({});
          localStorage.removeItem("token");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      handleGetInfoData(localStorage.getItem("token"));
      setIsLoggedIn(true);
      setAuthToken(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    handleGetAdData(userinfodata.userid, localStorage.getItem("token"));
  }, [userinfodata, updatehelper]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen
              userinfodata={userinfodata}
              setuserinfodata={setuserinfodata}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              handleLogin={handleLogin}
            />
          }
        />
        <Route
          path="/uusimainos"
          element={
            <UusiMainos
              update={() => setupdatehelper(!updatehelper)}
              userid={userinfodata.userid}
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
              update={() => setupdatehelper(!updatehelper)}
              userAds={userAds}
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
              userinfodata={userinfodata}
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
