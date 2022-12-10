import * as Styled from "./style";
import TopBar from "../../Components/TopBar";

const CreateAccount = () => {
  return (
    <>
      <TopBar />
      <Styled.CreateAccountContainer>
        <Styled.LoginCard>
          <Styled.CreateUserTitleContainer>
            <div className="containerTitle">
              <h1 className="h1title">Criar novo usuário</h1>
            </div>
            <div className="closeContainerTitle">X</div>
          </Styled.CreateUserTitleContainer>
          <Styled.UserPhotoContainer>
            <img
              className="imagesProfile"
              src="https://jacaimages.vercel.app/imgs/miscellaneous/coisaboa.png"
            ></img>
          </Styled.UserPhotoContainer>
          <Styled.InputsContainer>
            <Styled.InputLabel>Nome completo</Styled.InputLabel>
            <Styled.Inputs />
            <Styled.InputLabel>Email</Styled.InputLabel>
            <Styled.Inputs />
            <Styled.InputLabel>Número de telefone</Styled.InputLabel>
            <Styled.Inputs />
            <Styled.InputLabel>Senha</Styled.InputLabel>
            <Styled.Inputs />
            <Styled.InputLabel>Confirmar senha</Styled.InputLabel>
            <Styled.Inputs />
            <Styled.InputLabel>Tipo de conta</Styled.InputLabel>
            <Styled.Inputs />
          </Styled.InputsContainer>
          <Styled.ButtonsContainer>
            <Styled.Buttons bgcolor="#F2F4F6"
            color="#778CA2"
            >CANCELAR</Styled.Buttons>
            <Styled.Buttons bgcolor="#EF8E1C"
            color="#FFF"
            >CADASTRAR</Styled.Buttons>
          </Styled.ButtonsContainer>
        </Styled.LoginCard>
      </Styled.CreateAccountContainer>
    </>
  );
};

export default CreateAccount;
