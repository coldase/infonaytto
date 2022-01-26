import "./esittely.css";
import { Navigate, Link } from "react-router-dom";
import MyNav from "../../components/mynav/mynav";
import Footer from "../../components/footer/footer";

const Esittely = ({ isLoggedIn, logout }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="esittely-container">
        <div className="esittely-content">
          <h1 className="esittely-header">ESITTELY</h1>
          <p className="esittely-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator
          </p>
          <p className="esittely-text">
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable. The generated Lorem Ipsum is therefore always free
            from repetition, injected humour, or non-characteristic words etc
            contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          <p className="esittely-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia.
          </p>
          <div className="katsonaytot-kartalta-btn">
            <p>Katso näytöt kartalta</p>
          </div>
        </div>
        <div className="esittely-content2">
          <h1 className="esittely-header2">OTSIKKO</h1>
          <p className="esittely-text2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text
          </p>
          <Link className="aloitatasta-btn" to="/mainokset">
            <p>Aloita tästä</p>
          </Link>
        </div>
        <Footer />
      </div>
      <MyNav logout={logout} />
    </>
  );
};

export default Esittely;