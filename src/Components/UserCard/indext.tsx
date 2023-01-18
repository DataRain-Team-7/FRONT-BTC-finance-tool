import * as S from "./style";
import MenuDropdownUser from "../MenuDropdownUser";
import { UserTypes } from "../../types/interface";

interface MocksUser {
  user: UserTypes;
  className?: string;
}

const UserCard = ({ user, className }: MocksUser) => {
  return (
    <S.CardContainer className={className}>
      <S.CardHeader>
        <S.CardFunction>{user.roleName}</S.CardFunction>

        <span>
          <MenuDropdownUser user={user} />
        </span>
      </S.CardHeader>
      <S.CardImage src={user.imageUrl} alt="Imagem perfil" />
      <S.CardName>{user.name}</S.CardName>
      <S.CardEmail>{user.email}</S.CardEmail>
    </S.CardContainer>
  );
};

export default UserCard;
