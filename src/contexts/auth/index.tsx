import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Api from "../../services/api";
import { UserTypes } from "../../types/interface";

interface AuthProviderProps{
    children: ReactNode
}

interface loginParams{
    token:string,
    user:UserTypes | null,
    isChecked: Boolean,
}

interface AuthProviderData{
    logged:boolean,
    login: (param:loginParams)=> void,
    logout: ()=> void,
    userStorage: UserTypes,
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({children}:AuthProviderProps)=>{
    
    const navigate = useNavigate();
    const [logged, setLogged] = useState<boolean>(false);
    const [userStorage , setUserStorage] = useState<UserTypes>({
        id: "",
        name: "",
        email:"",
        password:"",
        imageUrl: "",
        position: "",
        roleName: "",
    })

    const checkTokenExpiration = ()=>{
        const token = localStorage.getItem("token")

        Api.get("/user/myself")
            .then((res)=>{
                setUserStorage(res.data)
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
            user&&setUserStorage(user)
            navigate("/home")
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

    return <AuthContext.Provider value={{logged, login, logout, userStorage}}>{children}</AuthContext.Provider>
}

export const useAuth = ()=> useContext(AuthContext)