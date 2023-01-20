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
    
    const [ companyName, setCompanyName ] = useState<string>("");
    const [ mainContact, setMainContact ] = useState<string>("");
    const [ email, setEmail ] = useState<string>("");
    const [ phone, setPhone ] = useState<string>("");
    const [ technicalContact, setTechnicalContact ] = useState<string>();
    const [ technicalContactEmail, setTechnicalContactEmail ] = useState<string>();
    const [ technicalContactPhone, setTechnicalContactPhone ] = useState<string>();

    useEffect(()=>{
        const localClient = JSON.parse(sessionStorage.getItem("client") || "[]")
        setMainContact(localClient.name);
        setTechnicalContact(localClient.companyName);
        setEmail(localClient.email);
        setPhone(localClient.phone);
    },[])

    //   companyName: string;
    //   mainContact: string;
    //   email: string;
    //   phone: string;
    //   technicalContact?: string;
    //   technicalContactEmail?: string;
    //   technicalContactPhone?: string;
    
    const handleNewClient = () =>{
        const client = { 
            companyName: companyName,
            name: mainContact,
            email: email,
            phone: phone,
            technicalContact: technicalContact,
            technicalContactEmail: technicalContactEmail,
            technicalContactPhone: technicalContactPhone,
            projectName: undefined,
            timeProject: undefined,
            applicationDescription: undefined
    }

    technicalContactEmail
    technicalContactPhone

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-z]+)?$/i
        
        if(companyName !== "" && mainContact !== "" && email !== "" && phone !== ""){
            if(email.match(regex)){
                if(phone.length > 7){
                    console.log(client)
                    Api.post("/client", client)
                    .then((res)=>{
                        console.log(client)
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



//   projectName?: string;
//   timeProject?: string;
//   applicationDescription?: string;

    return(
        <Style.FirstPageCard>
                    <section>
                        <label>Empresa *</label>
                        <input type="text" value={companyName} onChange={(e)=> setCompanyName(e.target.value)}></input>
                        <label>Contato Principal *</label>
                        <input type="text" value={mainContact} onChange={(e)=> setMainContact(e.target.value)}></input>
                        <label>Email *</label>
                        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                        <label>Telefone *</label>
                        <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)}></input>
                        <label>Contato Técnico</label>
                        <input type="text" value={technicalContact} onChange={(e)=> setTechnicalContact(e.target.value)}></input>
                        <label>Email do Contato Técnico</label>
                        <input type="text" value={technicalContactEmail} onChange={(e)=> setTechnicalContactEmail(e.target.value)}></input>
                        <label>Telefone do Contato Técnico</label>
                        <input type="number" value={technicalContactPhone} onChange={(e)=> setTechnicalContactPhone(e.target.value)}></input>
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
                