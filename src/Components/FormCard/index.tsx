import * as Style from "./style"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from "@mui/material";
import { useState } from "react";

const steps = [ 
    "Contato", "Formulário", "Detalhes"
]

const FormCard = () =>{

    const [stepNumber, setStepNumber] = useState<number>(0)
    

    return(
        <Style.FormCardContainer>
            <Style.FormCard>
                <h3>Contato</h3>
                <Stepper activeStep={stepNumber} alternativeLabel className="Stepper">
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <form>
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
                            <RadioGroup row className="RadioGroup">
                                <FormControlLabel value="true" control={<Radio />} label="sim" />
                                <FormControlLabel value="false" control={<Radio />} label="nâo" />                        
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="buttonDiv">
                        <Button type="submit" variant="contained" className="buttonEnter">Iniciar</Button>
                    </div>
                </form>
                
            </Style.FormCard>
        </Style.FormCardContainer>
    )
}

export default FormCard;