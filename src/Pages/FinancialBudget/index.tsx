import FinancialBudgetCard from "../../components/FinancialBudgetCard"
import Header from "../../components/Header"
import * as Style from "./style"
import React from "react";


const FinancialBudget = () =>{
    return(
        <Style.FinancialBudgetContainer>
            <Header/>
            <FinancialBudgetCard/>
        </Style.FinancialBudgetContainer>
    )
}

export default FinancialBudget