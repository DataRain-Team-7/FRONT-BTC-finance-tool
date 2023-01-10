import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { TeamsTypes } from "../../types/interface";
import * as S from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import TeamService from "../../services/teams-service";

interface ModalEditProps {
  team: TeamsTypes;
  openEditModal: boolean;
  setOpenEditModal: ({props}: any) => void
}

interface EditTeamData {
  id?: string;
  name: string;
  valuePerHour: number;
}

const updateTeamSchema = yup.object().shape({
  name: yup.string().required("Nome da equipe obrigatória"),

  valuePerHour: yup.number().required("Campo obrigatório"),
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 300,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

export default function ModalEditTeam({ team, openEditModal, setOpenEditModal }: ModalEditProps) {
  const handleClose = () => setOpenEditModal(!openEditModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditTeamData>({ resolver: yupResolver(updateTeamSchema) });

  const handleEditTeam = (values: EditTeamData) => {
    const teamId = team.id || "";
    TeamService.editTeam(teamId, values);
    handleClose();
    getAll();
  };

  const getAll = () => {
    TeamService.findAllTeams();
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <Modal
        open={openEditModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginTop="10px"
          sx={style}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar Equipe
          </Typography>
          <S.FormEdit onSubmit={handleSubmit(handleEditTeam)}>
            <S.LabelEdit htmlFor="name">
              {" "}
              Equipe:
              <S.InputEditTeam
                defaultValue={team.name}
                type="text"
                {...register("name")}
              />
            </S.LabelEdit>

            <S.LabelEdit htmlFor="valuePerHour">
              {" "}
              R$:
              <S.InputEditTeam
                defaultValue={team.valuePerHour}
                type="number"
                {...register("valuePerHour")}
              />
            </S.LabelEdit>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
            >
              <S.ButtonCancel onClick={handleClose}>Cancelar</S.ButtonCancel>
              <S.ButtonEdit type="submit">Editar</S.ButtonEdit>
            </Box>
          </S.FormEdit>
        </Box>
      </Modal>
    </div>
  );
}
