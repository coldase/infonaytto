import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";

//import screens
import HomeScreen from "./screens/homescreen/homescreen";
import UserScreen from "./screens/userscreen/userscreen";

const App = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [isLoginPopup, setIsLoginPopup] = useState(true);

  // Check if user is logged in
  useEffect(() => {
    if (localStorage.getItem("userid")) {
      setCurrentUser(localStorage.getItem("userid"));
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <HomeScreen
              currentUser={currentUser}
              setCurrentUser={(val) => setCurrentUser(val)}
            />
          }
        />
        <Route
          path="/user"
          element={
            <UserScreen
              currentUser={currentUser}
              setCurrentUser={(val) => setCurrentUser(val)}
            />
          }
        />
      </Routes>
    </div>
  );
};
export default App;
