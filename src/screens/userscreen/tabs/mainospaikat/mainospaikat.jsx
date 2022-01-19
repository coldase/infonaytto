import "./mainospaikat.css";
import MyMap from "./map/map";

const MainosPaikat = () => {
  return (
    <div className="mainospaikat-container">
      <div className="mainospaikat-header">
        <h1>mainospaikat</h1>
      </div>
      <div className="mainospaikat-content">
        <MyMap />
      </div>
    </div>
  );
};

export default MainosPaikat;
