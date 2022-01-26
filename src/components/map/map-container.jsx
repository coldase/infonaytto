import MyMap from "./map";
import "./map-container.css";

const MyMapContainer = ({ isshowmap, setisshowmap, mainospaikat }) => {
  return (
    <div className="map-container">
      <div className="map-alue-button-container">
        {mainospaikat.map((item) => (
          <div key={item} className="map-alue-btn">
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="map-container-map">
        <MyMap />
      </div>
      <div className="close-map-btn" onClick={() => setisshowmap(false)}>
        <p>Sulje kartta</p>
      </div>
    </div>
  );
};

export default MyMapContainer;
