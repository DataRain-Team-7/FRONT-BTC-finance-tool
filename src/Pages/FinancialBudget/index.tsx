import FinancialBudgetCard from "../../Components/FinancialBudgetCard"
import Header from "../../components/Header"
import * as Style from "./style"

const FinancialBudget = () =>{
    return(
        <Style.FinancialBudgetContainer>
            <Header/>
            <FinancialBudgetCard/>
        </Style.FinancialBudgetContainer>
    )
}

export default FinancialBudget