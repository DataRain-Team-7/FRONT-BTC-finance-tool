import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { TeamsTypes } from "../../types/interface";
import * as S from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import TeamService from "../../services/teams-service";
import { useEffect, useState } from "react";

interface ModalCreateProps {
  team: TeamsTypes;
}

interface CreateTeamData {
  id?: string;
  name: string;
  valuePerHour: number;
}

const createTeamSchema = yup.object().shape({
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

export default function ModalCreateTeam() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTeamData>({ resolver: yupResolver(createTeamSchema) });

const handleCreateTeam = (data: CreateTeamData) =>{
  TeamService.createTeam(data)
  handleClose()
}

  return (
    <div>
      <Modal
        open={open}
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
            Criar Equipe
          </Typography>
          <S.FormCreate onSubmit={handleSubmit(handleCreateTeam)}>
            <S.LabelCreate htmlFor="name">
              {" "}
              Nome da Equipe:
              <S.InputCreateTeam
                type="text"
                {...register("name")}
              />
            </S.LabelCreate>

            <S.LabelCreate htmlFor="valuePerHour">
              {" "}
              Valor hora R$:
              <S.InputCreateTeam
                type="number"
                {...register("valuePerHour")}
              />
            </S.LabelCreate>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
            >
              <S.ButtonCancel onClick={handleClose}>Cancelar</S.ButtonCancel>
              <S.ButtonCreate type="submit">Criar</S.ButtonCreate>
            </Box>
          </S.FormCreate>
        </Box>
      </Modal>
    </div>
  );
}
