import React from "react";
import * as Style from "./style";

const Login = () => {
  return (
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
                placeholder="Insira o email"
              />
            </div>
            <div>
              <Style.Label>Senha</Style.Label>
              <input
                type="password"
                // className="form-control mt-1"
                placeholder="Insira a senha"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit"
              // className="btn btn-primary"
              >
                Concluir
              </button>
            </div>
            <p>
              Esqueceu <a href="#">a senha?</a>
            </p>
          </Style.AuthFormContent>
        </Style.AuthForm>
      </Style.AuthFormContainer>
    </Style.AuthFormContainer>
  );
};

export default Login;
