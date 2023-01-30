import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useQuestions } from "../../contexts/questions";
import React from "react";

import * as Style from "./style"
import { useTeam } from "../../contexts/teamContext";
import toast from "react-hot-toast";
import AddQuestion from "../ModalAddQuestion";
import Api from "../../services/api";

const QuestionsCard = () => {

  const { logged } = useAuth()
  const { questions, updateQuestion } = useQuestions();
  const { team, firstTeamId } = useTeam()

  //newQuestion states:
  const [ newQuestion, setNewQuestion ] = useState<Boolean>(false)
  const [ newAnswer, setNewAnswer ] = useState<Boolean>(false)

  const [ newTitle, setNewTitle ] = useState<string>("") //pergunta em si
  const [ titleId, setTitleId ] = useState<string>("") //id da pergunta depois do post
  const [ currentAnswer, setCurrentAnswer] = useState<string>("") //resposta em si
  const [ teamId, setTeamId ] = useState<string>(firstTeamId) // id do time selecionado
  const [ hours, setHours ] = useState<number>(0) //numero de horas necessárias

  if(isNaN(hours)){
    setHours(0)
  }

  console.log(teamId)

  const handleNewQuestion = () =>{
    if(newAnswer === false){
      if(newTitle !== ""){
        Api.post("/question", 
          {
            description: newTitle
          }
        )
          .then((res) => {
            setTitleId(res.data.id)
            setNewAnswer(true)
            toast.success("Pergunta cadastrada")
          })
          .catch((err)=> {
            toast.success("Erro ao cadastrar")
          })
      }else{
        toast.error("A questão deve conter um título")
      }
    }else{
      handleAddAnswear()
    } 
  }

  const handleFinish = () =>{
    if(newTitle !== ""){
      const data = {
        description: newTitle
    }
      Api.patch(`/question/${titleId}`, data)
        .then(()=> {
          toast.success("Feito!");
          setNewTitle("");
          setTitleId("")
          setNewAnswer(false)
          updateQuestion()
        })
        .catch((err)=>{toast.error("Erro ao finalizar")})
    }else{
      toast.error("A questão deve conter um título")
    }
  }
  
  const handleAddAnswear = () =>{
    if(titleId !== "" || newTitle !==""){
      if(currentAnswer !=="" && teamId !==""){
        if(hours > 0){
          Api.post("/alternative", 
          {
            description: currentAnswer,
            questionId: titleId,
            teams: [
              {
                teamId: teamId,
                workHours: hours
              }
            ]
          }
          )
            .then(()=>{
              setCurrentAnswer("");
              toast.success("Resposta cadastrada")
            })
            .catch((err)=>{toast.error("Erro ao cadastrar resposta")})
        }else{
          toast.error("A quantidade de horas inválida")
        }
      }else{
        toast.error("Preencha todos os campos")
      }
    }else{
      toast.error("A questão deve conter um títuloo")
    }
  }

  const handleCancel = () =>{
    Api.delete(`/question/${titleId}`)
      .then(()=>{
          setNewTitle("");
          setTitleId("")
          setNewAnswer(false)
          setCurrentAnswer("")
          setHours(0)
          setTeamId(firstTeamId)
          updateQuestion()
      })
      .catch(()=> toast.error("Erro ao cancelar"))
  }
  
  return (
      <Style.QuestionsContainer>
            <section className="section01">
              <h2>Gerenciamento de questões</h2>
              <p onClick={() => setNewQuestion(!newQuestion)}>{`Adicionar nova questão ${newQuestion? "-" : "+"}`}</p> 
            </section>

          <section className="allQuestions">


 {/* /////////////////////// */}



          {newQuestion && <section className="section02 newQuestion animate__animated animate__fadeInDownBig animate__delay-0.5s">
              <div className="title">
                <p>{`Nova Questão`}</p>
                  {/* <p className="updateButton" onClick={() => setNewQuestion(false)}>Finalizar</p> */}
              </div>
              <section>
                <input value={newTitle} className="firstInput" onChange={(e) => setNewTitle(e.target.value)}></input>
                  {newAnswer && <div className="cards">
                    <div className="first">
                      <p>Adicionar alternativa (Opcional)</p>
                          {/* <input></input> */}
                      <input placeholder="Nova resposta objetiva" className="newAnswer" onChange={(e)=> setCurrentAnswer(e.target.value)}></input>
                    </div>
                    <div className="second">
                      <p>Equipes</p>         
                          <select className="newTeam" onChange={(e)=> setTeamId(e.target.value)}>
                            {team && team.map((element3:any)=>{                       
                              return(
                                <option value={element3.id}>{element3.name}</option>
                              )
                            })}
                          </select>
                    </div>
                    <div className="third">
                      <p>Horas Totais</p>  
                      <input type="number" value={hours} placeholder="Horas" className="newHour" onChange={(e)=> setHours(e.target.valueAsNumber)}></input>
                    </div>
                  </div>}
                <p className="newAlternative" onClick={()=> handleNewQuestion()}>{newAnswer? "Cadastrar resposta":"Cadastrar questão"}</p>
              {newAnswer && <div className="finish">
                <p className="newAlternative" onClick={()=> handleFinish()}>Finalizar</p>
                <p className="newAlternative cancel" onClick={()=> handleCancel()}>Cancelar</p>
              </div>}
              </section>
            </section>}
            
          



 {/* /////////////////////// */}



          {questions && questions.map((element:any, index:any)=>{
            return(                     
              <section key={index} className="section02">
              <div className="title">
                <p>{`Questão ${index+1}`}</p>
                <p className="updateButton" onClick={()=> toast.success('Questão atualizada')}>Alterar</p>
              </div>
              <section>
                <input value={element.description} placeholder={element.description} className="firstInput"></input>
                  <div className="cards">
                    <div className="first">
                      <p>Respostas</p>
                      {element.alternatives.map((element:any)=>{
                        return(
                          <input key={element.id} value={element.description}></input>
                        )
                      })}
                      <input placeholder="Nova resposta objetiva" className="newAnswer"></input>
                    </div>
                    <div className="second">
                      <p>Equipes</p>
                      { element.alternatives.map((element2:any)=>{
                        return(              
                          <select value={element2.teams[0]? element2.teams[0].name : ""}>
                            {team && team.map((element3:any)=>{                       
                              return(
                                <option>{element3.name}</option>
                              )
                            })}
                          </select>                         
                        )
                      })}
                          <select className="newTeam">
                            {team && team.map((element3:any)=>{                       
                              return(
                                <option>{element3.name}</option>
                              )
                            })}
                          </select>
                    </div>
                    <div className="third">
                      <p>Horas Totais</p>
                      {element.alternatives.map((element2:any)=>{
                        return(
                          <input type="number" value={element2.teams[0]? element2.teams[0].workHours : 0}></input>
                        )
                      })}
                      <input placeholder="Horas" className="newHour"></input>
                    </div>
                  </div>
              </section>
            </section>
            )
            })}
        </section>
        {/* <AddQuestion 
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        /> */}
  </Style.QuestionsContainer>  
  );
};

export default QuestionsCard;
