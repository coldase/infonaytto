import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

//import screens
import HomeScreen from "./screens/homescreen/homescreen";
import UserScreen from "./screens/userscreen/userscreen";
import QuestionScreen from "./screens/questionscreen/questionscreen";

const App = () => {
  const [currentUser, setCurrentUser] = useState("");

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
        <Route path="/questions" element={<QuestionScreen />} />
      </Routes>
    </div>
  );
};
export default App;
