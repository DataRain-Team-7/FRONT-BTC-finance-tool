import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Style from "./style"
import Button from '@mui/material/Button';
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/auth";
import Api from "../../services/api";
import Modal from "react-modal";
import ForgotPassword from "../ModalForgortPassword";
import { customStyles } from "../../styles/constants";



interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido")
    .required("Email obrigatório"),
  password: yup.string().min(1, "Senha obrigatória"),
});

const LoginCard = () => {

  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate= useNavigate();
  const { login } = useAuth();

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data:LoginData)=>{
    if(data.email!=="" && data.password!==""){
        return Api.post("/auth/login", data)
             .then((res)=>{
                login({token: res.data.token, user: res.data.user, isCkecked: isChecked});
                console.log(res)
             })
             .catch((error)=>{toast.error("Senha ou email inválidos");console.log(error)})
    }else{
        toast.error("Insira usuário e senha")
    }
}

const handleErrorMessage = () =>{
  
  if(errors.email){
    toast.error(`${errors.email?.message}`)
    clearErrors()
  }else if(errors.password){
    toast.error(`${errors.password?.message}`)
    clearErrors()
  }else{
    clearErrors
  }
}

  return (
    <>
    <div>
          <Style.LoginContainer>
            <Style.LoginCard>
                <Style.Title>Login</Style.Title>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="inputContainer">
                      <Style.Label>Email</Style.Label>
                      <input
                        className="textInput"
                        placeholder="Digite seu email"
                        {...register("email")}
                      />
                    </div>
                    <div className="inputContainer">
                      <Style.Label>Senha</Style.Label>
                      <input
                        className="textInput"
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                      />
                    
                      <div className="forgotPassawordContainer">
                        <Style.ForgotPassword onClick={()=> setIsModalOpen(true)}>Esqueceu a senha?</Style.ForgotPassword>
                        <div>
                          <Style.RemindMe>Lembrar-me</Style.RemindMe>
                          <input type="checkbox" className="checkInput" checked={isChecked} onChange={()=>setIsChecked(!isChecked)}></input>
                        </div>
                      </div>
                    </div>
                    <section>
                      <Button type="submit" variant="contained" className="buttonEnter" onClick={()=>handleErrorMessage()}>Entrar</Button>
                    </section>
                </form>
                <div className="bottonContainer">
                  <div className="or">
                    <Style.Line/>
                    <p>OU</p>
                    <Style.Line/>
                  </div>
                  <Style.NewAccount onClick={()=>navigate('/cadastro')}>
                    Clique aqui para criar uma nova conta
                  </Style.NewAccount>
                </div>
                </Style.LoginCard>
          </Style.LoginContainer>
    </div>
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModal}
      style={customStyles}
      >
      <ForgotPassword setIsModalOpen={setIsModalOpen}/>
    </Modal>
    </>
  );
};

export default LoginCard;
