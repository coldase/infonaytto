import "./loginpopup.css";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import LoginForm from "./forms/loginform";
import SigninForm from "./forms/signinform";

const LoginPopup = ({ isLoginPopup, setIsLoginPopup }) => {
  const [loginTab, setLoginTab] = useState(true);
  return (
    <div className="loginpopup-container">
      <div className="loginpopup-closebtn-container">
        <AiOutlineClose
          onClick={() => setIsLoginPopup(false)}
          className="loginpopup-closebtn-icon"
        />
      </div>
      <div className="loginpopup-tab-container">
        <p
          style={loginTab ? { opacity: 1 } : { opacity: 0.5 }}
          onClick={() => setLoginTab(true)}
          className="loginpopup-tab"
        >
          Kirjaudu sisään
        </p>
        <p id="loginpopup-tab-separator" className="loginpopup-tab">
          I
        </p>
        <p
          style={loginTab ? { opacity: 0.5 } : { opacity: 1 }}
          onClick={() => setLoginTab(false)}
          className="loginpopup-tab"
        >
          Luo uusi käyttäjä
        </p>
      </div>

      {/* Logintab */}
      {loginTab ? <LoginForm /> : <SigninForm />}
    </div>
  );
};

export default LoginPopup;
