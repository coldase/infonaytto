import "./formstyles.css";
import { useState } from "react";

const LoginForm = ({ handleLogin, isLoggedIn }) => {
  const [myemail, setmyemail] = useState("jari@mail.com");
  const [mypwd, setmypwd] = useState("asd");

  const errMsg = "Tarkista sähköposti tai salasana";
  const [isErrMsg, setIsErrMsg] = useState(false);

  const handleLoginBtn = (em, pwd) => {
    handleLogin(em, pwd);
    if (!isLoggedIn) {
      setIsErrMsg(true);
    } else {
      setIsErrMsg(false);
    }
  };

  return (
    <div className="loginpopup-logintab-container">
      <h1 className="loginpopup-logintab-header" id="kirjaudusisäänheader">
        Kirjaudu sisään
      </h1>

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
              e.key === "Enter" ? handleLoginBtn(myemail, mypwd) : null
            }
          />
        </div>
        <div className="login-errmsg-container">
          {isErrMsg ? <p className="login-errmsg">{errMsg}</p> : null}
        </div>
        <div
          onClick={() => handleLoginBtn(myemail, mypwd)}
          className="login-btn"
        >
          <p>Kirjaudu</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
