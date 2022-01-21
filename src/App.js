import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

import HomeScreen from "./screens/homescreen/homescreen";
import Mainokset from "./screens/mainokset/mainokset";
import Esittely from "./screens/esittely/esittely";
import Profile from "./screens/profile/profile";

const App = () => {
  // const [currentUser, setCurrentUser] = useState("");
  const [userData, setUserData] = useState({
    user_ads: [],
    user_info: [],
  });

  // Get user data from api (ads only atm)
  // const get_data = async (userid) => {
  //   let formdata = new FormData();
  //   formdata.append("userid", userid);

  //   await axios({
  //     method: "POST",
  //     url: process.env.REACT_APP_BACK_URL + "api/get_ads_by_user.php",
  //     data: formdata,
  //   })
  //     .then((res) => setUserData({ ...userData, user_ads: res.data }))
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   if (sessionStorage.getItem("userid")) {
  //     get_data(sessionStorage.getItem("userid"));
  //   }
  // }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* <div> */}
      <Routes>
        <Route
          path="/"
          element={<HomeScreen userData={userData} setUserData={setUserData} />}
        />
        <Route path="/esittely" element={<Esittely />} />
        <Route path="/mainokset" element={<Mainokset />} />
        <Route path="/profiili" element={<Profile />} />
      </Routes>
      {/* </div> */}
    </>
  );
};
export default App;
