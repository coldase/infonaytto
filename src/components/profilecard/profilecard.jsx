import "./profilecard.css";

const ProfileCard = () => {
  return (
    <div className="mainokset-profile-container">
      <h1 className="mainokset-profile-card-header">PROFIILI</h1>
      <div className="mainokset-profile-card">
        <div className="mainokset-profile-card-header-container">
          {/* <h1>Asiakastiedot</h1> */}
          <div className="mainokset-profile-card-data-container">
            <div className="grp1">
              <p>Asiakasnumero:</p>
              <p>0012345</p>
            </div>
            <p>Yhteyshenkilön tiedot:</p>
            <div className="grp">
              <p>Etunimi:</p>
              <p>Maija</p>
            </div>
            <div className="grp">
              <p>Sukunimi:</p>
              <p>Meikäläinen</p>
            </div>
            <div className="grp">
              <p>Sähköposti:</p>
              <p>maijameikäläinen@yritys.fi</p>
            </div>
            <div className="grp">
              <p>Puhelin:</p>
              <p>0401234567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
