import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { ProjectTypes } from "../../types/interface";
import MenuDropdownProject from "../MenuDropdownProject";

interface Props {
  project: ProjectTypes;
}

const ProjectLi = ({ project }: Props) => {
  const navigate = useNavigate();

  return (
    <S.ProjectLi>
      <S.LiContent>
        <S.DivContent>
          <span className="span-li" onClick={() => navigate(`/project-page/${project.id}`)}>
            {project.name}
          </span>
          <span className="span-dropdown">
            {" "}
            <MenuDropdownProject project={project} />{" "}
          </span>
        </S.DivContent>
      </S.LiContent>
    </S.ProjectLi>
  );
};

export default ProjectLi;
