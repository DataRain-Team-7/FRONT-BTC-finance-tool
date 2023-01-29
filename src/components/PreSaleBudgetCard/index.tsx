import { Button } from "@mui/material"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import * as Styled from "./style"
import React, { useEffect, useState } from "react";
import Api from "../../services/api";

const PreSaleBudgetCard = () =>{

    const navigate = useNavigate()
    const clientId = sessionStorage.getItem("clientId")
    const [ answers, setAnswers ] = useState<any>()
    const [ budGet, setBudGet ] = useState<any>()
    const [ totalHours, setTotalHours ] = useState<number>(0)
    const [ totalValue, setTotalValue ] = useState<number>(0)

    const handleTotalValues = () =>{
        budGet.map((element: any)=>{
            if(element.valuePerHour !== null){
                setTotalHours(totalHours + element.valuePerHour)
            }
            if(element.workHours !== null){
                setTotalValue(totalValue + element.totalValue)
            }
        })
        console.log({totalHours, totalValue})
    }

    const handleGetForm = () =>{
        Api.get(`/budget-request/${clientId}`)
            .then((res)=>{
                setAnswers(res.data);
                setBudGet(res.data.formResponses.map((element: any)=>{
                    return {
                        id: element.id,
                        valuePerHour: element.valuePerHour,
                        workHours: element.workHours
                    }   
                })) 
            })
            .catch((err)=>{console.log(err)})
    }

    const handleUpdateHour = (index: number , value:number) =>{
        let budget = budGet
        budget[index].valuePerHour = value
        setBudGet(budget)
    }

    const handleUpdateValue = (index: number, value:number) =>{
        let budget = budGet
        budget[index].workHours = value
        setBudGet(budget)
    }

    useEffect(()=>handleGetForm(), [])

    // console.log(budGet)

    return(
        <Styled.PreSaleBudgetContainer>
            
                <Styled.ProjectPageReturn>
                    {" "}
                    <Styled.BackIcon onClick={() => navigate("/home")} />{" "}
                </Styled.ProjectPageReturn>
                <section className="client">
                    <div>
                        <p onClick={()=>handleTotalValues()}>Cliente</p>
                        <h3>{answers && answers.client.mainContact.charAt(0).toUpperCase() + answers.client.mainContact.slice(1)}</h3>
                    </div>
                    <div>
                        <p>Empresa</p>
                        <h3>{answers && answers.client.companyName.charAt(0).toUpperCase() + answers.client.companyName.slice(1)}</h3>
                    </div>
                </section>
                
                <div className="title">
                    <div className="fisrth2">
                        <h2 className="fisrth2">Questões</h2>
                    </div>
                    <div>
                        <h2>Horas</h2>
                    </div>
                    <div>
                        <h2>Valor/hr</h2>
                    </div>
                </div>
                <section className="mainSection">
                { answers && answers.formResponses.map((element:any, index:any)=>{
                    return( 
                        <section className="summary">
                            <div className="questions">
                                    <div>
                                        <h4>{`${index + 1}- `}</h4>
                                        <h4>{`${element.question.description}`}</h4>
                                    </div>
                                    <p>{`${element.alternative !== null?`R. Obj.: ${element.alternative}` : ""}`}</p>
                                    <p>{`${element.responseDetails !== null? `R. Disc.: ${element.responseDetails}` : ""}`}</p>                
                            </div>
                            <div className="hours">
                                <section>
                                    <div>
                                        <input type="number" value={element.workHours} onChange={(e)=> {
                                            handleUpdateValue(index, e.target.valueAsNumber)
                                            }}></input>
                                        <p> hr</p>
                                    </div>
                                </section>
                            </div>
                            <div className="value">
                                <section>
                                    <div>
                                        <p>R$: </p>
                                        <input type="number" value={element.valuePerHour} onChange={(e)=> {
                                            handleUpdateHour(index, e.target.valueAsNumber)
                                            }}></input>
                                    </div>
                                </section>
                            </div>
                        </section>
                    )
                })
                }
                <section className="details">
                    <h2>Nota sobre o orçamento</h2>
                    <textarea wrap="hard" placeholder="Comentário adicional"></textarea>
                    <div className="extract">
                        <p>Horas Totais = 194hr</p>
                        <p>Valor Total = R$ 39.509,50</p>
                    </div>
                </section>
                <section className="botton">
                    <Button type="submit" variant="contained" className="buttonEnter" onClick={()=>{toast.success("Orçamento lançado"); navigate("/home")}}>Finalizar Orçamento</Button>
                </section>

            </section>
   
        </Styled.PreSaleBudgetContainer>
    )
}

export default PreSaleBudgetCard