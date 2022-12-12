import { Routes, Route } from "react-router-dom"
import Teams from "./components/Teams";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<CreateAccount />} />
      <Route path="/teams" element={<Teams />} />
    </Routes>
  );
};

export default Router;
