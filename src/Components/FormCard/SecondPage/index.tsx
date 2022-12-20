import * as Style from "./style"
import { Dispatch, SetStateAction, useState } from "react";
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

interface FirstPageProp {
    setStepNumber: Dispatch<SetStateAction<number>>
}

const questions:any = [
    {
        id:"4545956",
        description: "Quem veio primeiro, o ovo ou a galinha?",
        alternatives:[
            {
                id:"56156156",
                description:"A galinha veio primeiro"
            },
            {
                id:"56198561",
                description:"O ovo veio primeiro"
            },
            {
                id:"97156156",
                description:"Os dois vieram juntos"
            },
            {
                id:"56156696",
                description:"Nenhuma das alternativas"
            }
        ]
    },
    {
        id:"5964196",
        description: "Com quantos paus se faz uma canoa?",
        alternatives:[
            {
                id:"98915216",
                description:"Com apenas um pau"
            },
            {
                id:"41564532",
                description:"Depende do tamando da canoa"
            },
            {
                id:"567489602",
                description:"Canoa nao se faz com pau"
            },
            {
                id:"056159645",
                description:"Muitos paus são necessários"
            }
        ]
    },

]

 

const SecondPageCard = ({setStepNumber}:FirstPageProp) =>{

    const [ count, setCount] = useState<number>(0)

    return(
        <Style.SecondPageCard>
            <section >
                    <h3>{questions[count].description}</h3>
                <FormControl className="FormControl">
                    <RadioGroup onChange={()=>{}}>
                        {questions[count].alternatives.map((e:any)=>{                    
                            return <FormControlLabel value={e.id} control={<Radio />} label={e.description} />
                        })}
                    </RadioGroup>                   
                </FormControl>
                <textarea wrap="hard" placeholder="Comentário adicional"></textarea>
                {/* <div onClick={()=>console.log(questions[count].alternatives.map((e:any)=>{return e.description}))}>Botaão louco</div> */}
                <div className="questionButtons">
                    <Button size="small" color="inherit" variant="contained" className="buttonEnter" onClick={()=>{setCount(count-1)}}>Anterior</Button>
                    <Button size="small" color="inherit" variant="contained" className="buttonEnter" onClick={()=>{setCount(count+1)}}>Próxima</Button>
                </div>
            </section>

            <div className="pageButtons">
                <Button variant="contained" className="buttonBack" onClick={()=>{setStepNumber(0)}}>Voltar</Button>
                <Button variant="contained" className="buttonNext" onClick={()=>{}}>Próximo</Button>
            </div>

        </Style.SecondPageCard>
    )
}

export default SecondPageCard
                