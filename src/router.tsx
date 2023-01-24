import { Route, Routes } from "react-router-dom";
import AllProjects from "./components/AllProjects";
import Profile from "./components/Profile";
import Teams from "./components/Teams";
import UsersPage from "./components/Users";
import CreateAccount from "./Pages/CreateAccount";
import FinancialBudget from "./Pages/FinancialBudget";
import FormPage from "./Pages/Form";
import HomePage from "./Pages/Home";
import Login from "./Pages/Login";
import PreSaleBudget from "./Pages/PreSaleBudget";
import QuestionsPage from "./Pages/QuestionsPage";
import RecoverPasswordPage from "./Pages/RecoverPassword";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/new-user" element={<CreateAccount />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/novasenha/:param" element={<RecoverPasswordPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/prevenda" element={<PreSaleBudget />} />
      <Route path="/financeiro" element={<FinancialBudget />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/questoes" element={<QuestionsPage />} />
    </Routes>
  );
};

export default Router;
