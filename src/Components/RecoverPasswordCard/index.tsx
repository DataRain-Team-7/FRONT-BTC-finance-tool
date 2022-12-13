import { Button } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import * as Style from "./style"
import Modal from "react-modal";

const RecoverPassword = () => {

    
    return (
            <Style.RecoverPasswordContainer>
                <Style.RecoverPasswordCard>
                    <h2>Recuperação de senha</h2>
                    <div>
                        <p>Nova senha</p>
                        <input/>
                    </div>
                    <div>
                        <p>Confirmar nova senha</p>
                        <input/>
                    </div>
                    <section>
                        <Button variant="contained" className="buttonEnter">Enviar</Button>
                    </section>
                </Style.RecoverPasswordCard>
            </Style.RecoverPasswordContainer>
    )
}

export default RecoverPassword