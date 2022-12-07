import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Style from "./style";
import Button from '@mui/material/Button';

const LoginCard = () => {

  const navigate= useNavigate()

  return (
    <div>
          <Style.LoginContainer>
            <Style.LoginCard>
                <Style.Title>Login</Style.Title>
                <section>
                    <div className="inputContainer">
                      <Style.Label>Email</Style.Label>
                      <input
                        placeholder="Digite seu email"
                      />
                    </div>
                    <div className="inputContainer">
                      <Style.Label>Senha</Style.Label>
                      <input
                        type="password"
                        placeholder="Digite sua senha"
                      />
                      <div className="forgotPassawordContainer">
                        <Style.ForgotPassword>Esqueceu a senha?</Style.ForgotPassword>
                        <div>
                          <Style.RemindMe>Lembrar-me</Style.RemindMe>
                          <input type="checkbox" checked="checked"></input>
                        </div>
                      </div>
                    </div>
                </section>

                <div className="bottonContainer">
                  <Button variant="contained" className="buttonEnter">Entrar</Button>

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
  );
};

export default LoginCard;
