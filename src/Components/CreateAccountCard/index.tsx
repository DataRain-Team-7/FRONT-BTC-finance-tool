import * as Style from "./style";
import defaultImage from "../../assets/images/userDefault.png"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Api from "../../services/api";
import { useAuth } from "../../contexts/auth";

const CreateAccountCard = () => {

  const { login } = useAuth()
  const navigate = useNavigate()

  interface CreateAccountData {
    name: string;
    email: string;
    phone: string;
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
      .string(),
    password: yup
      .string()
      .min(1, "Senha obrigatória")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/\|.()])[0-9a-zA-Z$*&@#!:;/\|.()]{8,}$/,
      "A senha deve conter um carácter especial, um número e ao menos uma letra maiúscula"),
    confirmPassword: yup
      .string()
      .min(1, "Confirme sua senha"),
    role: yup
      .string()
      .required("Tipo de conta obrigatório")
  })

  const handleErrorMessage = () =>{
    if(errors.name){
      toast.error(`${errors.name?.message}`)
      clearErrors()
    }else if(errors.email){
      toast.error(`${errors.email?.message}`)
      clearErrors()
    }else if(errors.phone){
      toast.error(`${errors.phone?.message}`)
      clearErrors()
    }else
    if(errors.password){
      toast.error(`${errors.password?.message}`)
      clearErrors()
    }else if(errors.confirmPassword){
      toast.error(`${errors.confirmPassword?.message}`)
      clearErrors()
    }else if(errors.role){
      toast.error(`${errors.role?.message}`)
      clearErrors()
    }else{
      clearErrors
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<CreateAccountData>({ resolver: yupResolver(registerSchema) });

  const handleRegister = (data:CreateAccountData) =>{
    if(data.name !=="" || data.email !=="" || data.phone !=="" || data.password !=="" || data.confirmPassword !=="" || data.role !==""){
      if(data.password === data.confirmPassword){
        Api.post("/user", data)
          .then((res)=>{
            // toast.success("Cadastro bem sucedido!")
            const loginData = {
              email: data.email,
              password: data.password
            }
            Api.post("/auth/login", loginData)
              .then((res)=>{
                login({token: res.data.token, user: res.data.user, isChecked: true})
              })
              .catch(()=>{
                toast.error("Erro ao efetuar login")
              })
          })
          .catch((error)=>{
            toast.error("Erro ao realizar cadastro")
          })
      }else{
        toast.error("As senhas não coincidem")
      }
    }else{
      toast.error("Preencha todos os campos")
    }
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
            <Style.Inputs type="string" {...register("phone")}/>
            <Style.InputLabel>Senha</Style.InputLabel>
            <Style.Inputs type="password" {...register("password")}/>
            <Style.InputLabel>Confirmar senha</Style.InputLabel>
            <Style.Inputs type="password" {...register("confirmPassword")}/>
            <Style.InputLabel>Tipo de conta</Style.InputLabel>
            <Style.Inputs {...register("role")}/>
          </Style.InputsContainer>
          <Style.ButtonsContainer>
            <Button variant="contained" className="buttonCancel" onClick={()=>navigate("/")}>Cancelar</Button>
            <Button type="submit" variant="contained" className="buttonRegister" onClick={()=>handleErrorMessage()}>Cadastrar</Button>
          </Style.ButtonsContainer>
        </Style.CreateAccountCard>
      </Style.CreateAccountContainer>
  );
};

export default CreateAccountCard;
