import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useActive } from "../../contexts/activePage";
import Api from "../../services/api";
import { ProjectTypes } from "../../types/interface";
import Header from "../Header";
import MockedUserCard from "../MockedUserCard";
import ProjectCard from "../ProjectCard";
import * as S from "./style";


const ProjectPage = () => {
  const navigate = useNavigate();
  const { setActive } = useActive();
  const { id } = useParams();
  const [values, setValues] = useState<ProjectTypes>({} as ProjectTypes);
  const [valueUser, setValueUser] = useState<any>([]);

  const getAnProject = () => {
    Api.get(`/project/${id}`)
      .then((res) => {
        setValues(res.data);
        setValueUser(res.data.users)
      })
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
            <S.ProjectHeaderTitle>Nome</S.ProjectHeaderTitle>
            <S.ProjectHeaderSubtitle>
              {" "}
              Valor total por hora - R$: 999,00
            </S.ProjectHeaderSubtitle>
            <S.ProjectDescription>Descrição</S.ProjectDescription>
          </S.ProjectPageHeader>
          <S.ProjectPageContent>
            <>
              <MockedUserCard project={values} />
              {valueUser.map((e: any, index: any) => {
                return <ProjectCard user={e} key={index}/>
                // return console.log(e);
              })}
            </> 
          </S.ProjectPageContent>
        </S.ProjectPageContainer>
      </S.ProjectAllContainer>
    </>
  );
};

export default ProjectPage;
