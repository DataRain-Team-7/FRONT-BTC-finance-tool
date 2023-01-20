import * as Style from "./style"
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Api from "../../../services/api";
import { toast } from "react-hot-toast";

interface FirstPageProp {
    setStepNumber: Dispatch<SetStateAction<number>>
}

const FirstPageCard = ({setStepNumber}:FirstPageProp) =>{

    const [ mainContact, setMainContact ] = useState<string>("");
    const [ technicalContact, setTechnicalContact ] = useState<string>("");
    const [ email, setEmail ] = useState<string>("");
    const [ phone, setPhone ] = useState<string>("");

    useEffect(()=>{
        const localClient = JSON.parse(sessionStorage.getItem("client") || "[]")
        setMainContact(localClient.name);
        setTechnicalContact(localClient.companyName);
        setEmail(localClient.email);
        setPhone(localClient.phone);
    },[])

    
    const handleNewClient = () =>{
        const client = { 
            name: mainContact,
            companyName: technicalContact,
            email: email,
            phone: phone
    }
        
        if(mainContact !== undefined && email !== undefined && phone !== undefined){
            if(email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-z]+)?$/i)){
                if(phone.length > 7){
                    Api.post("/client", client)
                    .then((res)=>{
                        setStepNumber(1)
                        sessionStorage.setItem("client", JSON.stringify(client))
                        sessionStorage.setItem("clientId", res.data.id)
                    })
                    .catch(()=> toast.error("Dados de usuário inválido"))
                }else{
                    toast.error("Numero de telefone inválido")
                }
            }else{
                toast.error("Email inválido")
            }
        }else{
            
            toast.error("Preencha os campos obrigatórios")
        }
    }

    return(
        <Style.FirstPageCard>
                    <section>
                        <label>Contato Principal *</label>
                        <input type="text" value={mainContact} onChange={(e)=> setMainContact(e.target.value)}></input>
                        <label>Contato Técnico</label>
                        <input type="text" value={technicalContact} onChange={(e)=> setTechnicalContact(e.target.value)}></input>
                        <label>Email *</label>
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                        <label>Telefone *</label>
                        <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)}></input>
                    </section>
                    <div>
                        <FormControl>
                            <p>Utilizar calculadora personalizada?</p>
                            <RadioGroup row className="RadioGroup" defaultValue={false}>
                                <FormControlLabel value="true" control={<Radio />} label="Sim" />
                                <FormControlLabel value="false" control={<Radio />} label="Nâo" />                        
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="buttonDiv">
                        <Button variant="contained" className="buttonEnter" onClick={()=> handleNewClient()}>Iniciar</Button>
                    </div>
        </Style.FirstPageCard>
    )
}

export default FirstPageCard
                