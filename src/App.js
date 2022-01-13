import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

//import screens
import HomeScreen from "./screens/homescreen/homescreen";
import UserScreen from "./screens/userscreen/userscreen";

//import components

const App = () => {
  const [isLoginPopup, setIsLoginPopup] = useState(true);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/user" element={<UserScreen />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
