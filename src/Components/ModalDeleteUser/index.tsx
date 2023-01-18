import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { UserTypes } from "../../types/interface";
import * as S from "./style";
import UserService from "../../services/user-service";
import { useEffect } from "react";
import Api from "../../services/api";
import toast from "react-hot-toast";
import { useUsers } from "../../contexts/userContext";

interface ModalDeleteProps {
  user: UserTypes;
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
  const handleClose = () => setOpen(false);
  const{ handleGetUsers } = useUsers()

  const deleteUser = (id:any) =>{
    Api.delete(`user/${id}`).
        then((res) => {
          toast.success("Usuário deletado"), res;
          handleClose();
          handleGetUsers()
        }).
        catch((error) => {toast.error("Falha ao deletar usuário"), error})
  } 


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box display="flex" flexDirection="column" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Deseja excluir o usuário {user.name}?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <Box display="flex" alignItems="center" justifyContent="center">
            <S.ButtonDropdownNo onClick={handleClose}>Não</S.ButtonDropdownNo>
            <S.ButtonDropdownYes
              onClick={() => {
                deleteUser(user.id)
                {handleClose}}}
            >
              Sim
            </S.ButtonDropdownYes>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
