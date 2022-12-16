import { Routes, Route } from "react-router-dom"
import Teams from "./components/Teams";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";
import RecoverPasswordPage from "./Pages/RevoverPassword";
import UsersPage from "./components/Users";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<CreateAccount />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/users" element={<UsersPage/>} />
      <Route path="/novasenha/:param" element={<RecoverPasswordPage/>}/>
    </Routes>
  );
};

export default Router;
