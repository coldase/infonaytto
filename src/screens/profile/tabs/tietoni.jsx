import "./tietoni.css";
import ProfileCard from "../../../components/profilecard/profilecard";
import axios from "axios";
import { useState } from "react";

const Tietoni = ({ userinfodata, update, showSalasana }) => {
  const [fname, setfname] = useState(userinfodata.firstname);
  const [lname, setlname] = useState(userinfodata.lastname);
  const [email, setemail] = useState(userinfodata.email);
  const [phone, setphone] = useState(userinfodata.phone);
  const [yname, setyname] = useState(userinfodata.ynimi);
  const [ytunnus, setytunnus] = useState(userinfodata.ytunnus);

  const [showtiedottallennettu, setshowtiedottallennettu] = useState(false);

  const handleTimer = () => {
    setshowtiedottallennettu(true);
    const timeout = setTimeout(() => {
      setshowtiedottallennettu(false);
      return () => clearTimeout(timeout);
    }, 2000);
  };

  const handleUserUpdate = async (
    myid,
    myytunnus,
    myfname,
    mylname,
    myemail,
    myphone,
    myyname
  ) => {
    const formdata = new FormData();
    formdata.append("userid", myid);
    formdata.append("ytunnus", myytunnus);
    formdata.append("firstname", myfname);
    formdata.append("lastname", mylname);
    formdata.append("email", myemail);
    formdata.append("phone", myphone);
    formdata.append("yname", myyname);

    await axios({
      method: "POST",
      url: process.env.REACT_APP_BACK_URL + "api/update_user.php",
      data: formdata,
    }).then((res) => {
      if (res.data === "success") {
        update();
        handleTimer();
      } else {
        alert("ERROR!");
      }
    });
  };

  return (
    <>
      <div className="tietoni-container">
        <ProfileCard
          showtiedottallennettu={showtiedottallennettu}
          userinfodata={userinfodata}
          setfname={setfname}
          setlname={setlname}
          setemail={setemail}
          setphone={setphone}
          setyname={setyname}
          setytunnus={setytunnus}
        />
        <div className="tietoni-btn-container">
          <div className="tietoni-btn" onClick={() => showSalasana()}>
            <p>Vaihda salasana</p>
          </div>
          {/* <div className="tietoni-btn" onClick={() => alert("Under development")}>
          <p>Vaihda laskutustapa</p>
        </div> */}
          {!showtiedottallennettu ? (
            <div
              onClick={() =>
                handleUserUpdate(
                  userinfodata.userid,
                  ytunnus,
                  fname,
                  lname,
                  email,
                  phone,
                  yname
                )
              }
              className="tietoni-btn"
            >
              <p>Vahvista muutokset</p>
            </div>
          ) : (
            <div className="tietoni-tallennettu-btn">
              <p>Tiedot tallennettu</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Tietoni;
