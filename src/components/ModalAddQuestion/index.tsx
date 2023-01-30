import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import Api from "../../services/api";

interface AddQuestionProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    padding: "0",
    borderRadius: "15px",
    boxShadow: "rgb(0 0 0 / 20%) 1px 1px 10px",
  },
};

const AddQuestion = ({
  isModalOpen,
  setIsModalOpen,
}: AddQuestionProps) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [ count, setCount ] = useState<number>(0)
  const [ title , setTitle ] = useState<string>("")

  const handleNewQuestion = () =>{
    if(title !== ""){
      const data1 = {
        description: title
      }
      Api.post("/question", data1)
        .then()
        .catch()
    }
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Style.AddQuestionContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>Adicionar nova questão</h2>
        <section>
          <div>
            <p>Título da questão:</p>
            <input placeholder="?"></input>
          </div>
          <div>
            <p>Resposta objetiva:</p>
            <div className="answer">
              {Array.from({ length: count }).map((_, index) => (
              <input key={index} placeholder={`${index+1}ª Resposta objetiva`}></input>
            ))} 
            </div>  
          </div>
          <div className="handleInput">
            {count>0 && <p className="plus" onClick={() => setCount(count - 1)}>-</p>}
            <p className="plus" onClick={() => setCount(count + 1)}>+</p>
          </div>
        </section>
        <Button variant="contained" className="buttonEnter">
          Cadastrar
        </Button>
      </Style.AddQuestionContainer>
    </Modal>
  );
};

export default AddQuestion;
