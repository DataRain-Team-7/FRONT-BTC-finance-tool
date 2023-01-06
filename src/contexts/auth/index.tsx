import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Api from "../../services/api";
import { User } from "../../types/interface";

interface AuthProviderProps{
    children: ReactNode
}

interface loginParams{
    token:string,
    user:User,
    isChecked: Boolean,
}

interface AuthProviderData{
    logged:boolean,
    login: (param:loginParams)=> void,
    logout: ()=> void,
    user: User,
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({children}:AuthProviderProps)=>{
    
    const navigate = useNavigate();
    const [logged, setLogged] = useState<boolean>(false);
    const [user , setUser] = useState<User>({
        id: "",
        name: "",
        email:"",
        password:"",
        imageUrl: "",
        position: "",
        roleName: "",
    })

    const checkTokenExpiration = ()=>{
        // const user = JSON.parse(localStorage.getItem("user") || "")
        const token = localStorage.getItem("token")

        Api.get("/user/myself")
            .then((res)=>{
                setUser(res.data)
                setLogged(true);
             // navegate("/inicio")    COLOCAR ROTA CORRETA AQUI
            })
            .catch(()=>{
                logout();
                toast.error("Login necessário")
            })
    }

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token) checkTokenExpiration();
    } , [])

    const login = ({token, user, isChecked}:loginParams) =>{
        if(isChecked){
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
        }
        setLogged(true);
        // navigate("/novasenha/5641565")
        toast.success("Login bem sucedido")
    }

    const logout = () =>{
        localStorage.clear();
        setLogged(false);  
        navigate("/");
    }

    return <AuthContext.Provider value={{logged, login, logout, user}}>{children}</AuthContext.Provider>
}

export const useAuth = ()=> useContext(AuthContext)