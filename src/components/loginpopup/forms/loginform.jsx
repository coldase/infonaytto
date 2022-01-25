import "./formstyles.css";
import axios from "axios";
import { useState } from "react";

const LoginForm = ({ isLoggedIn, setIsLoggedIn }) => {
  const [myemail, setmyemail] = useState("jari@mail.com");
  const [mypwd, setmypwd] = useState("asd");

  const [errMsg, setErrMsg] = useState("Tarkista sähköposti tai salasana");
  const [isErrMsg, setIsErrMsg] = useState(false);

  const handleLogin = async (email, pwd) => {
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", pwd);

    await axios({
      method: "POST",
      url: process.env.REACT_APP_BACK_URL + "api/login.php",
      data: formdata,
    })
      .then((res) => makeLogin(res.data))
      .catch((err) => console.log(err));
  };

  const makeLogin = async (userid) => {
    if (userid) {
      setErrMsg(false);
      setIsLoggedIn(true);
    } else {
      setIsErrMsg(true);
    }
  };

  return (
    <div className="loginpopup-logintab-container">
      <h1 className="loginpopup-logintab-header">Kirjaudu sisään</h1>

      <div className="loginpopup-logintab-form-container">
        <div className="formitem">
          <input
            required
            type="text"
            name="email"
            placeholder="Sähköposti"
            value={myemail}
            onChange={(e) => setmyemail(e.target.value)}
            onKeyPress={(e) =>
              e.key === "Enter" ? handleLogin(myemail, mypwd) : null
            }
          />
        </div>
        <div className="formitem">
          <input
            required
            type="password"
            name="password"
            placeholder="Salasana"
            value={mypwd}
            onChange={(e) => setmypwd(e.target.value)}
            onKeyPress={(e) =>
              e.key === "Enter" ? handleLogin(myemail, mypwd) : null
            }
          />
        </div>
        <div className="login-errmsg-container">
          {isErrMsg ? <p className="login-errmsg">{errMsg}</p> : null}
        </div>
        <div onClick={() => handleLogin(myemail, mypwd)} className="login-btn">
          <p>Kirjaudu</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
