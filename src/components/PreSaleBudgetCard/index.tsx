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

    const handleGetForm = () =>{
        Api.get(`/budget-request/${clientId}`)
            .then((res)=>{setAnswers(res.data)})
            .catch((err)=>{console.log(err)})
    }

    useEffect(()=>handleGetForm(), [])

    return(
        <Styled.PreSaleBudgetContainer>
            
                <Styled.ProjectPageReturn>
                    {" "}
                    <Styled.BackIcon onClick={() => navigate("/home")} />{" "}
                </Styled.ProjectPageReturn>
                <section className="client">
                    <div>
                        <p>Cliente</p>
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
                                    <h4>{`${index + 1} - ${element.question.description}`}</h4>
                                    <p>{`${element.alternative !== null?`RO: ${element.alternative}` : ""}`}</p>
                                    <p>{`${element.responseDetails !== null? `RD: ${element.responseDetails}` : ""}`}</p>
                                </div>                     
                            </div>
                            <div className="hours">
                                <section>
                                    <div>
                                        <input type="number" placeholder="50"></input>
                                        <p>hr</p>
                                    </div>
                                </section>
                            </div>
                            <div className="value">
                                <section>
                                    <div>
                                        <p>R$: </p>
                                        <input type="number" placeholder="159,90"></input>
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