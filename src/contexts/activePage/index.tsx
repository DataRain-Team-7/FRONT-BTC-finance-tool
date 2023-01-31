import { createContext, ReactNode, useContext, useState } from "react";

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