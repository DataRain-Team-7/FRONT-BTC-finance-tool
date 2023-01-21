import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import defaultImage from "../../assets/images/userDefault.png";
import Api from "../../services/api";
import * as Style from "../../components/CreateAccountCard/style";

const CreateAccountCard = () => {
  const navigate = useNavigate();

  interface CreateAccountData {
    name: string;
    email: string;
    position: string;
  }

  const registerSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    // phone: yup.string(),
    // password: yup
    //   .string()
    //   .min(1, "Senha obrigatória")
    //   .matches(
    //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/\|.()])[0-9a-zA-Z$*&@#!:;/\|.()]{8,}$/,
    //     "A senha deve conter um carácter especial, um número e ao menos uma letra maiúscula"
    //   ),
    // confirmPassword: yup.string().min(1, "Confirme sua senha"),
    // role: yup.string().required("Tipo de conta obrigatório"),
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
      // if (data.password === data.confirmPassword) {
      //   const loginData = {
      //     email: data.email,
      //     password: data.password,
      //   };
      //   Api.post("/user", loginData)
      //     .then((res) => {
      //       toast.success("Cadastro bem sucedido!");
      //     })
      //     .catch((error) => {
      //       toast.error("Erro ao realizar cadastro");
      //     });
      // } else {
      //   toast.error("As senhas não coincidem");
      // }
      const dataCreate = {
        name: data.name,
        email: data.email,
        position: data.position,
      };
      Api.post("/user", dataCreate)
        .then((res) => {
          toast.success("Cadastro bem sucedido!");
        })
        .catch((error) => {
          toast.error("Erro ao realizar cadastro");
        });
    } else {
      toast.error("Preencha todos os campos");
    }
  };

  return (
    <Style.CreateAccountContainer>
      <Style.CreateAccountCard onSubmit={handleSubmit(handleRegister)}>
        <Style.CreateUserTitleContainer>
          <h1 className="h1title">Criar novo usuário</h1>
        </Style.CreateUserTitleContainer>
        <Style.UserPhotoContainer>
          <img className="imagesProfile" src={defaultImage}></img>
        </Style.UserPhotoContainer>
        <Style.InputsContainer>
          <Style.InputLabel>Nome completo</Style.InputLabel>
          <Style.Inputs type="text" {...register("name")} />
          <Style.InputLabel>Email</Style.InputLabel>
          <Style.Inputs type="text" {...register("email")} />
          <Style.InputLabel>Função</Style.InputLabel>
          <Style.Inputs {...register("position")} />
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
  );
};

export default CreateAccountCard;
