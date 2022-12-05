import Navbar from "../Navbar";
import * as S from "./style";
import { BsThreeDotsVertical, BsPencil, BsTrash } from "react-icons/bs";
import { useRef, useState } from "react";
import { teams } from "../../mocks/teams";

const Teams = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleDropDownFocus = (state: boolean) => {
    setOpen(!state);
  };

  const handleClickOutsideDropdown = (e: any) => {
    if (open && !dropdownRef.current?.contains(e.target as Node)) {
      setOpen(false);
    }
  };
  window.addEventListener("click", handleClickOutsideDropdown);

  const teste= (e:any) => {
    e.curentTarget.classList.add("")
  }
  return (
    <>
      <Navbar />
      <S.TeamsContainer>
        <S.TeamsHeader>
          <S.TeamsTitle>Central de Controle - Equipes</S.TeamsTitle>
        </S.TeamsHeader>
        <S.TeamsContent>
          <S.TeamsSubTitle>
            <p>Equipes</p>
            <p>Valor da Hora</p>
          </S.TeamsSubTitle>
          <S.TeamsUl>
            <S.TeamsLi>
              <S.LiContent ref={dropdownRef}>
                <span>Equipe 01 Datarain</span> <span>R$: 59,00</span>
                <S.MenuDropdown
                  onClick={(e) => {
                    handleDropDownFocus(open);
                  }}
                >
                  <BsThreeDotsVertical />
                </S.MenuDropdown>
                {open && (
                  <>
                    <S.DropdownUl>
                      <S.DropdownLi><span><BsPencil/></span>Editar</S.DropdownLi>
                      <S.DropdownLi><span><BsTrash/></span>Excluir</S.DropdownLi>
                    </S.DropdownUl>
                  </>
                )}
              </S.LiContent>
            </S.TeamsLi>
          </S.TeamsUl>
        </S.TeamsContent>
      </S.TeamsContainer>
    </>
  );
};

export default Teams;
