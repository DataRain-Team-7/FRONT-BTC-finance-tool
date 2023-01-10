import * as S from "./style";

import { TeamsTypes } from "../../types/interface";
import MenuDropdown from "../MenuDropdownTeams";

interface MocksInterface {
  team: TeamsTypes;
}

const TeamsLi = ({ team }: MocksInterface) => {

   const userStorage = JSON.parse(localStorage.getItem('user') || "{}")


   

  return (
    <S.TeamsLi>
      <S.LiContent>
        <span>{team.name}</span>
        <span>R$: {team.valuePerHour}</span>
        {
          userStorage.roleName === "admin" ? <MenuDropdown team={team}/> : null
        }
      </S.LiContent>
    </S.TeamsLi>
  );
};

export default TeamsLi;
