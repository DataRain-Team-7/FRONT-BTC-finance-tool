import * as S from "./style";

import { ProjectTypes, TeamsTypes } from "../../types/interface";
import MenuDropdown from "../MenuDropdownTeams";
import { useAuth } from "../../contexts/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props{
  project: ProjectTypes;
}

const ProjectLi = ({project}: Props) => {
  const navigate = useNavigate()

  return (
    <S.ProjectLi onClick={()=> navigate(`/project-page/${project.id}`)}>
      <S.LiContent>
        <S.DivContent>
          <span>{project.name}</span>
        </S.DivContent>
      </S.LiContent>
    </S.ProjectLi>
  );
};

export default ProjectLi;
