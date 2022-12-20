import * as Style from "./style"
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface FirstPageProp {
    setStepNumber: Dispatch<SetStateAction<number>>
}

const FirstPageCard = ({setStepNumber}:FirstPageProp) =>{

    return(
        <Style.FirtPageCard>
                    <section>
                        <label>Nome Completo</label>
                        <input></input>
                        <label>Nome da empresa</label>
                        <input></input>
                        <label>Telefone para contato</label>
                        <input></input>
                        <label>Email</label>
                        <input></input>
                    </section>
                    <div>
                        {/* <p>Utilizar calculadora personalizada?</p> */}
                        <FormControl>
                            <p>Utilizar calculadora personalizada?</p>
                            <RadioGroup row className="RadioGroup" defaultValue={false}>
                                <FormControlLabel value="true" control={<Radio />} label="Sim" />
                                <FormControlLabel value="false" control={<Radio />} label="Nâo" />                        
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="buttonDiv">
                        <Button type="submit" variant="contained" className="buttonEnter" onClick={()=>setStepNumber(1)}>Iniciar</Button>
                    </div>
        </Style.FirtPageCard>
    )
}

export default FirstPageCard
                