import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import MockedUserCard from "../MockedUserCard";
import * as S from "./style";
import React, { useEffect, useState } from "react";
import { useActive } from "../../contexts/activePage";
import { ProjectTypes } from "../../types/interface";
import Api from "../../services/api";

interface ProjectProps {
  project: ProjectTypes;
}

const ProjectPage = () => {
  const navigate = useNavigate();
  const { setActive } = useActive();
  const { id } = useParams();
  const [values, setValues] = useState({} as ProjectTypes);

  const getAnProject = () => {
    Api.get(`/project/${id}`)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnProject();
  }, []);

  return (
    <>
      <Header />
      <S.ProjectAllContainer>
        <S.ProjectPageContainer>
          <S.ProjectPageReturn>
            {" "}
            <S.BackIcon
              onClick={() => {
                navigate("/projects");
                setActive("projects");
              }}
            />{" "}
          </S.ProjectPageReturn>
          <S.ProjectPageHeader>
            <div>
              {" "}
              <S.EditIcon /> <span>Editar</span>
            </div>
            <S.ProjectHeaderTitle>{values.name}</S.ProjectHeaderTitle>
            <S.ProjectHeaderSubtitle>
              {" "}
              Valor total por hora - R$: 999,00
            </S.ProjectHeaderSubtitle>
            <S.ProjectDescription>{values.description}</S.ProjectDescription>
          </S.ProjectPageHeader>
          <S.ProjectPageContent>
            <MockedUserCard project={values}/>
          </S.ProjectPageContent>
        </S.ProjectPageContainer>
      </S.ProjectAllContainer>
    </>
  );
};

export default ProjectPage;
