import "./kiitos.css";

const Kiitos = ({ type }) => {
  return (
    <div className="kiitos-container">
      {type === "julkaisu" ? (
        <div className="kiitos-julkaisu-container">
          <p>Mahtavaa! Mainoksesi on luotu onnistuneesti</p>
        </div>
      ) : null}
    </div>
  );
};

export default Kiitos;
