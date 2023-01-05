import Header from "../../components/Header"
import PreSaleBudgetCard from "../../Components/PreSaleBudgetCard"
import * as Style from "./style"

const PreSaleBudget = () =>{
    return(
        <Style.PreSaleBudgetContainer>
            <Header/>
            <PreSaleBudgetCard/>
        </Style.PreSaleBudgetContainer>
    )
}

export default PreSaleBudget