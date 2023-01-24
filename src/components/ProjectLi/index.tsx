import * as S from "./style";

import { TeamsTypes } from "../../types/interface";
import MenuDropdown from "../MenuDropdownTeams";
import { useAuth } from "../../contexts/auth";
import React from "react";

const ProjectLi = () => {
  return (
    <S.ProjectLi>
      <S.LiContent>
        <S.DivContent>
          <span>Projeto 1</span>
        </S.DivContent>
      </S.LiContent>
    </S.ProjectLi>
  );
};

export default ProjectLi;
