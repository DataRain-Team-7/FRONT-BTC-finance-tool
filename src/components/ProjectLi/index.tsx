import * as S from "./style";

import { ProjectTypes, TeamsTypes } from "../../types/interface";
import MenuDropdown from "../MenuDropdownTeams";
import { useAuth } from "../../contexts/auth";
import React from "react";

interface Props{
  project: ProjectTypes;
}

const ProjectLi = ({project}: Props) => {

  return (
    <S.ProjectLi>
      <S.LiContent>
        <S.DivContent>
          <span>{project.name}</span>
        </S.DivContent>
      </S.LiContent>
    </S.ProjectLi>
  );
};

export default ProjectLi;
