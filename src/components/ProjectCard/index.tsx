import { UserTypes } from "../../types/interface";
import * as S from "./style";

interface UserProps {
  user:UserTypes ;
}

const ProjectCard = ({ user }: any) => {


  return (
    <S.CardContainer>
      <S.CardHeader>
        <S.CardFunction>{user.user.roleName}</S.CardFunction>
        <span>
        </span>
      </S.CardHeader>
      <S.CardName>{user.user.name}</S.CardName>
      <S.CardName>{user.user.position}</S.CardName>
      <S.CardName>Hora: {(user.valuePerUserHour).toFixed(2)}</S.CardName>

    </S.CardContainer>
  );
};

export default ProjectCard;
