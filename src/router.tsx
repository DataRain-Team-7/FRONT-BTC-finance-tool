import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import ProjectPage from "./components/ProjectPage";
import Teams from "./components/Teams";
import UsersPage from "./components/Users";
import CreateAccount from "./Pages/CreateAccount";
import FormPage from "./Pages/Form";
import HomePage from "./Pages/Home";
import Login from "./Pages/Login";
import Budget from "./Pages/Budget";
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
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/novasenha/:param" element={<RecoverPasswordPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/questoes" element={<QuestionsPage />} />
      {/* <Route path="/new-user" element={<CreateAccountCard />} /> */}
    </Routes>
  );
};

export default Router;
