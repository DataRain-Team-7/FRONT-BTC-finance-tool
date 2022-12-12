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
    isCkecked: Boolean,
}

interface AuthProviderData{
    logged:boolean,
    login: (param:loginParams)=> void,
    logout: ()=> void,
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({children}:AuthProviderProps)=>{
    
    const navegate = useNavigate();
    const [logged, setLogged] = useState<boolean>(false);

    const checkTokenExpiration = ()=>{
        const user = JSON.parse(localStorage.getItem("user") || "")
        const token = localStorage.getItem("token")

        
        Api.get(`/user/${user.id}`)
            .then(()=>{
                setLogged(true);
                // navegate("/")    COLOCAR ROTA CORRETA AQUI
        }).catch(()=>{
            logout();
            toast.error("Login necessário")
        })
    }

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token) checkTokenExpiration();
    } , [])

    const login = ({token, user, isCkecked}:loginParams) =>{
        if(isCkecked){
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
        }
        setLogged(true);
        // navegate("/")    COLOCAR ROTA CORRETA AQUI
        toast.success("login bem sucedido")
    }

    const logout = () =>{
        localStorage.clear();
        setLogged(false);  
        navegate("/");
    }

    return <AuthContext.Provider value={{logged, login, logout}}>{children}</AuthContext.Provider>
}

export const useAuth = ()=> useContext(AuthContext)