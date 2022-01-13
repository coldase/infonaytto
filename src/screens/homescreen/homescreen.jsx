//Import styles
import "./homescreen.css";

const HomeScreen = () => {
  return (
    <div className="homescreen-container">
      <div className="homescreen-content">
        <h1 className="homescreen-header">InfoNäyttö</h1>
        <div className="homescreen-login-btn">
          <div className="homescreen-login-btn-text">Kirjaudu sisään</div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
