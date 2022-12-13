import { Button } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import * as Style from "./style"
import Modal from "react-modal";

const ForgotPassword = () => {

    
    return (
            <Style.ForgotPasswordContainer>
                
                <Button variant="contained" className="buttonEnter">Enviar</Button>
            </Style.ForgotPasswordContainer>
    )
}

export default ForgotPassword