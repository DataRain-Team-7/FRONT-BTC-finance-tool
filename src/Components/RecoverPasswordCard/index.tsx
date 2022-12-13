import { Button } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import * as Style from "./style"
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const RecoverPassword = () => {

    const { param } = useParams();
    const [ password, setPassword] = useState<string>("")
    const [ confirmPassword, setConfirmPassword] = useState<string>("")


    const handleConfirm = () => {

        if(password !== "" && confirmPassword !== ""){
            if(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/\|.()])[0-9a-zA-Z$*&@#!:;/\|.()]{8,}$/)){
                if(password === confirmPassword){
                    toast.success("Nova senha cadastrada")
                    console.log(param)
                }else{toast.error("As senhas devem coincidir")}
            }else{toast.error("A senha deve conter um caracter especial, um número e ao menos uma letra maiúscula")}
        }else{toast.error("Preencha todos os campos")}
    }
    
    return (
            <Style.RecoverPasswordContainer>
                <Style.RecoverPasswordCard>
                    <h2>Recuperação de senha</h2>
                    <div>
                        <p>Nova senha</p>
                        <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <p>Confirmar nova senha</p>
                        <input type="password" onChange={(e)=> setConfirmPassword(e.target.value)}/>
                    </div>
                    <section>
                        <Button variant="contained" className="buttonEnter" onClick={()=>handleConfirm()}>Enviar</Button>
                    </section>
                </Style.RecoverPasswordCard>
            </Style.RecoverPasswordContainer>
    )
}

export default RecoverPassword