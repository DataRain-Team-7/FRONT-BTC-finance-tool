import * as Style from "./style";

const Login = (props: any) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Style.LeftLine />
        <Style.OuText>OU</Style.OuText>
        <Style.RightLine />
      </div>
    </div>
  );
};

export default Login;
