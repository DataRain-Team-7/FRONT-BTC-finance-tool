import { Routes, Route } from "react-router-dom"
import Login from "./Pages/Login";

const Router = () =>{
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}

export default Router;