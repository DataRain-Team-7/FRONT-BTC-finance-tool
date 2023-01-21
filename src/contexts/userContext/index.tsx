import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Api from "../../services/api";
import { UserTypes } from "../../types/interface";
import { useAuth } from "../auth";

interface userProviderData {
    user: UserTypes[];
    handleGetUsers: () => void;
}

interface userProviderProps {
    children: ReactNode;
}

const UserContex = createContext<userProviderData>({} as userProviderData)

export const UserProvider = ({children}: userProviderProps) => {
    const[user, setUser] = useState<UserTypes[]>([])

    const{ logged } = useAuth()

    const handleGetUsers = () => {
        const token = localStorage.getItem("token");
    
        const headers = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
    
        Api.get("/user", headers).then((res) => setUser(res.data));
      };
  
      useEffect(() => {
        if (logged) handleGetUsers();
      }, [logged]);
    


    return (
        <UserContex.Provider value={{user, handleGetUsers}}>{children}</UserContex.Provider>
    )
}

export const useUsers = () => useContext(UserContex)