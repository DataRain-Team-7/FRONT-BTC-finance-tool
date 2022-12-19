import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { User } from "../../types/interface";
import * as S from "./style";

interface ModalDeleteProps {
  user: User;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  heigt: 500,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius:6,
  p: 4,
};

export default function ModalDeleteTeam({ user }: ModalDeleteProps) {
  const [open, setOpen] = React.useState(true);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box display="flex" flexDirection="column" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Dejesa excluir o usuário {user.name}?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <Box display="flex" alignItems="center" justifyContent="center">
            <S.ButtonDropdownNo onClick={handleClose}>Não</S.ButtonDropdownNo>
            <S.ButtonDropdownYes
              onClick={() => {
                {handleClose}
                console.log(`Excluída equipe ${user.id}`)}}
            >
              Sim
            </S.ButtonDropdownYes>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
