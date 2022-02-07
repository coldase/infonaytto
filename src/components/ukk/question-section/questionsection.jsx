import QuestionItem from "../questionitem/questionitem";
import { useState, useEffect } from "react";
import "./questionsection.css";

const QuestionSection = () => {
  const [questions] = useState([
    [
      "Mikä on Digital Signage?",
      "Digital Signage on infonäyttöviestintää erilaisissa ympäristöissä. Digital Signage infonäyttöjen avulla jaat toiminnallesi lisäarvoa tuottavaa sisältöä kohderyhmillesi erilaisissa ympäristöissä. Digitaalista sisältöä voidaan näyttää erilaisilla välineillä (esim. infonäytöt, kosketusnäytöt, ovenpielinäytöt, LED-seinät jne.). Sisältönä käytetään tekstiä, kuvia, videota tai muita tiedostoja. Digital Signage oikein toteutettuna tehostaa viestintääsi ja viestiäsi. Onhan se kymmenen kertaa tehokkaampaa kuin vaikkapa julistemainonta. Liike pysäyttää ja saa huomion!  – digital signage",
    ],

    [
      "Miksi infonäyttö?",
      "Infonäyttöviestintä voi olla esimerkiksi markkinointia ja mainontaa asiakkaillesi tai sidosryhmillesi tai tehostat sen avulla organisaatiosi sisäistä viestintää henkilöstöllesi. Infonäytöt ja kosketusnäytölle tuotetut palvelut lisäävät tilojesi viihtyvyyttä ja käyttöastetta. Digital Signage voi myös olla automaattista sisältöä valituille kohderyhmille tuotanto- tai myyntijärjestelmistäsi. Infonäyttö viestintä on kymmenen kertaa tehokkaampaa julistemainontaan nähden. – digital signage​",
    ],
    [
      "Mitä sinun tulisi huomioida infonäytöissä mainostamisella?",
      "Kun aloitat miettimään mainostamista, käytä hetki aikaa suunnitteluun mitä haluat viestiä omalle kohderyhmällesi. Lähde liikkeelle lisäarvoista, joita olet tavoittelemassa. Mieti kenelle, missä, milloin ja miten haluat viestisi kertoa. Ota mukaan avainasemassa olevat sisällön tuottamiseen ja mainososaajia. Voit myös valita osaavan ja luotettavan kumppanin toteutuksellesi. Aivan kaikkea ei silloin tarvitse miettiä itse. Yhteisellä kehittämisellä vältätte sudenkuopat ja epäonnistumiset. – digital signage​",
    ],
    [
      "Liikkeelle aina sisältö ja lisäarvo edellä",
      "Lähde liikkeelle viestistäsi ja sen hyödystä liiketoiminnallesi.  Unohda alussa tekniikka ja keskity sisältöön ja mitä haluat viestiä vastaanottajiin. Infonäytöillä voit kasvattaa myyntiä, vahvistaa brändiäsi, Viestiä organisaation tiedotteita, lisätä asiakastyytyväistyyttä tai tehostat tilojesi käyttöä. – digital signage​",
    ],
    [
      "Mikä on hyvä mainos?",
      "Hyvä mainos koostuu selkeästä kuvasta/logosta ja tekstistä. Viestisi on selkeä ja lyhyt, pitkää tekstiä ei ehdi lukemaan. Yhteystiedoista kannattaa laittaa se helpoiten muistettava, esimerkiksi verkkosivujen osoite. Teksti on selkeä ja luettava sekä sen koko riittävän iso. Vältä pieniä yksityiskohtia sekä kokovalkoista taustaa. Kirkkaat ja voimakkaat värit kiinnittävät huomion, mutta liian levoton tausta vie huomion viestiltäsi. – Visiopalo",
    ],
  ]);

  const [questionStates, setQuestionStates] = useState([]);

  // Makes state list for question boxes (open or not)
  useEffect(() => {
    let temp = [];
    questions.forEach(() => {
      temp.push(false);
    });
    setQuestionStates(temp);
  }, [questions]);

  // Opens question boxes for answer one at a time
  const handleOpen = (inx) => {
    let newl = [];
    questionStates.forEach(() => {
      newl.push(false);
    });
    newl[inx] = true;
    setQuestionStates(newl);
  };

  // Closes anwers from question boxes
  const handleClose = () => {
    let newl = [];
    questionStates.forEach(() => {
      newl.push(false);
    });
    setQuestionStates(newl);
  };

  return (
    <div className="question-section">
      <div className="question-header">
        <h1>USEIN KYSYTYT KYSYMYKSET</h1>
      </div>
      <div className="question-container">
        {questions.map((item, inx) => {
          return (
            <QuestionItem
              key={inx}
              item={item}
              setOpen={() => handleOpen(inx)}
              setClose={() => handleClose()}
              isOpen={questionStates[inx]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuestionSection;
