import "./formstyles.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";

const LoginForm = ({ currentUser, setCurrentUser }) => {
  const [myemail, setmyemail] = useState("jari@mail.com");
  const [mypwd, setmypwd] = useState("asd");

  const handleLogin = async (email, pwd) => {
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", pwd);

    await axios({
      method: "POST",
      url: "http://192.168.0.100/infonaytto_project/api/login.php",
      data: formdata,
    })
      .then((res) => makeLogin(res.data))
      .catch((err) => console.log(err));
  };

  const makeLogin = (userid) => {
    if (userid) {
      localStorage.setItem("userid", userid);
      setCurrentUser(userid);
    } else {
      console.log("Wrong username or password");
    }
  };

  return (
    <div className="loginpopup-logintab-container">
      <h1 className="loginpopup-logintab-header">Kirjaudu sisään</h1>

      <div className="loginpopup-logintab-form-container">
        <div className="formitem">
          <input
            type="text"
            name="email"
            placeholder="Sähköposti"
            value={myemail}
            onChange={(e) => setmyemail(e.target.value)}
          />
        </div>
        <div className="formitem">
          <input
            type="password"
            name="password"
            placeholder="Salasana"
            value={mypwd}
            onChange={(e) => setmypwd(e.target.value)}
          />
        </div>
        <div onClick={() => handleLogin(myemail, mypwd)} className="login-btn">
          <p>Kirjaudu</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
