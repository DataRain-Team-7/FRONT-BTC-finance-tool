import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { UserTypes } from "../../types/interface";
import * as S from "./style";
import React from "react";

import { Button, MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useUsers } from "../../contexts/userContext";
import Api from "../../services/api";
import { ButtonsContainer } from "../../utils/globalStyles";

interface ModalEditProps {
  user: UserTypes;
  openEditRole: boolean;
  setOpenEditRole: ({ props }: any) => void;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

export default function ModalEditRole({
  user,
  openEditRole,
  setOpenEditRole,
}: ModalEditProps) {
  const handleClose = () => setOpenEditRole(!openEditRole);
  const { handleGetUsers } = useUsers();
  const [role, setRole] = useState<any>([]);
  const [value, setValue] = useState<string>();
  const[value2, setValue2] = useState<string>()
  const[newValue, setNewValue] = useState<boolean>()
  const billable = ['Sim', 'Não']

console.log(value2)

  const getRoles = () => {
    Api.get("/role")
      .then((res) => setRole(res.data))
      .catch((err) => toast.error("Falha ao buscar roles"));
  };

  useEffect(() => {
    getRoles();
  }, []);

  const handleEditUser = () => {
    if(value2 === 'sim'){
      setNewValue(true) 
    } else{
      setNewValue(false)
    }
    const data = {
      billable: newValue,
      roleId: value,
      
    };
    Api.patch(`user/${user.id}`, data)
      .then((res) => {
        toast.success("Usuário editado com sucesso"), res;
        handleGetUsers();
      })
      .catch((error) => {
        toast.error("Falha ao atualizar usuário"), console.log(error);
      });
    handleClose();
  };

  return (
    <div>
      <Modal
        open={openEditRole}
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
            Editar Role
          </Typography>
          <S.FormEdit>
            <TextField
              margin={"normal"}
              label="Selecione a role"
              defaultValue=""
              fullWidth
              select
              SelectProps={{
                multiple: false,
              }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            >
              {role.map((e: any) => {
                return (
                  <MenuItem value={e.id} key={e.id}>
                    {e.name}
                  </MenuItem>
                );
              })}
            </TextField>
            <TextField
              label="Billable"
              fullWidth
              margin={"normal"}
              select
              defaultValue=""
              onChange={(e)=> setValue2(e.target.value) }
            >
              {billable.map((e) => {
                return (
                  <MenuItem value={e}>{e}</MenuItem>
                  )
              })

              }
            </TextField>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
            >
              <ButtonsContainer>
                <Button
                  className="buttonCancel"
                  variant="contained"
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button
                  className="buttonSave"
                  variant="contained"
                  onClick={() => handleEditUser()}
                >
                  Editar
                </Button>
              </ButtonsContainer>
            </Box>
          </S.FormEdit>
        </Box>
      </Modal>
    </div>
  );
}
