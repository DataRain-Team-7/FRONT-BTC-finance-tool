import * as Style from "./style";
import defaltImage from "../../assets/images/userDefault.png"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateAccountCard = () => {

  const navigate = useNavigate()
  
  return (
    <Style.CreateAccountContainer>
        <Style.CreateAccountCard>
          <Style.CreateUserTitleContainer>
              <h1 className="h1title">Criar novo usuário</h1>
          </Style.CreateUserTitleContainer>
          <Style.UserPhotoContainer>
            <img
              className="imagesProfile"
              src={defaltImage}
            ></img>
          </Style.UserPhotoContainer>
          <Style.InputsContainer>
            <Style.InputLabel>Nome completo</Style.InputLabel>
            <Style.Inputs type="text" />
            <Style.InputLabel>Email</Style.InputLabel>
            <Style.Inputs type="text"/>
            <Style.InputLabel>Número de telefone</Style.InputLabel>
            <Style.Inputs type="number"/>
            <Style.InputLabel>Senha</Style.InputLabel>
            <Style.Inputs type="password"/>
            <Style.InputLabel>Confirmar senha</Style.InputLabel>
            <Style.Inputs type="password"/>
            <Style.InputLabel>Tipo de conta</Style.InputLabel>
            <Style.Inputs />
          </Style.InputsContainer>
          <Style.ButtonsContainer>
            <Button variant="contained" className="buttonCancel" onClick={()=>navigate("/")}>Cancelar</Button>
            <Button variant="contained" className="buttonRegiste">Cadastrar</Button>
          </Style.ButtonsContainer>
        </Style.CreateAccountCard>
      </Style.CreateAccountContainer>
  );
};

export default CreateAccountCard;
