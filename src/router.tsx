import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
