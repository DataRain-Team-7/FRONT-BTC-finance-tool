import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import defaultImage from "../../assets/images/userDefault.png";
import Api from "../../services/api";
import * as Style from "../CreateAccountCard/style";
import React from "react";
import Header from "../Header";

const CreateClientCard = () => {
  const navigate = useNavigate();

  interface CreateAccountData {
    name: string;
    email: string;
    position: string;
  }

  const registerSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    position: yup.string().required("Função obrigatória"),
  });

  const handleErrorMessage = () => {
    if (errors.name) {
      toast.error(`${errors.name?.message}`);
      clearErrors();
    } else if (errors.email) {
      toast.error(`${errors.email?.message}`);
      clearErrors();
    } else if (errors.position) {
      toast.error(`${errors.position?.message}`);
      clearErrors();
    } else {
      clearErrors;
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<CreateAccountData>({ resolver: yupResolver(registerSchema) });

  const handleRegister = (data: CreateAccountData) => {
    if (data.name !== "" || data.email !== "" || data.position !== "") {
      const dataCreate = {
        name: data.name,
        email: data.email,
        position: data.position,
      };
      Api.post("/user", dataCreate)
        .then((res) => {
          toast.success("Confira sua caixa de entrada e valide seu email");
        })
        .catch((error) => {
          toast.error("Erro ao realizar cadastro");
        });
    } else {
      toast.error("Preencha todos os campos");
    }
  };

  return (
    <>
    <Header/>
      <Style.CreateAccountContainer>
        <Style.CreateAccountCard onSubmit={handleSubmit(handleRegister)}>
          <Style.CreateUserTitleContainer>
            <h1 className="h1title">Criar novo cliente</h1>
          </Style.CreateUserTitleContainer>
          <Style.InputsContainer>
            <Style.InputLabel>Email</Style.InputLabel>
            <Style.Inputs type="email" {...register("email")} />
            <Style.InputLabel>Telefone</Style.InputLabel>
            <Style.Inputs type="tel" />
            <Style.InputLabel>Nome do cliente</Style.InputLabel>
            <Style.Inputs type="text" {...register("name")} />
            <Style.InputLabel>Nome do contato principal</Style.InputLabel>
            <Style.Inputs />
            <Style.InputLabel>Nome do contato técnico</Style.InputLabel>
            <Style.Inputs />
            <Style.InputLabel>Telefone do contato técnico</Style.InputLabel>
            <Style.Inputs type="tel" />
            <Style.InputLabel>E-mail do contato técnico</Style.InputLabel>
            <Style.Inputs type="email" />
          </Style.InputsContainer>
          <Style.ButtonsContainer>
            <Button
              variant="contained"
              className="buttonCancel"
              onClick={() => navigate("/home")}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              className="buttonRegister"
              onClick={() => handleErrorMessage()}
            >
              Cadastrar
            </Button>
          </Style.ButtonsContainer>
        </Style.CreateAccountCard>
      </Style.CreateAccountContainer>
    </>
  );
};

export default CreateClientCard;
