import Logo from "../../assets/img/logo.svg";
import * as S from "./style";
//icons
import { AiOutlineHome, AiOutlineTeam, AiOutlineUserAdd } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { useActive } from "../../contexts/activePage";

const Navbar = () => {
  const { userStorage } = useAuth();
  const { active, setActive } = useActive();

  const navigate = useNavigate();
  return (
    <S.NavbarContainer>
      <S.NavbarWrapper>
        <S.NavbarLogo>
          <S.NavbarImg src={Logo} alt="Logo da empresa" />
        </S.NavbarLogo>
        <S.NavbarContent>
          <S.NavbarContentUl>
            <S.NavbarContentLi
              className={active === "home" ? "active" : ""}
              onClick={() => {
                navigate("/home");
                setActive("home");
              }}
            >
              <span>
                <AiOutlineHome />
              </span>
              Início
            </S.NavbarContentLi>
            {userStorage.roleName === "admin" ? (
              <S.NavbarContentLi
                className={active === "users" ? "active" : ""}
                onClick={() => {
                  navigate("/users");
                  setActive("users");
                }}
              >
                <span>
                  <FaUsers />
                </span>
                Usuários
              </S.NavbarContentLi>
            ) : null}
            <S.NavbarContentLi
              className={active === "teams" ? "active" : ""}
              onClick={() => {
                navigate("/teams");
                setActive("teams");
              }}
            >
              <span>
                <AiOutlineTeam />
              </span>
              Equipes
            </S.NavbarContentLi>
            <S.NavbarContentLi
              className={active === "clients" ? "active" : ""}
              onClick={() => {
                navigate("/clients")
                setActive("clients")
              }}
            >
              <span>
                <AiOutlineTeam />
              </span>
              Clientes
            </S.NavbarContentLi>
            <S.NavbarContentLi
              className={active === "profile" ? "active" : ""}
              onClick={() => {
                navigate("/profile");
                setActive("profile");
              }}
            >
              <span>
                <CgProfile />
              </span>
              Perfil
            </S.NavbarContentLi>
            <S.NavbarContentLi
              className={active === "projects" ? "active" : ""}
              onClick={() => {
                navigate("/projects");
                setActive("projects");
              }}
            >
              <span>
                <S.ProjectIcon />
              </span>
              Projetos
            </S.NavbarContentLi>
            <S.NavbarContentLi
              className={active === "questoes" ? "active" : ""}
              onClick={() => {
                navigate("/questoes");
                setActive("questoes");
              }}
            >
              <span>
                <BsGraphUp />
              </span>
              Questionário
            </S.NavbarContentLi>
            {userStorage.roleName === "admin" ? (
              <div>
                <S.NavbarContentLi
                  className={active === "new-user" ? "active" : ""}
                  onClick={() => {
                    navigate("/new-user");
                    setActive("new-user");
                  }}
                >
                  <span>
                    <AiOutlineUserAdd />
                  </span>
                  Cadastrar Usuário
                </S.NavbarContentLi>
                <S.NavbarContentLi onClick={() => navigate("/new-client")}>
                  <span>
                    <AiOutlineUserAdd />
                  </span>
                  Cadastrar Cliente
                </S.NavbarContentLi>
              </div>
            ) : null}
          </S.NavbarContentUl>
        </S.NavbarContent>
      </S.NavbarWrapper>
    </S.NavbarContainer>
  );
};

export default Navbar;
