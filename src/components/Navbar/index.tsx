import Logo from "../../assets/img/logo.svg";
import * as S from "./style";
//icons
import { AiOutlineHome, AiOutlineTeam, AiOutlineUserAdd } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import React from "react";

const Navbar = () => {
  const { userStorage } = useAuth();

  const navigate = useNavigate();
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
            <S.NavbarContentLi onClick={() => navigate("/clients")}>
              <span>
                <AiOutlineTeam />
              </span>
              Clientes
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
            <div>
              <S.NavbarContentLi onClick={() => navigate("/new-user")}>
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
