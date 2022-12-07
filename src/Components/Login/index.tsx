import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ou from "../CreateAccount";
import * as Style from "./style";

const LoginCard = () => {

  const navigate= useNavigate()

  return (
    <div>
        <Style.AuthFormContainer>
          <Style.AuthFormContainer>
            <Style.AuthForm>
              <Style.AuthFormContent>
                <Style.AuthFormTitle>Login</Style.AuthFormTitle>
                <div>
                  <Style.Label>Email</Style.Label>
                  <input
                    type="email"
                    // className="form-control mt-1"
                    placeholder="Digite seu email"
                  />
                </div>
                <div>
                  <Style.Label>Senha</Style.Label>
                  <input
                    type="password"
                    // className="form-control mt-1"
                    placeholder="Digite sua senha"
                  />
                </div>
                <p>
                  <Style.LinkTo href="#">Esqueceu a senha?</Style.LinkTo>
                </p>

                <Style.LembrarMe>Lembrar-me</Style.LembrarMe>
                <input type={"checkbox"}></input>

                <div className="d-grid gap-2 mt-3">
                  <button
                    type="submit"
                  >
                    Entrar
                  </button>
                  <Ou />
                  <p>
                    <Style.LinkTo href="#" onClick={()=>navigate('/cadastro')}>
                      Clique aqui para criar uma nova conta
                    </Style.LinkTo>
                  </p>
                </div>
              </Style.AuthFormContent>
            </Style.AuthForm>
          </Style.AuthFormContainer>
        </Style.AuthFormContainer>
    </div>
  );
};

export default LoginCard;
