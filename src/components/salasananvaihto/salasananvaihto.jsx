import "./salasananvaihto.css";
import { useState } from "react";
import axios from "axios";
const SalasananVaihto = ({ closeSalasana, userinfodata }) => {
  const [msg, setmsg] = useState("");

  const [oldpassword, setoldpassword] = useState("");
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");

  const handleVaihda = async (
    myid,
    mynewpassword,
    mynewpassword2,
    myoldpassword
  ) => {
    if (mynewpassword !== mynewpassword2) {
      setmsg("Salasanat eivät täsmää");
      return;
    }

    if (mynewpassword === myoldpassword) {
      setmsg("Käytä eri salasanaa");
      return;
    }
    const formdata = new FormData();
    formdata.append("userid", myid);
    formdata.append("newpassword", mynewpassword);
    formdata.append("oldpassword", myoldpassword);

    await axios({
      method: "POST",
      url: process.env.REACT_APP_BACK_URL + "api/change_password.php",
      data: formdata,
    })
      .then((res) => {
        if (res.data) {
          if (res.data === "success") {
            setmsg("Salasana vaihdettu");
            const timer = setTimeout(() => {
              closeSalasana();

              return () => clearTimeout(timer);
            }, 1500);
          } else {
            setmsg(res.data);
          }
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="salasananvaihto-container">
      <p className="salasananvaihto-header">Salasanan vaihto</p>
      <div className="salasananvaihto-content">
        <div className="salasananvaihto-input-grp">
          <label>Nykyinen salasana</label>
          <input
            type="password"
            onChange={(e) => setoldpassword(e.target.value)}
          />
        </div>
        <div className="salasananvaihto-input-grp">
          <label>Uusi salasana</label>
          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="salasananvaihto-input-grp">
          <label>Salasana uudelleen</label>
          <input
            type="password"
            onChange={(e) => setpassword2(e.target.value)}
          />
        </div>
      </div>
      <div className="salasananvaihto-msg-container">
        <p>{msg}</p>
      </div>
      <div className="salasananvaihto-btn-container">
        <div
          onClick={() =>
            handleVaihda(userinfodata.userid, password, password2, oldpassword)
          }
          className="salasananvaihto-btn"
        >
          <p>Vaihda</p>
        </div>
        <div onClick={() => closeSalasana()} className="salasananvaihto-btn">
          <p>Peruuta</p>
        </div>
      </div>
    </div>
  );
};

export default SalasananVaihto;
