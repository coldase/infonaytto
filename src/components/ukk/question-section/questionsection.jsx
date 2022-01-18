import QuestionItem from "../questionitem/questionitem";
import { useState, useEffect } from "react";
import "./questionsection.css";

const QuestionSection = () => {
  const [questions] = useState([
    [
      "Kuinka kirjaudun sisään?",
      " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ],

    [
      "Mitä tämä kaikki tarkoittaa ja minne minun tiedot menee?",
      "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English",
    ],
    [
      "Miksi käyttäisin tätä palvelua?",
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    ],
    [
      "Mitäs muuta?",
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33",
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
        <h1>Usein kysyt kysymykset</h1>
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
