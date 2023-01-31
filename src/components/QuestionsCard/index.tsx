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



  //newQuestion states and functions:
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


  //updateOldQuestions states and functions:
  

  const [ editQuestions, setEditQuestions] = useState<any>(questions)
  const [ fillValue, setFillValue ] = useState<boolean>(true)
  const [ questionIndex, setQuestionIndex ] = useState<number>(0)
  const [ alternativeIndex, setAlternativeIndex ] = useState<number>(0)

  const UpdateTitle = (index:number, newTitle:string) =>{
    let newValues = editQuestions
    newValues[index].description = newTitle
    setEditQuestions(newValues)
    setFillValue(false)
    console.log(editQuestions)
  }

  const UpdateAnswer = (newAnswer:string) =>{
    let newValues = editQuestions
    newValues[questionIndex].alternatives[alternativeIndex].description = newAnswer
    setEditQuestions(newValues)
    setFillValue(false)
    console.log(editQuestions)
  }

  const updateTeam = (newTeamId:string) => {
    let newValues = editQuestions
    newValues[questionIndex].alternatives[alternativeIndex].teams[0].id = newTeamId
    setEditQuestions(newValues)
    console.log(editQuestions)
  }

  const updateHours = (newHour:number) =>{
    let newValues = editQuestions
    newValues[questionIndex].alternatives[alternativeIndex].teams[0].workHours = newHour
    setEditQuestions(newValues)
    setFillValue(false)
    console.log(editQuestions)
  }

  const updateAlternatives = (index:number) => {
    setQuestionIndex(index);
    const questionId:string = editQuestions[index].id;
    const newQuestion:string = editQuestions[index].description;
    Api.patch(`/question/${questionId}`,
    {
      description: newQuestion
    }
    ).then(()=>{})
      .catch(()=> toast.error("Erro ao atualizar questão"))
    
      editQuestions[index].alternatives.map((element:any) => {
      const answearId:string = element.id
      const newAnswer:string = element.description
      const newTeamId:string = element.teams[0].id
      const newHours:number = element.teams[0].workHours

      Api.patch(`/alternative/${answearId}`,{
        description: newAnswer,
        teams: [
          {
            teamId: newTeamId,
            workHours: newHours
          }
        ]
      })
      .then(()=>toast.success("Foooi!"))
      .catch(()=> toast.error("Erro ao atualizar respostas"))
    })
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



          {editQuestions && editQuestions.map((element:any, index:any)=>{
            return(                     
              <form onSubmit={(e)=>e.preventDefault()} key={index} className="section02">
              <div className="title">
                <p>{`Questão ${index+1}`}</p>
                <div>
                  <p className="updateButton" onClick={()=>{
                    updateAlternatives(index)
                  }}>Editar</p>
                  <p className="updateButton delete" onClick={()=>console.log(alternativeIndex)}>Excluir</p>
                </div>
              </div>
              <section onClick={()=>setQuestionIndex(index)}>
                <input
                onClick={()=>setFillValue(true)}
                onChange={(e)=>{UpdateTitle(index, e.target.value)}}
                placeholder={element.description}
                className="firstInput"
                value={fillValue?element.description:undefined}
                ></input>
                  <div className="cards">
                    <div className="first">
                      <p>Respostas</p>

                    {/* daqui ja foi! */}



                      {element.alternatives.map((element1:any, index:number)=>{
                        return(
                          <input
                          onClick={()=>{
                            setAlternativeIndex(index);
                            setFillValue(true)
                          }}
                          onChange={(e)=>{UpdateAnswer(e.target.value)}}
                          key={element1.id} 
                          value={fillValue?element1.description:undefined}></input>
                        )
                      })}
                      <input placeholder="Nova resposta objetiva" className="newAnswer"></input>
                    </div>

                    {/* daqui pra baixo! */}


                    <div className="second">
                      <p>Equipes</p>
                      {element.alternatives.map((element2:any, index:number)=>{
                        return(              
                          <select 
                          onChange={(e)=>{updateTeam(e.target.value)}}
                          onClick={()=>{ 
                            setAlternativeIndex(index);
                            }
                          }
                          >
                            {team && team.map((element3:any)=>{                       
                              return(
                                <option value={element3.id} >{element3.name}</option>
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


                  {/* pra acabar!!!! */}

                    <div className="third">

                      <p>Horas Totais</p>
                      {element.alternatives.map((element2:any, index:number)=>{
                        return(
                          <input 
                          onClick={()=>{
                            setAlternativeIndex(index);
                            setFillValue(true)
                          }}
                          onChange={(e)=>{updateHours(e.target.valueAsNumber)}}
                          key={element2.id} 
                          value={fillValue? element2.teams[0].workHours: undefined}
                          type="number" 
                          ></input>
                        )
                      })}
                      <input placeholder="Horas" className="newHour"></input>
                    </div>
                  </div>
              </section>
            </form>
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

// {
//   "id": "8ce3fc64-d3db-40a3-86c4-362136600521",
//   "description": "Você precisa de quantos GB de armazenamento?",
//   "alternatives": [
//       {
//         "id": "c0a6af03-1f4d-4ff8-9807-1b729c48ca82",
//         "description": "8 Gb",
//         "teams": [
//           {
//             "id": "729dc233-9a22-419b-968e-73381287af18",
//             "name": "Full Stack Developer",
//             "valuePerHour": 159.42,
//             "workHours": 20
//           }
//         ]
//       },
//       {
//         "id": "a60a0d79-5a66-43da-8007-c9647f18ad55",
//         "description": "9 Gb",
//         "teams": [
//           {
//             "id": "729dc233-9a22-419b-968e-73381287af18",
//             "name": "Full Stack Developer",
//             "valuePerHour": 159.42,
//             "workHours": 90
//           }
//         ]
//       },
//       {
//         "id": "c158475c-7e35-4f92-b63c-5ef881d23f2e",
//         "description": "15 Gb",
//         "teams": [
//           {
//             "id": "7aecae9d-bd3c-489e-ab2d-f0d91e81b723",
//             "name": "Front-End Developer",
//             "valuePerHour": 159.42,
//             "workHours": 90
//           }
//         ]
//       },
//       {
//         "id": "35374771-feac-47ce-855d-49305f243c3b",
//         "description": "20 Gb",
//         "teams": [
//           {
//             "id": "d96e1937-9e4d-4c7f-948b-720efc4b9443",
//             "name": "Cloud computing",
//             "valuePerHour": 167.15,
//             "workHours": 90
//           }
//         ]
//       }
//     ]
//   },