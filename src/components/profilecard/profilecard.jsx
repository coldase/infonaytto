import "./profilecard.css";

const ProfileCard = ({ userinfodata }) => {
  return (
    <div className="mainokset-profile-container">
      <h1 className="mainokset-profile-card-header">PROFIILI</h1>
      <div className="mainokset-profile-card">
        <div className="mainokset-profile-card-header-container">
          {/* <h1>Asiakastiedot</h1> */}
          <div className="mainokset-profile-card-data-container">
            <div className="grp1">
              <p>Y-tunnus:</p>
              <p>{userinfodata.ytunnus}</p>
            </div>
            <p>Yhteyshenkilön tiedot:</p>
            <div className="grp">
              <p>Etunimi:</p>
              <p>{userinfodata.firstname}</p>
            </div>
            <div className="grp">
              <p>Sukunimi:</p>
              <p>{userinfodata.lastname}</p>
            </div>
            <div className="grp">
              <p>Sähköposti:</p>
              <p>{userinfodata.email}</p>
            </div>
            <div className="grp">
              <p>Puhelin:</p>
              <p>{userinfodata.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
