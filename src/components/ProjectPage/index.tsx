import { useNavigate } from "react-router-dom";
import Header from "../Header";
import MockedUserCard from "../MockedUserCard";
import * as S from "./style";
import React from "react";
import { useActive } from "../../contexts/activePage";


const ProjectPage = () => {
  const navigate = useNavigate();
  const { setActive } = useActive()

  return (
    <>
      <Header setSearch={""}/>
      <S.ProjectAllContainer>
        <S.ProjectPageContainer>
          <S.ProjectPageReturn>
            {" "}
            <S.BackIcon onClick={() => {navigate("/home"); setActive("home")}} />{" "}
          </S.ProjectPageReturn>
          <S.ProjectPageHeader>
            <div>
              {" "}
              <S.EditIcon /> <span>Editar</span>
            </div>
            <S.ProjectHeaderTitle> Projeto 02 DataRain</S.ProjectHeaderTitle>
            <S.ProjectHeaderSubtitle>
              {" "}
              Valor total por hora - R$: 999,00
            </S.ProjectHeaderSubtitle>
          </S.ProjectPageHeader>
          <S.ProjectPageContent>
            <MockedUserCard />
          </S.ProjectPageContent>
        </S.ProjectPageContainer>
      </S.ProjectAllContainer>
    </>
  );
};

export default ProjectPage;
