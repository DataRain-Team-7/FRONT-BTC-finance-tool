import Header from "../Header";
import Navbar from "../Navbar";
import { users } from "../../mocks/users";
import * as S from "./style";
import UserCard from "../UserCard/indext";
const UsersPage = () => {
  return (
    <>
      <Header />
      <S.UserAllContent>
      <S.UserNavbar>
        <Navbar />
      </S.UserNavbar>
      <S.UsersPageContainer>
        <S.UsersPageHeader>
          <S.UsersPageTitle>Central de Controle - Usuários</S.UsersPageTitle>
        </S.UsersPageHeader>
        <S.UsersPageContent>
          {users.map((element, index) => {
            return <UserCard user={element} key={element.id} />;
          })}
        </S.UsersPageContent>
      </S.UsersPageContainer>
      </S.UserAllContent>
    </>
  );
};

export default UsersPage;
