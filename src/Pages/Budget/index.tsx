import Header from "../../components/Header"
import BudgetCard from "../../components/BudgetCard"
import * as Style from "./style"
import React from "react";


const PreSaleBudget = () =>{
    return(
        <Style.PreSaleBudgetContainer>
            <Header setSearch={""} />
            <BudgetCard/>
        </Style.PreSaleBudgetContainer>
    )
}

export default PreSaleBudget