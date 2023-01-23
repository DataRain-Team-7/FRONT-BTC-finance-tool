import * as S from "./style";
import Logo from "../../assets/img/logo.svg";
//icons
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineTeam,
  AiOutlineMessage,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const AsideBar = () => {
  const navigate = useNavigate()
  const { userStorage } = useAuth()

  return (
    <S.NavbarContainer>
      <S.NavbarWrapper>
        <S.NavbarLogo>
          <S.NavbarImg src={Logo} alt="Logo da empresa" />
        </S.NavbarLogo>
        <S.NavbarContent>
        <S.NavbarContentUl>
            <S.NavbarContentLi onClick={() => navigate("/home")}>
              <span>
                <AiOutlineHome />
              </span>
              Início
            </S.NavbarContentLi>
            {userStorage.roleName === "admin" ? (
              <S.NavbarContentLi onClick={() => navigate("/users")}>
                <span>
                  <FaUsers />
                </span>
                Usuários
              </S.NavbarContentLi>
            ) : null}
            <S.NavbarContentLi onClick={() => navigate("/teams")}>
              <span>
                <AiOutlineTeam />
              </span>
              Equipes
            </S.NavbarContentLi>
            <S.NavbarContentLi onClick={() => navigate("/profile")}>
              <span>
                <CgProfile />
              </span>
              Perfil
            </S.NavbarContentLi>
            <S.NavbarContentLi onClick={() => navigate("/projects")}>
              <span>
                <S.ProjectIcon />
              </span>
              Projetos
            </S.NavbarContentLi>
            <S.NavbarContentLi onClick={() => navigate("/questoes")}>
              <span>
                <BsGraphUp />
              </span>
              Questionário
            </S.NavbarContentLi>
            {userStorage.roleName === "admin" ? (
              <S.NavbarContentLi onClick={() => navigate("/new-user")}>
                <span>
                  <AiOutlineUserAdd />
                </span>
                Cadastrar Usuário 
              </S.NavbarContentLi>
            ) : null}
          </S.NavbarContentUl>
        </S.NavbarContent>
      </S.NavbarWrapper>
    </S.NavbarContainer>
  );
};

export default AsideBar;
