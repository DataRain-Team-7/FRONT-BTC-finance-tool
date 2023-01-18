import * as Style from "./style"
import { Dispatch, SetStateAction, useState } from "react";
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import FormModal from "../FormModal";
import { useQuestions } from "../../../contexts/questions";
// import React from 'react';


interface FirstPageProp {
    setStepNumber: Dispatch<SetStateAction<number>>
}

const SecondPageCard = ({setStepNumber}:FirstPageProp) =>{

    const idClient = sessionStorage.getItem("clientId")
    const [ count, setCount] = useState<number>(0)
    const [ answers, setAnswers ] =useState<any>()
    const [ value, setValue ] = useState<string>()
    const [ text, setText ] = useState<string>()

    const data = {
        clientId: idClient,
        responses: answers
    }

    // [
    //     {
    //     "questionId": "ac06f36e-4b61-4fe8-8fd6-6ad807ac6282",
    //     "alternativeId": "ac06f36e-4b61-4fe8-8fd6-6ad807ac6282",
    //     "responseDetails": "Preciso que tenham estes detalhes..."
    //     }
    // ]

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
     

    return(
        <Style.SecondPageCard>
            <section >
                    <h3>{`${count+1}- ${questions[count].description}`}</h3>
                <FormControl className="FormControl">
                    <RadioGroup value={value} onChange={(e)=>setValue(e.target.value)}>
                        {questions[count].alternatives.map((e:any)=>{                    
                            return <FormControlLabel value={e.id} control={<Radio />} label={e.description}/>
                        })}
                    </RadioGroup>                   
                </FormControl>
                <textarea onChange={(e)=>setText(e.target.value)} wrap="hard" placeholder="Comentário adicional"></textarea>
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
                