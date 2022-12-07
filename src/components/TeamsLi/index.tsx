import * as S from "./style";

import { TeamsTypes } from "../../types/interface";
import { useState } from "react";
import MenuDropdown from "../MenuDropdown";

interface MocksInterface {
  team: TeamsTypes;
}

const TeamsLi = ({ team }: MocksInterface) => {
  const [open, setOpen] = useState<boolean>(false);

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
