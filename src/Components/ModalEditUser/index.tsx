import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { UserTypes } from "../../types/interface";
import * as S from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Api from "../../services/api";
import { toast } from "react-hot-toast";

interface ModalEditUserProps {
  userStorage: UserTypes;
  openModal: boolean;
  setOpenModal: ({ props }: any) => void;
}

interface EditUserData {
  name: string;
  email: string;
  currentPassword: string;
  password: string;
  confirmPassword: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 500,
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
  currentPassword: yup.string().min(1, "Antiga senha obrigatória"),
  password: yup
    .string()
    .min(1, "Digite a nova senha")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/\|.()])[0-9a-zA-Z$*&@#!:;/\|.()]{8,}$/,
      "A senha deve conter um carácter especial, um número e ao menos uma letra maiúscula"
    ),
  confirmPassword: yup.string().min(1, "Confirme sua senha"),
});

export default function ModalEditUser({
  userStorage,
  openModal,
  setOpenModal,
}: ModalEditUserProps) {
  const handleClose = () => setOpenModal(!openModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUserData>({ resolver: yupResolver(updateUserSchema) });

  const handleEdit = (data: EditUserData) => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (data.currentPassword !== "") {
      if (data.password === data.confirmPassword) {
        Api.patch("/user", data, headers)
          .then((res) => {
            res;
            toast.success("Usuário editado");
          })
          .catch((error) => {
            error;
            toast.error("Falha ao editar usuário");
          });
         handleClose() 
      } else( toast.error("As senhas não coincidem"))
    } else( toast.error("Preencha o campo senha"))
  };

  return (
    <div>
      <Modal
        open={openModal}
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
          <S.FormEdit onSubmit={handleSubmit(handleEdit)}>
            <S.LabelEdit htmlFor="name">
              {" "}
              Nome:
              <S.InputEditUser
                defaultValue={userStorage.name}
                type="text"
                {...register("name")}
              />
            </S.LabelEdit>

            <S.LabelEdit htmlFor="email">
              {" "}
              Email:
              <S.InputEditUser
                defaultValue={userStorage.email}
                type="email"
                {...register("email")}
              />
            </S.LabelEdit>

            <S.LabelEdit htmlFor="currentPassword">
              {" "}
              Senha Atual:
              <S.InputEditUser type="password" {...register("currentPassword")} />
            </S.LabelEdit>
            <S.LabelEdit htmlFor="password">
              {" "}
              Nova Senha:
              <S.InputEditUser type="password" {...register("password")} />
            </S.LabelEdit>
            <S.LabelEdit htmlFor="confirmPassword">
              {" "}
              Repita Senha:
              <S.InputEditUser
                type="password"
                {...register("confirmPassword")}
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
