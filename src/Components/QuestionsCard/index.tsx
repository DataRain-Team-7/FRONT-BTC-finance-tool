import { useEffect } from "react";
import { useAuth } from "../../contexts/auth";

import * as Style from "./style"

const QuestionsCard = () => {

  const { logged } = useAuth()
  
  return (
          <Style.QuestionsContainer>
              <section className="section01">
                <h2>Gerenciamento de questões</h2>
                <p>Adicionar nova questão +</p> 
              </section>

            <section className="allQuestions">

              <section className="section02">
                <div className="title">
                  <p>Questão 01</p>
                  <p>Editar</p>
                </div>
                <section>
                  <input className="firstInput"></input>
                    <div className="cards">
                      <div className="first">
                        <p>Respostas</p>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input className="newAnswer"></input>
                      </div>
                      <div className="second">
                        <p>Equipes</p>
                        <select>
                          <option>Valor 1</option>
                          <option>Valor 2</option>
                        </select>
                        <select>
                          <option>Valor 1</option>
                          <option>Valor 2</option>
                        </select>
                        <select>
                          <option>Valor 1</option>
                          <option>Valor 2</option>
                        </select>
                        <select>
                          <option>Valor 1</option>
                          <option>Valor 2</option>
                        </select>
                        <select className="newTeam">
                          <option>Valor 1</option>
                          <option>Valor 2</option>
                        </select>
                      </div>
                      <div className="third">
                        <p>Horas Totais</p>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input className="newHour"></input>
                      </div>
                    </div>
                </section>
              </section>




              <section className="section02">
                <div className="title">
                  <p>Questão 02</p>
                  <p>Editar</p>
                </div>
                <section>
                  <input className="firstInput"></input>
                    <div className="cards">
                      <div className="first">
                        <p>Respostas</p>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input className="newAnswer"></input>
                      </div>
                      <div className="second">
                        <p>Equipes</p>
                        <select>
                          <option>Valor 1</option>
                          <option>Valor 2</option>
                        </select>
                        <select>
                          <option>Valor 1</option>
                          <option>Valor 2</option>
                        </select>
                        <select>
                          <option>Valor 1</option>
                          <option>Valor 2</option>
                        </select>
                        <select>
                          <option>Valor 1</option>
                          <option>Valor 2</option>
                        </select>
                        <select className="newTeam">
                          <option>Valor 1</option>
                          <option>Valor 2</option>
                        </select>
                      </div>
                      <div className="third">
                        <p>Horas Totais</p>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input className="newHour"></input>
                      </div>
                    </div>
                </section>
              </section>

          </section>


          </Style.QuestionsContainer>  
  );
};

export default QuestionsCard;
