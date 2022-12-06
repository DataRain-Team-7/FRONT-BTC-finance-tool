import * as S from "./style"

import { BsThreeDotsVertical, BsPencil, BsTrash } from "react-icons/bs";
import { TeamsTypes } from "../../types/interface";
import { useState } from "react";

interface MocksInterface {
    team: TeamsTypes;
}


const TeamsLi = ({team}: MocksInterface) => {
    const [open, setOpen]= useState<boolean>(false)
    

    return(
        <S.TeamsLi>
            <S.LiContent>
            <span>{team.name}</span>
            <span>R$: {team.price.toFixed(2)}</span>
            <S.MenuDropdown type="button" onClick={() => {
                setOpen(!open)
                // console.log(open)
                }}> <BsThreeDotsVertical/>
                {
                    open ? (
                    <S.DropdownUl>
                        <S.DropdownLi><span><BsPencil/></span>Editar</S.DropdownLi>
                        <S.DropdownLi><span><BsTrash/></span>Excluir</S.DropdownLi>
                    </S.DropdownUl>
                ) : null}
            </S.MenuDropdown>

            </S.LiContent>
        </S.TeamsLi>
    )
}

export default TeamsLi;