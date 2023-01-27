import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Api from "../../services/api";
import { UserTypes } from "../../types/interface";

interface ActiveProviderProps{
    children: ReactNode
}

interface ActiveProviderData{
    active: string,
    setActive: (param:string)=> void,
}

const ActiveContext = createContext<ActiveProviderData>({} as ActiveProviderData)

export const ActiveProvider = ({children}:ActiveProviderProps)=>{
    
    const [ active, setActive ] = useState<string>("home")

    return <ActiveContext.Provider value={{ active, setActive }}>{children}</ActiveContext.Provider>
}

export const useActive = ()=> useContext(ActiveContext)