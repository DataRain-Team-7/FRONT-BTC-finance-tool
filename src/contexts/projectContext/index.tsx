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
}

interface ProjectProviderProps {
  children: ReactNode;
}

const ProjectContext = createContext<ProjectProviderData>(
  {} as ProjectProviderData
);

export const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const [project, setProject] = useState<ProjectTypes[]>([]);
  const { logged } = useAuth();

  const handleGetProjects = () => {

    Api.get("/project" )
      .then((res) => setProject(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (logged) handleGetProjects();
  }, [logged]);

  return (
    <ProjectContext.Provider value={{ project , handleGetProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
