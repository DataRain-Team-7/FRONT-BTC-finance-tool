import { useNavigate } from "react-router-dom";
import { useActive } from "../../contexts/activePage";
import Header from "../Header";
import MockedUserCard from "../ModalCreateTeam/MockedUserCard";
import UserCard from "../UserCard/indext.tsx";
import * as S from "./style";
const ProjectPage = () => {
  const navigate = useNavigate();
  const { active, setActive } = useActive()


  // const users = [
  //   {
  //     id: "1",
  //     name: "Vini",
  //     email: "vini@blue.com",
  //     roleName: "Manager",
  //     imageUrl: "https://avatars.githubusercontent.com/u/17714550?v=4",
  //     position: "",
  //   },
  //   {
  //     id: "2",
  //     name: "Mathias",
  //     email: "mathias@blue.com",
  //     roleName: "PS",
  //     imageUrl: "https://avatars.githubusercontent.com/u/99908779?v=4",
  //     position: "",
  //   },
  //   {
  //     id: "3",
  //     name: "Lucas",
  //     email: "lucas@blue.com",
  //     roleName: "PS",
  //     imageUrl: "https://avatars.githubusercontent.com/u/76230078?v=4",
  //     position: "",
  //   },
  // ];
  return (
    <>
      <Header />
      <S.ProjectAllContainer>
        <S.ProjectPageContainer>
          <S.ProjectPageReturn>
            {" "}
            <S.BackIcon onClick={() => {navigate("/home"); setActive("home") }} />{" "}
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
            {/* {users.map((element, index) => {
              console.log(element)
              return <UserCard user={element} key={index} className="teste" />; */}
            {/* })} */}
          </S.ProjectPageContent>
        </S.ProjectPageContainer>
      </S.ProjectAllContainer>
    </>
  );
};

export default ProjectPage;
