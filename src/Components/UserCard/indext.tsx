import * as S from "./style";
import MenuDropdownUser from "../MenuDropdownUser";
import { User } from "../../types/interface";

interface MocksUser {
  user: User;
  className?: string;
}

const UserCard = ({ user, className }: MocksUser) => {

  const privilege = true;
  return (
    <S.CardContainer className={className}>
      <S.CardHeader>
        <S.CardFunction>{user.role}</S.CardFunction>
        {
          privilege ? (
          <span>
            <MenuDropdownUser user={user} />
          </span>
          ) : null
        }
      </S.CardHeader>
      <S.CardImage src={user.image} alt="Imagem perfil" />
      <S.CardName>{user.name}</S.CardName>
      <S.CardEmail>{user.email}</S.CardEmail>
    </S.CardContainer>
  );
};

export default UserCard;
