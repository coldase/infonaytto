import "./questionitem.css";

const QuestionItem = ({ item, isOpen, setOpen, setClose }) => {
  const handleOpen = () => {
    if (isOpen) {
      setClose();
    } else {
      setOpen();
    }
  };

  return (
    <div onClick={() => handleOpen()} className={`question-item`}>
      <p id={"questiontext"}>{item[0]}</p>

      {isOpen ? <p id={"answertext"}>{item[1]}</p> : null}
    </div>
  );
};

export default QuestionItem;
