import * as S from "./style";
import defaultImage from "../../assets/images/userDefault.png";
import { useState } from "react";
import ModalAddUserToProject from "../ModalAddUserProject";
import { ProjectTypes } from "../../types/interface";

interface MockedProps {
  project: ProjectTypes;
}

const MockedUserCard = ({project}: MockedProps) => {
  const [openModalAdd, setOpenModalAdd] = useState<boolean>(false);
  return (
    <S.MockedUserContainer>
      <S.MockedUserContent>
        <S.UserPhotoContainer>
          <img
            className="imagesProfile"
            src={defaultImage}
            onClick={() => setOpenModalAdd(!openModalAdd)}
          />
        </S.UserPhotoContainer>
        <S.MockedUserTitle>Adicionar Colaborador</S.MockedUserTitle>
      </S.MockedUserContent>
      {
        openModalAdd ? (
          <ModalAddUserToProject project={project} setOpenModalAdd={setOpenModalAdd} openModalAdd={openModalAdd}/>
        ) : null
      }
    </S.MockedUserContainer>
  );
};

export default MockedUserCard;
