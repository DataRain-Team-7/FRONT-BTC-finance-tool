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
    const [ answers, setAnswers ] =useState<any>([])
    const [ value, setValue ] = useState<string>()
    const [ oldValue, setOldValue ] = useState<string>()
    const [ text, setText ] = useState<string>('')
    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false)
    const { questions } = useQuestions()
    
    const data = {
        clientId: idClient,
        responses: answers
    }

    // let teste2 = [
    //     {
    //     questionId: questions[count].id,
    //     alternativeId: value,
    //     responseDetails: text,
    //     }
    // ]

    const handleCurrentQuestion = () =>{
        let content = answers
        content[count] = {
            questionId: questions[count].id,
            alternativeId: value,
            responseDetails: text,
        }
        setAnswers(content)
        setValue(undefined)
        setText("")
        console.log(answers)
    }

    const handleBack = () =>{
        if(count === 0){
            setStepNumber(0)
        }else{
            setCount(count - 1)
        }
        setValue(oldValue)
    }

    const handleNext = () =>{
        if(value !== undefined)setOldValue(value)      
        if(count === questions.length-1){
            setIsModalOpen(true)
            //aqui o questionario foi preenchido
        }else{
            handleCurrentQuestion()
            setCount(count + 1)
            console.log(answers)
            //aqui deve ser adicionado cada resposta nova no objeto
        }
    }

    return(
        <Style.SecondPageCard>
            <section >
                    <h3>{`${count+1}- ${questions[count].description}`}</h3>
                <FormControl className="FormControl">
                    <RadioGroup defaultValue={value} onChange={(e)=>setValue(e.target.value)}>
                        {questions[count].alternatives.map((e:any)=>{                    
                            return <FormControlLabel key={e.id} value={e.id} control={<Radio />} label={e.description}/>
                        })}
                    </RadioGroup>                   
                </FormControl>
                <textarea value={text} onChange={(e)=>setText(e.target.value)} wrap="hard" placeholder="Comentário adicional"></textarea>
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
                