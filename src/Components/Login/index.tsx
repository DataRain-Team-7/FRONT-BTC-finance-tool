import Ou from "./Ou";
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
            <p>
              <Style.LinkTo href="#">Esqueceu a senha?</Style.LinkTo>
            </p>
            
            <Style.LembrarMe>Lembrar-me</Style.LembrarMe>
            <input type={"checkbox"}></input>

            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                // className="btn btn-primary"
              >
                Entrar
              </button>
              <Ou />
              <p>
                <Style.LinkTo href="#">
                  Clique aqui para criar uma nova conta
                </Style.LinkTo>
              </p>
            </div>
          </Style.AuthFormContent>
        </Style.AuthForm>
      </Style.AuthFormContainer>
    </Style.AuthFormContainer>
  );
};

export default Login;
