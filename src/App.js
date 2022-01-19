import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//import screens
import HomeScreen from "./screens/homescreen/homescreen";
import UserScreen from "./screens/userscreen/userscreen";
import HelpScreen from "./screens/helpscreen/helpscreen";

const App = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [userData, setUserData] = useState({
    user_ads: [],
    user_info: [],
  });

  // Check if user is logged in
  useEffect(() => {
    if (sessionStorage.getItem("userid")) {
      get_data(sessionStorage.getItem("userid"));
    }
  }, [currentUser]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const get_data = async (userid) => {
    let formdata = new FormData();
    formdata.append("userid", userid);

    await axios({
      method: "POST",
      url: process.env.REACT_APP_BACK_URL + "api/get_ads_by_user.php",
      data: formdata,
    })
      .then((res) => setUserData({ ...userData, user_ads: res.data }))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <HomeScreen
              userData={userData}
              setUserData={setUserData}
              currentUser={currentUser}
              setCurrentUser={(val) => setCurrentUser(val)}
            />
          }
        />
        <Route
          path="/user"
          element={
            <UserScreen
              userData={userData}
              currentUser={currentUser}
              setCurrentUser={(val) => setCurrentUser(val)}
            />
          }
        />
        <Route path="/help" element={<HelpScreen />} />
      </Routes>
    </div>
  );
};
export default App;
