import "./poistamainospopup.css";

const PoistaMainosPopup = ({ handleDel, close, item }) => {
  return (
    <div className="poistamainospopup-container">
      <p>Haluatko varmasti poistaa mainoksen?</p>
      <p>{item.name}</p>
      <div className="poistamainospopup-btn-container">
        <div className="poistamainospopup-btn" onClick={() => handleDel()}>
          <p>Kyllä</p>
        </div>
        <div className="poistamainospopup-btn" onClick={() => close()}>
          <p>Ei</p>
        </div>
      </div>
    </div>
  );
};

export default PoistaMainosPopup;
