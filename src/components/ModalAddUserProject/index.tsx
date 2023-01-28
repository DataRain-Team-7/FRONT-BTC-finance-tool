import { Button, MenuItem, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useUsers } from "../../contexts/userContext";
import Api from "../../services/api";
import { ProjectTypes } from "../../types/interface";
import * as S from "./style";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 350,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

interface ModalAddProps {
  openModalAdd: boolean;
  setOpenModalAdd: ({ props }: any) => void;
  project: ProjectTypes;
}

const ModalAddUserToProject = ({
  project,
  openModalAdd,
  setOpenModalAdd,
}: ModalAddProps) => {
  const handleClose = () => setOpenModalAdd(!openModalAdd);
  const { user } = useUsers();
  const [value, setValue] = useState<string>();
  const [value2, setValue2] = useState<string>("");

  const number = parseFloat(value2);

  const avaliableUsers = user.filter(
    (element) =>
      element.roleName == "manager" ||
      element.roleName == "professional services"
  );

  const handleAddUser = () => {
    const data = {
      projectId: project.id,
      userId: value,
      valuePerUserHour: number,
    };
    Api.post("/project/add-user", data)
      .then((res) => {
        res;
        toast.success("Usuário adicionado ao projeto");
        handleClose()
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha ao adicionar usuário ao projeto");
      });
  };

  return (
    <div>
      <Modal
        open={openModalAdd}
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
          <form onSubmit={(e) => e.preventDefault()}>
            <TextField
              label="Selecione o usuário"
              fullWidth
              required
              select
              onChange={(e) => {
                setValue(e.target.value);
              }}
              SelectProps={{
                multiple: false,
              }}
            >
              {avaliableUsers.map((element) => {
                return (
                  <MenuItem value={element.id}>
                    {element.name} <br /> {element.email}
                  </MenuItem>
                );
              })}
            </TextField>

            <TextField
              type="number"
              label="Valor da hora"
              required
              fullWidth
              margin={"normal"}
              size="small"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue2((e.target.value as string) || "")
              }
            ></TextField>
            <S.ButtonsContainer>
              <Button
                variant="contained"
                className="buttonCancel"
                onClick={handleClose}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                className="buttonSave"
                onClick={() => handleAddUser()}
              >
                Adicionar
              </Button>
            </S.ButtonsContainer>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddUserToProject;
