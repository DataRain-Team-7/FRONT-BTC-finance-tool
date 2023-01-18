import * as Style from "./style"
import { Dispatch, SetStateAction, useState } from "react";
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import FormModal from "../FormModal";
import { useQuestions } from "../../../contexts/questions";


interface FirstPageProp {
    setStepNumber: Dispatch<SetStateAction<number>>
}

const SecondPageCard = ({setStepNumber}:FirstPageProp) =>{

    const [ count, setCount] = useState<number>(0)

    const handleBack = () =>{
        if(count === 0){
            setStepNumber(0)
        }else{
            setCount(count - 1)
        }
    }

    const handleNext = () =>{
        if(count === questions.length-1){
            setIsModalOpen(true)
            //aqui o questionario foi preenchido
        }else{
            setCount(count + 1)
            //aqui deve ser adicionado cada resposta nova no objeto
        }
    }

    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false)
    const { questions } = useQuestions()
    console.log(questions)
     

    return(
        <Style.SecondPageCard>
            <section >
                    <h3>{`${count+1}- ${questions[count].description}`}</h3>
                <FormControl className="FormControl">
                    <RadioGroup onChange={()=>{}}>
                        {questions[count].alternatives.map((e:any)=>{                    
                            return <FormControlLabel value={e.id} control={<Radio />} label={e.description} />
                        })}
                    </RadioGroup>                   
                </FormControl>
                <textarea wrap="hard" placeholder="Comentário adicional"></textarea>
                {/* <div onClick={()=>console.log(questions[count].alternatives.map((e:any)=>{return e.description}))}>Botaão louco</div> */}
            </section>
            <div className="pageButtons">
                <Button variant="contained" className="buttonBack" onClick={()=>handleBack()}>Voltar</Button>
                <Button variant="contained" className="buttonNext" onClick={()=>handleNext()}>Próximo</Button>
            </div>
            {isModalOpen && <FormModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setStepNumber={setStepNumber}/>}
        </Style.SecondPageCard>
    )
}

export default SecondPageCard
                