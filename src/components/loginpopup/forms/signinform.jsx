import "./formstyles.css";
import { useState } from "react";

const SigninForm = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  return (
    <div className="loginpopup-signin-container">
      <h1 className="loginpopup-logintab-header">Luo käyttäjä</h1>
      <div className="loginpopup-logintab-form-container">
        <div className="formitem">
          <input
            onChange={(e) => setfname(e.target.value)}
            type="text"
            name="fname"
            placeholder={"Etunimi"}
          />
        </div>
        <div className="formitem">
          <input
            onChange={(e) => setlname(e.target.value)}
            type="text"
            name="lname"
            placeholder={"Sukunimi"}
          />
        </div>
        <div className="formitem">
          <input
            onChange={(e) => setemail(e.target.value)}
            type="text"
            name="email"
            placeholder={"Sähköposti"}
          />
        </div>
        <div className="formitem">
          <input
            onChange={(e) => setpwd(e.target.value)}
            type="password"
            name="password"
            placeholder={"Salasana"}
          />
        </div>
        <div className="login-btn">
          <p>Rekisteröidy</p>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
