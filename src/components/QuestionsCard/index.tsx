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
  const { questions } = useQuestions();
  const { team } = useTeam()
  const firstTeamId = team[0].id? team[0].id : ""

  //newQuestion states:
  const [ newQuestion, setNewQuestion ] = useState<Boolean>(false)
  const [ newAnswer, setNewAnswer ] = useState<Boolean>(false)

  const [ newTitle, setNewTitle ] = useState<string>("") //pergunta em si
  const [ titleId, setTitleId ] = useState<string>("") //id da pergunta depois do post
  const [ currentAnswer, setCurrentAnswer] = useState<string>("") //resposta em si
  const [ teamId, setTeamId ] = useState<string>(firstTeamId) // id do time selecionado
  const [ hours, setHours ] = useState<number>(0) //numero de horas necessárias

  const handleNewQuestion = (prop:string) =>{
    Api.post("/question", 
        {
          description: prop
        }
      )
        .then((res) => {
          setTitleId(res.data.id)
        })
        .catch((err)=> console.log(err))

        
  }

  console.log(hours)

  // console.log(
  //   {
  //     description: currentAnswer,
  //     questionId: titleId,
  //     teams: [
  //       {
  //         teamId: teamId,
  //         workHours: hours
  //       }
  //     ]
  //   }
  // )

  const handleAddAnswear = () =>{
    if(titleId === "" && newTitle ===""){
      if(currentAnswer !=="" && teamId !=="" && hours >= 0){
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
            setTeamId("");
            setHours(0)
          })
          .catch((err)=>console.log(err))
      }
    }else{
      toast.error("A questão deve conter um título")
    }
  }
  
  return (
      <Style.QuestionsContainer>
            <section className="section01">
              <h2>Gerenciamento de questões</h2>
              <p onClick={() => setNewQuestion(true)}>{`Adicionar nova questão +`}</p> 
            </section>

          <section className="allQuestions">


 {/* /////////////////////// */}



          {newQuestion && <section className="section02 newQuestion animate__animated animate__fadeInDownBig animate__delay-0.5s">
              <div className="title">
                <p>{`Nova Questão`}</p>
                  <p className="updateButton" onClick={() => setNewQuestion(false)}>Finalizar</p>
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
                      <input type="number" placeholder="Horas" className="newHour" onChange={(e)=> setHours(e.target.valueAsNumber)}></input>
                    </div>
                  </div>}
              <p className="newAlternative" onClick={()=> setNewAnswer(!newAnswer)}>{newAnswer? "Adicionar resposta":"Cadastrar questão"}</p>
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
