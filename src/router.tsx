import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Teams from "./components/Teams";
import Login from "./Pages/Login";

const Router = () =>{
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Navbar/>}/>
            <Route path="/teams" element={<Teams/>}/>
        </Routes>
    )
}

export default Router;