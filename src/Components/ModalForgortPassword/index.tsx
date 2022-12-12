import { Button } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import * as Style from "./style"

interface ForgotPasswordProps {
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

const ForgotPassword = ({ setIsModalOpen }: ForgotPasswordProps) => {

    const handleCloseModal = () =>{
        setIsModalOpen(false)
    }
    return (
        <Style.ForgotPasswordContainer>
            <div>
                <Style.BackArrow onClick={handleCloseModal}/>
            </div>
            <h2>Recuperação de senha</h2>
            <section>
                <p>Enviaremos um email para que possa concluir a ação</p>
                <input placeholder="Digite o email para recuperação"/>
            </section>
            <Button variant="contained" className="buttonEnter">Enviar</Button>
        </Style.ForgotPasswordContainer>
    )
}

export default ForgotPassword