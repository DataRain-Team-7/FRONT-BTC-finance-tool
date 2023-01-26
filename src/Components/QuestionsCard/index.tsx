import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useQuestions } from "../../contexts/questions";

import * as Style from "./style"
import { useTeam } from "../../contexts/teamContext";
import toast from "react-hot-toast";

const QuestionsCard = () => {

  const { logged } = useAuth()
  const { questions } = useQuestions();
  const { team } = useTeam() 

  console.log(questions)

  return (
          <Style.QuestionsContainer>
              <section className="section01">
                <h2>Gerenciamento de questões</h2>
                <p>Adicionar nova questão +</p> 
              </section>

            <section className="allQuestions">

            {questions && questions.map((element:any, index:any)=>{
              return(                     
                <section key={index} className="section02">
                <div className="title">
                  <p>{`Questão ${index+1}`}</p>
                  <p className="updateButton" onClick={()=> toast.success('Questão atualizada')}>Alterar</p>
                </div>
                <section>
                  <input value={element.description} className="firstInput"></input>
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

          </Style.QuestionsContainer>  
  );
};

export default QuestionsCard;
