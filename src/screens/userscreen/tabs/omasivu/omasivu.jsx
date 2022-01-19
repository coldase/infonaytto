import "./omasivu.css";

const Omasivu = ({ userData }) => {
  return (
    <div className="omasivutab-container">
      <div className="omasivutab-header">
        <h1>Oma sivu: {sessionStorage.getItem("userid")}</h1>
      </div>
      <div className="omasivutab-content">
        {/* <h1>content</h1> */}
        <div className="omatmainokset-container">
          <h2>Omat mainokset</h2>
          <div className="omatmainokset-card-container">
            <div className="omatmainokset-card1"></div>
            {userData.user_ads.map((item) => {
              return (
                <div className="omatmainokset-card">
                  <img
                    key={item.image}
                    src={`data:image/png;base64, ${item.image}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="omasivutab-footer">
        <h1>footer</h1>
      </div>
    </div>
  );
};

export default Omasivu;
