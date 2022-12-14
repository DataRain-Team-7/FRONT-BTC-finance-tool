import * as Style from "./style";
import defaultImage from "../../assets/images/userDefault.png"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CreateAccountCard = () => {

  const navigate = useNavigate()

  interface CreateAccountData {
    name: string;
    email: string;
    phone: number;
    password: string;
    confirmPassword: string;
    role: string;
  }

  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório"),
    email: yup
      .string()
      .email("Email inválido")
      .required("Email obrigatório"),
    phone: yup
      .number(),
    password: yup
      .string()
      .min(1, "Senha obrigatória")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/\|.()])[0-9a-zA-Z$*&@#!:;/\|.()]{8,}$/),
    confirmPassword: yup
      .string()
      .min(1, "Confirme sua senha"),
    role: yup
      .string()
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<CreateAccountData>({ resolver: yupResolver(registerSchema) });

  const handleRegister = (data:CreateAccountData) =>{
    console.log(data)
  }
  
  return (
    <Style.CreateAccountContainer>
        <Style.CreateAccountCard onSubmit={handleSubmit(handleRegister)}>
          <Style.CreateUserTitleContainer>
              <h1 className="h1title">Criar novo usuário</h1>
          </Style.CreateUserTitleContainer>
          <Style.UserPhotoContainer>
            <img
              className="imagesProfile"
              src={defaultImage}
            ></img>
          </Style.UserPhotoContainer>
          <Style.InputsContainer>
            <Style.InputLabel>Nome completo</Style.InputLabel>
            <Style.Inputs type="text" {...register("name")}/>
            <Style.InputLabel>Email</Style.InputLabel>
            <Style.Inputs type="text" {...register("email")}/>
            <Style.InputLabel>Número de telefone</Style.InputLabel>
            <Style.Inputs type="number" {...register("phone")}/>
            <Style.InputLabel>Senha</Style.InputLabel>
            <Style.Inputs type="password" {...register("password")}/>
            <Style.InputLabel>Confirmar senha</Style.InputLabel>
            <Style.Inputs type="password" {...register("confirmPassword")}/>
            <Style.InputLabel>Tipo de conta</Style.InputLabel>
            <Style.Inputs {...register("role")}/>
          </Style.InputsContainer>
          <Style.ButtonsContainer>
            <Button variant="contained" className="buttonCancel" onClick={()=>navigate("/")}>Cancelar</Button>
            <Button type="submit" variant="contained" className="buttonRegiste">Cadastrar</Button>
          </Style.ButtonsContainer>
        </Style.CreateAccountCard>
      </Style.CreateAccountContainer>
  );
};

export default CreateAccountCard;
