import * as S from "./style";
import MenuDropdownUser from "../MenuDropdownUser";
import { User } from "../../types/interface";

interface MocksUser {
  user: User;
}

const UserCard = ({ user }: MocksUser) => {
  return (
    <S.CardContainer>
      <S.CardHeader>
        <S.CardFunction>{user.role}</S.CardFunction>
        <div>
          <MenuDropdownUser user={user} />
        </div>
      </S.CardHeader>
      <S.CardImage src={user.image} alt="Imagem perfil" />
      <S.CardName>{user.name}</S.CardName>
      <S.CardEmail>{user.email}</S.CardEmail>
    </S.CardContainer>
  );
};

export default UserCard;
