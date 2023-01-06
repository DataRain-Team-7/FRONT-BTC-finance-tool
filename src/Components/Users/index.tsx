import { useEffect, useState } from "react";
import UserService from "../../services/user-service";
import { UserTypes } from "../../types/interface";
import Header from "../Header";
import Navbar from "../Navbar";
import UserCard from "../UserCard/indext";
import * as S from "./style";


const UsersPage = () => {
  const[values, setValues] = useState<UserTypes[]>([])

  useEffect(() => {
    getAllUsers()
  },[])

  const getAllUsers = async () => {
    const res: any = await UserService.findAllUsers() ;
    setValues([...res.data]);
  };
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
          {values.map((element, index) => {
            return <UserCard user={element} key={element.id} />;
          })}
        </S.UsersPageContent>
      </S.UsersPageContainer>
      </S.UserAllContent>
    </>
  );
};

export default UsersPage;
