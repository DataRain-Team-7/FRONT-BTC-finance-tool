import Header from "../Header";
import Navbar from "../Navbar";
import ProjectLi from "../ProjectLi";
import * as S from "./style";

const AllProjects = () => {
  return (
    <>
      <Header />
      <S.AllContainer>
        <S.ProjectNavbar>
          <Navbar />
        </S.ProjectNavbar>
        <S.ProjectsContainer>
          <S.ProjectsHeader>
            <S.ProjectsTitle>Central de Controle - Projetos</S.ProjectsTitle>
          </S.ProjectsHeader>
          <S.ProjectsContent>
            <S.ProjectsUl>
              <S.NewProject>
                <S.NewProjectContent>
                  <span>Criar outro projeto</span>
                  <span>
                    {" "}
                    <S.AddProjectIcon />
                  </span>
                </S.NewProjectContent>
              </S.NewProject>
              <ProjectLi />
              <ProjectLi />
              <ProjectLi />
              <ProjectLi />
              <ProjectLi />
              <ProjectLi />
              <ProjectLi />
              <ProjectLi />
              <ProjectLi />
              <ProjectLi />
            </S.ProjectsUl>
          </S.ProjectsContent>
        </S.ProjectsContainer>
      </S.AllContainer>
    </>
  );
};

export default AllProjects;
