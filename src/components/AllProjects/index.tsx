import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useUsers } from "../../contexts/userContext";
import Header from "../Header";
import ModalCreateProject from "../ModalCreateProject";
import Navbar from "../Navbar";
import ProjectLi from "../ProjectLi";
import * as S from "./style";

const AllProjects = () => {
  const [openProjectModal, setOpenProjectModal] = useState<boolean>(false);
  const { userStorage } = useAuth();
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
              {userStorage.roleName === "admin" ? (
                <S.NewProject>
                  <S.NewProjectContent>
                    <span>Criar outro projeto</span>
                    <span>
                      {" "}
                      <S.AddProjectIcon
                        onClick={() => setOpenProjectModal(!openProjectModal)}
                      />
                    </span>
                  </S.NewProjectContent>
                </S.NewProject>
              ) : null}
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
        {openProjectModal ? (
          <ModalCreateProject
            openProjectModal={openProjectModal}
            setOpenProjectModal={setOpenProjectModal}
          />
        ) : null}
      </S.AllContainer>
    </>
  );
};

export default AllProjects;
