import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import HomeScreen from "./screens/homescreen/homescreen";
import Esittely from "./screens/esittely/esittely";
import Profile from "./screens/profile/profile";
import UusiMainos from "./screens/uusimainos/uusimainos";
import Mainokset from "./screens/mainokset/mainokset";
import LoginPopup from "./components/loginpopup/loginpopup";

const App = () => {
  const [currentMainosTab, setCurrentMainosTab] = useState(0);
  const [currentProfileTab, setCurrentProfileTab] = useState(0);
  const [userinfodata, setuserinfodata] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isshowmap, setisshowmap] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [userAds, setUserAds] = useState([]);
  const [isLoginPopup, setIsLoginPopup] = useState(false);
  const [loginTab, setLoginTab] = useState(true);
  const [allscreens, setallscreens] = useState([]);
  const navigate = useNavigate();

  const [updatehelper, setupdatehelper] = useState(true);

  const [mainospaikat, setmainospaikat] = useState([
    "Koulutus",
    "Liikuntapaikat",
    "Terveyspalvelut",
    "Ruokakaupat",
    "Liikenne",
    "Yleisotapahtumat",
    "Puistot",
  ]);

  const get_categories = async () => {
    await axios({
      method: "GET",
      url: process.env.REACT_APP_BACK_URL + "api/get_categories.php",
    })
      .then((res) => setmainospaikat(res.data.map((item) => item.name)))
      .catch((err) => console.log(err));
  };

  const get_all_screens = async () => {
    await axios({
      method: "GET",
      url: process.env.REACT_APP_BACK_URL + "api/get_all_screens.php",
    })
      .then((res) => setallscreens(res.data))
      .catch((err) => console.log(err));
  };

  const check_if_token_is_logged_in = async (token) => {
    let formdata = new FormData();
    formdata.append("token", token);

    await axios({
      method: "POST",
      url: process.env.REACT_APP_BACK_URL + "api/check_if_token_loggedin.php",
      data: formdata,
    })
      .then((res) => {
        if (res.data === "success") {
          setIsLoggedIn(true);
        } else {
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        }
      })
      .catch((err) => console.log(err));
  };

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
          navigate("/esittely", { replace: true });
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (isLoggedIn === true) {
      setIsLoginPopup(false);
    }
  }, [isLoggedIn]);

  const handleGetInfoData = async (token) => {
    let formdata = new FormData();
    formdata.append("token", token);
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
      .then((res) => {
        setUserAds(res.data);
      })
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
          setupdatehelper(!updatehelper);
          setisshowmap(false);
          navigate("/esittely");
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

    check_if_token_is_logged_in(localStorage.getItem("token"));
    get_categories();
    get_all_screens();
  }, []);

  useEffect(() => {
    handleGetAdData(userinfodata.userid, localStorage.getItem("token"));
  }, [userinfodata]);

  useEffect(() => {
    handleGetInfoData(localStorage.getItem("token"));
    handleGetAdData(userinfodata.userid, localStorage.getItem("token"));
  }, [updatehelper]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
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
              allscreens={allscreens}
              setLoginTab={setLoginTab}
              update={() => setupdatehelper(!updatehelper)}
              userid={userinfodata.userid}
              isLoggedIn={isLoggedIn}
              logout={logout}
              isshowmap={isshowmap}
              setisshowmap={(value) => setisshowmap(value)}
              mainospaikat={mainospaikat}
              setIsLoginPopup={setIsLoginPopup}
            />
          }
        />
        <Route
          path="/mainokset"
          element={
            <Mainokset
              mainospaikat={mainospaikat}
              setLoginTab={setLoginTab}
              update={() => setupdatehelper(!updatehelper)}
              userAds={userAds}
              setisshowmap={(value) => setisshowmap(value)}
              isLoggedIn={isLoggedIn}
              logout={logout}
              currentMainosTab={currentMainosTab}
              setCurrentMainosTab={setCurrentMainosTab}
              setIsLoginPopup={setIsLoginPopup}
            />
          }
        />

        <Route
          path="/esittely"
          element={
            <Esittely
              setLoginTab={setLoginTab}
              isshowmap={isshowmap}
              setisshowmap={(value) => setisshowmap(value)}
              isLoggedIn={isLoggedIn}
              logout={logout}
              setIsLoginPopup={setIsLoginPopup}
              mainospaikat={mainospaikat}
            />
          }
        />
        <Route
          path="/profiili"
          element={
            <Profile
              setisshowmap={(value) => setisshowmap(value)}
              userinfodata={userinfodata}
              isLoggedIn={isLoggedIn}
              logout={logout}
              setCurrentMainosTab={setCurrentMainosTab}
              setIsLoginPopup={setIsLoginPopup}
              setCurrentProfileTab={setCurrentProfileTab}
              currentProfileTab={currentProfileTab}
              userAds={userAds}
              update={() => setupdatehelper(!updatehelper)}
            />
          }
        />
      </Routes>
      {isLoginPopup ? (
        <LoginPopup
          loginTab={loginTab}
          setLoginTab={setLoginTab}
          setIsLoginPopup={setIsLoginPopup}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          userinfodata={userinfodata}
          setuserinfodata={setuserinfodata}
          handleLogin={handleLogin}
        />
      ) : null}
    </div>
  );
};
export default App;
