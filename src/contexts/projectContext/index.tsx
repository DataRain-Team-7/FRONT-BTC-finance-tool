import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Api from "../../services/api";
import { ProjectTypes } from "../../types/interface";
import { useAuth } from "../auth";

interface ProjectProviderData {
  project: ProjectTypes[];
  handleGetProjects: () => void;
  teste: boolean;
  alteraTeste: () => void;
}

interface ProjectProviderProps {
  children: ReactNode;
}

const ProjectContext = createContext<ProjectProviderData>(
  {} as ProjectProviderData
);

export const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const [project, setProject] = useState<ProjectTypes[]>([]);
  const [teste, setTeste] = useState<boolean>(false)
  const { logged } = useAuth();

  const alteraTeste = ()=>{
    setTeste(!teste)
  }

  const handleGetProjects = () => {
    Api.get("/project")
      .then((res) => setProject(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (logged) handleGetProjects();
  }, [logged]);

  return (
    <ProjectContext.Provider
      value={{ project, handleGetProjects, teste, alteraTeste }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
