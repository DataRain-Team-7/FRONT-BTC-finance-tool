import Header from "../Header";
import MockedUserCard from "../MockedUserCard";
import UserCard from "../UserCard/indext";
import * as S from "./style";
const ProjectPage = () => {
  const users = [
    {
      id: "1",
      name: "Vini",
      email: "vini@blue.com",
      role: "Manager",
      image: "https://avatars.githubusercontent.com/u/17714550?v=4",
    },
    {
      id: "2",
      name: "Mathias",
      email: "mathias@blue.com",
      role: "PS",
      image: "https://avatars.githubusercontent.com/u/99908779?v=4",
    },
    {
      id: "3",
      name: "Lucas",
      email: "lucas@blue.com",
      role: "PS",
      image: "https://avatars.githubusercontent.com/u/76230078?v=4",
    },
  ];
  return (
    <>
      <Header />
      <S.ProjectAllContainer>
        <S.ProjectPageContainer>
          <S.ProjectPageReturn>
            {" "}
            <S.BackIcon />{" "}
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
            {users.map((element, index) => {
              return <UserCard user={element} key={index} className="teste" />;
            })}
          </S.ProjectPageContent>
        </S.ProjectPageContainer>
      </S.ProjectAllContainer>
    </>
  );
};

export default ProjectPage;
