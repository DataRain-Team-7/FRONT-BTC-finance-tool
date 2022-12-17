import * as S from "./style";

import { TeamsTypes } from "../../types/interface";
import MenuDropdown from "../MenuDropdownTeams";

interface MocksInterface {
  team: TeamsTypes;
}

const TeamsLi = ({ team }: MocksInterface) => {

  return (
    <S.TeamsLi>
      <S.LiContent>
        <span>{team.name}</span>
        <span>R$: {team.price.toFixed(2)}</span>
        <MenuDropdown team={team}/>
      </S.LiContent>
    </S.TeamsLi>
  );
};

export default TeamsLi;
