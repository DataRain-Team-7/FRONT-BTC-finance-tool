import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TeamsTypes } from "../../types/interface";
import * as S from "./style";

interface ModalEditProps {
  team: TeamsTypes;
}

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

export default function ModalEditTeam({ team }: ModalEditProps) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

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
            Editar Equipe
          </Typography>
          <S.FormEdit>
            <S.LabelEdit htmlFor="name"> Equipe:
            <S.InputEditTeam defaultValue={team.name} type="text" name="name"/>
            </S.LabelEdit>


            <S.LabelEdit htmlFor="price"> R$:
            <S.InputEditTeam defaultValue={team.price} type="number" name="price" />
            </S.LabelEdit>
          </S.FormEdit>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <S.ButtonCancel onClick={handleClose}>Cancelar</S.ButtonCancel>
            <S.ButtonEdit onClick={() => console.log(`Editada ${team.id}`)}>
              Editar
            </S.ButtonEdit>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
