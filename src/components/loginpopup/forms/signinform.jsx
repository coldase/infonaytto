import "./formstyles.css";
import { useState } from "react";
import axios from "axios";

const SigninForm = ({ setLoginTab }) => {
  const [ytunnus, setytunnus] = useState("");
  const [yname, setyname] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const [phone, setphone] = useState("");

  const [isErrMsg, setIsErrMsg] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSignup = async (
    myytunnus,
    myfname,
    mylname,
    myemail,
    mypassword,
    myphone,
    myyname
  ) => {
    let formdata = new FormData();
    formdata.append("ytunnus", myytunnus);
    formdata.append("yname", myyname);
    formdata.append("firstname", myfname);
    formdata.append("lastname", mylname);
    formdata.append("email", myemail);
    formdata.append("password", mypassword);
    formdata.append("phone", myphone);

    await axios({
      method: "POST",
      url: process.env.REACT_APP_BACK_URL + "api/add_user.php",
      data: formdata,
    })
      .then((res) => {
        if (res.data !== "") {
          setErrMsg(res.data);
          setIsErrMsg(true);
          // console.log(res);
        } else {
          setLoginTab(true);
          // setIsErrMsg(false);
          // console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginpopup-signin-container">
      <h1 className="loginpopup-logintab-header">Luo käyttäjä</h1>
      <div className="loginpopup-logintab-form-container">
        <div className="formitem">
          <input
            onChange={(e) => setyname(e.target.value)}
            type="text"
            name="ynimi"
            placeholder={"Yrityksen nimi"}
          />
        </div>
        <div className="formitem">
          <input
            onChange={(e) => setytunnus(e.target.value)}
            type="text"
            name="ytunnus"
            placeholder={"Y-tunnus"}
          />
        </div>
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
            type="email"
            name="email"
            placeholder={"Sähköposti"}
          />
        </div>
        <div className="formitem">
          <input
            onChange={(e) => setphone(e.target.value)}
            type="text"
            name="phone"
            placeholder={"Puhelin"}
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
        <div className="login-errmsg-container">
          {isErrMsg ? <p className="login-errmsg">{errMsg} !</p> : null}
        </div>
        <div
          className="login-btn"
          onClick={() =>
            handleSignup(ytunnus, fname, lname, email, pwd, phone, yname)
          }
        >
          <p>Rekisteröidy</p>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
