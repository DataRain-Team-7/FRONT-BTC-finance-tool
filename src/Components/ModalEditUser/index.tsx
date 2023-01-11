import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { UserTypes } from "../../types/interface";
import * as S from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/user-service";

interface ModalEditProps {
  user: UserTypes;
}

interface EditUserData {
  name: string;
  email: string;
  position: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 400,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

const updateUserSchema = yup.object().shape({
  name: yup.string().required("Nome do usuário obrigatório"),

  email: yup
    .string()
    .email("Formato de e-mail inválido")
    .required("E-mail obrigatório"),

  position: yup.string().required("Campo obrigatório"),
});

export default function ModalEditUser({ user }: ModalEditProps) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUserData>({ resolver: yupResolver(updateUserSchema) });

  const handleEditUser = (values: EditUserData) => {
    const userId = user.id || "";
    UserService.editUser(userId, values);
    UserService.findAllUsers()
  };

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
            Editar Usuário
          </Typography>
          <S.FormEdit onSubmit={handleSubmit(handleEditUser)}>
            <S.LabelEdit htmlFor="name">
              {" "}
              Nome:
              <S.InputEditUser
                defaultValue={user.name}
                type="text"
                {...register("name")}
              />
            </S.LabelEdit>

            <S.LabelEdit htmlFor="email">
              {" "}
              Email:
              <S.InputEditUser
                defaultValue={user.email}
                type="email"
                {...register("email")}
              />
            </S.LabelEdit>

            <S.LabelEdit htmlFor="position">
              {" "}
              Cargo:
              <S.InputEditUser
                defaultValue={user.position}
                type="text"
                {...register("position")}
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
