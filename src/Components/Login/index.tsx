import * as Style from "./style";
import TopBar from "../TopBar";
// import { LoginContainer, LoginBox } from "./style";

const Login = (props: any) => {
  return (
    <Style.LoginContainer>
      <TopBar />
      
      <Style.LoginBox>
      <p>Login</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            height: ".9px",
            width: "45px",
            backgroundColor: "gray",
            margin: "0px 5px 0px 0px",
          }}
        ></div>
        <h2 style={{ fontSize: "10px", color: "gray" }}>OU</h2>
        <div
          style={{
            height: ".9px",
            width: "45px",
            backgroundColor: "gray",
            margin: "0px 0px 0px 5px",
          }}
          ></div>
      </div>
          </Style.LoginBox>
    </Style.LoginContainer>
  );
};

export default Login;

// rafce
// react arrow function component export
