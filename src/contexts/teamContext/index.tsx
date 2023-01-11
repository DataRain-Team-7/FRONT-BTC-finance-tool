import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import Api from "../../services/api";
import { TeamsTypes } from "../../types/interface";
import { useAuth } from "../auth";

interface TeamProviderProps {
  children: ReactNode;
}

interface TeamProviderData {
  team: TeamsTypes[];
  handleGetTeam: () => void;
}

const TeamContext = createContext<TeamProviderData>({} as TeamProviderData);

export const TeamProvider = ({ children }: TeamProviderProps) => {
  const [team, setTeam] = useState<TeamsTypes[]>([]);

  const { logged } = useAuth();

  const handleGetTeam = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    Api.get("/team", headers).then((res) => setTeam(res.data));
  };

  useEffect(() => {
    if (logged) handleGetTeam();
  }, [logged]);

  return (
    <TeamContext.Provider value={{ team, handleGetTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => useContext(TeamContext);
