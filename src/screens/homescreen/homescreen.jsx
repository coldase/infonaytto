//Import styles
import "./homescreen.css";
import { Link } from "react-router-dom";
import QuestionSection from "../../components/ukk/question-section/questionsection";
import Footer from "../../components/footer/footer";
import { Navigate } from "react-router-dom";

//someicons
// import {
//   BsLinkedin,
//   BsFacebook,
//   BsInstagram,
//   BsTwitter,
//   BsYoutube,
// } from "react-icons/bs";

const HomeScreen = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <Navigate to="/profiili" />;
  }
  return (
    <>
      <div className="homescreen-container">
        <div className="homescreen-header">
          {/* <h1>SALON MAINOSPAIKAT OY</h1> */}
        </div>
        {/* <div className="homescreen-content"> */}
        <div className="homescreen-content-1">
          <h1>INFONÄYTTÖ</h1>
          <Link to="/esittely" className="homescreen-aloita-btn">
            <p>Aloita tästä</p>
          </Link>
          <QuestionSection />
          {/* </div> */}

          <div className="homescreen-content-2">
            <div className="homescreen-kokemus-container">
              <p>
                "Liikkuvan kuvan ansiosta näyttöjen huomioarvo on erinomainen ja
                tulokset näkyivät heti selvästi tuotteiden myynnissä. Olemme
                säästyneet julisteiden painattamiselta ja voimme olla varmoja
                siitä, että oikea tieto on oikeaan aikaan esillä."​
              </p>
            </div>
            <div className="homescreen-kokemus-container">
              <p>
                "Nopeus on ykkönen. Kaikki hoituu reaaliajassa, joten
                materiaalit voi tehdä itse ja virheet saa heti korjattua.
                Ohjelmointi ja ajastus tuo helpotusta arkeen kun ei tarvitse
                koko ajan päivystää."
              </p>
            </div>
            <div className="homescreen-kokemus-container">
              <p>
                "Näyttöjen avulla voidaan tehdä kohdennettua mainontaa eri
                asiakasryhmille. Diginäytöt soveltuvat hienosti yhden päivän tai
                vaikka kuukauden voimassa oleviin tarjouksiin."
              </p>
            </div>
            <div className="homescreen-kokemus-container">
              <p>
                "Infonäytöillä tuodaan tehokas viestintä myös niille, joilla ei
                ole pääsyä yrityksen intraan. Infonäyttöjä voidaan hallinnoida
                sekä etänä valtakunnallisella tasolla että paikallisesti
                terminaali- ja varastopäälliköiden toimesta."
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
