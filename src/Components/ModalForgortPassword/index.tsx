import { Button } from "@mui/material"
import * as Style from "./style"

const ForgotPassword = () => {
    return (
        <Style.ForgotPasswordContainer>
            <div>
                <Style.BackArrow/>
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