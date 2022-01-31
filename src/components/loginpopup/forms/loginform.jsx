import "./formstyles.css";
import { useState } from "react";

const LoginForm = ({ handleLogin }) => {
  const [myemail, setmyemail] = useState("jari@mail.com");
  const [mypwd, setmypwd] = useState("asd");

  const errMsg = "Tarkista sähköposti tai salasana";
  const [isErrMsg, setIsErrMsg] = useState(false);

  const handleMessage = (myemail, mypwd) => {
    if (handleLogin(myemail, mypwd)) {
      setIsErrMsg(true);
    } else {
      setIsErrMsg(false);
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
              e.key === "Enter" ? handleMessage(myemail, mypwd) : null
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
              e.key === "Enter" ? handleMessage(myemail, mypwd) : null
            }
          />
        </div>
        <div className="login-errmsg-container">
          {isErrMsg ? <p className="login-errmsg">{errMsg}</p> : null}
        </div>
        <div
          onClick={() => handleMessage(myemail, mypwd)}
          className="login-btn"
        >
          <p>Kirjaudu</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
