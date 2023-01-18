import { Routes, Route } from "react-router-dom"
import Teams from "./components/Teams";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";
import RecoverPasswordPage from "./Pages/RecoverPassword";
import FormPage from "./Pages/Form";
import UsersPage from "./components/Users";
import ProjectPage from "./components/ProjectPage";
import PreSaleBudget from "./Pages/PreSaleBudget";
import FinancialBudget from "./Pages/FinancialBudget";
import HomePage from "./Pages/Home";
import Profile from "./components/Profile";
import QuestionsPage from "./Pages/QuestionsPage";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<CreateAccount />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/users" element={<UsersPage/>} />
      <Route path="/projects" element={<ProjectPage/>} />
      <Route path="/novasenha/:param" element={<RecoverPasswordPage/>} />
      <Route path="/form" element={<FormPage/>} />
      <Route path="/prevenda" element={<PreSaleBudget/>} />
      <Route path="/financeiro" element={<FinancialBudget/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/questoes" element={<QuestionsPage/>} />

    </Routes>

  );
};

export default Router;
 
