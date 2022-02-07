import "./profilecard.css";

const ProfileCard = ({ userinfodata }) => {
  return (
    <div className="profile-card-container">
      <div className="grp1">
        <p>Yhteyshenkilön tiedot:</p>
        <div className="input-grp">
          <label htmlFor="etunimi">Etunimi</label>
          <input
            type="text"
            name="etunimi"
            defaultValue={userinfodata.firstname}
          />
        </div>
        <div className="input-grp">
          <label htmlFor="sukunimi">Sukunimi</label>
          <input
            type="text"
            name="sukunimi"
            defaultValue={userinfodata.lastname}
          />
        </div>
        <div className="input-grp">
          <label htmlFor="sahkoposti">Sähkoposti</label>
          <input
            type="text"
            name="sahkoposti"
            defaultValue={userinfodata.email}
          />
        </div>
        <div className="input-grp">
          <label htmlFor="puhelinnumero">Puhelin numero</label>
          <input
            type="text"
            name="puhelinnumero"
            defaultValue={userinfodata.phone}
          />
        </div>
      </div>
      <div className="grp2">
        <p>Yrityksen tiedot:</p>
        <div className="input-grp">
          <label htmlFor="nimi">Nimi</label>
          <input type="text" name="nimi" defaultValue={userinfodata.ytunnus} />
        </div>
        <div className="input-grp">
          <label htmlFor="ytunnus">Y-tunnus</label>
          <input
            type="text"
            name="ytunnus"
            defaultValue={userinfodata.ytunnus}
          />
        </div>
        <p>Laskutustapa:</p>
        <div id="laskutustapa-grp" className="input-grp">
          <label htmlFor="sahkoposti2">Sähköposti</label>
          <input
            type="text"
            name="sahkoposti2"
            defaultValue={userinfodata.email}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
