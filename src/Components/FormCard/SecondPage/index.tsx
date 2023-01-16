import * as Style from "./style"
import { Dispatch, SetStateAction, useState } from "react";
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import FormModal from "../FormModal";
import { useQuestions } from "../../../contexts/questions";

// const questions:any = [
//     {
//         id:"4545956",
//         description: "Quem veio primeiro, o ovo ou a galinha?",
//         alternatives:[
//             {
//                 id:"56156156",
//                 description:"A galinha veio primeiro"
//             },
//             {
//                 id:"56198561",
//                 description:"O ovo veio primeiro"
//             },
//             {
//                 id:"97156156",
//                 description:"Os dois vieram juntos"
//             },
//             {
//                 id:"56156696",
//                 description:"Nenhuma das alternativas"
//             }
//         ]
//     },
//     {
//         id:"5964196",
//         description: "Com quantos paus se faz uma canoa?",
//         alternatives:[
//             {
//                 id:"98915216",
//                 description:"Com apenas um pau"
//             },
//             {
//                 id:"41564532",
//                 description:"Depende do tamando da canoa"
//             },
//             {
//                 id:"567489602",
//                 description:"Canoa nao se faz com pau"
//             },
//             {
//                 id:"056159645",
//                 description:"Muitos paus são necessários"
//             }
//         ]
//     },

// ]

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
        }else{
            setCount(count + 1)
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
                