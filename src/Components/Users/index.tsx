import Header from "../Header";
import Navbar from "../Navbar";
import * as S from "./style";
const UsersPage = () => {
  return (
    <>
    <Header/>
    <Navbar/>
      <S.UsersPageContainer>
        <S.UsersPageHeader>
          <S.UsersPageTitle>Central de Controle - Usuários</S.UsersPageTitle>
        </S.UsersPageHeader>
        <S.UsersPageContent></S.UsersPageContent>
      </S.UsersPageContainer>
    </>
  );
};

export default UsersPage;
