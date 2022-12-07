import * as Style from "./style";

const Login = (props: any) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Style.LeftLine />
        <h2 style={{ fontSize: "10px", color: "gray" }}>OU</h2>
        <Style.RightLine />
      </div>
    </div>
  );
};

export default Login;
