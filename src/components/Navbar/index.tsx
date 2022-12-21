import * as S from "./style";
import Logo from "../../assets/img/logo.svg";
//icons
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineTeam,
  AiOutlineMessage,
} from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <S.NavbarContainer>
      <S.NavbarWrapper>
        <S.NavbarLogo>
          <S.NavbarImg src={Logo} alt="Logo da empresa" />
        </S.NavbarLogo>
        <S.NavbarContent>
          <S.NavbarContentUl>
            <S.NavbarContentLi>
              <span>
                <AiOutlineHome />
              </span>
              Início
            </S.NavbarContentLi>
            <S.NavbarContentLi onClick={()=> navigate("/users")}>
              <span>
                <AiOutlineUser />
              </span>
              Usuários
            </S.NavbarContentLi>
            <S.NavbarContentLi onClick={()=> navigate("/teams")}>
              <span>
                <AiOutlineTeam />
              </span>
              Equipes
            </S.NavbarContentLi>
            <S.NavbarContentLi>
              <span>
                <AiOutlineMessage />
              </span>
              Mensagens
            </S.NavbarContentLi>
            <S.NavbarContentLi>
              <span>
                <S.ProjectIcon />
              </span>
              Projetos
            </S.NavbarContentLi>
            <S.NavbarContentLi>
              <span>
                <GiRotaryPhone />
              </span>
              Pré Venda
            </S.NavbarContentLi>
            <S.NavbarContentLi>
              <span>
                <MdAttachMoney />
              </span>
              Financeiro
            </S.NavbarContentLi>
            <S.NavbarContentLi>
              <span>
                <BsGraphUp />
              </span>
              Resumo de Orçamentos
            </S.NavbarContentLi>
          </S.NavbarContentUl>
        </S.NavbarContent>
      </S.NavbarWrapper>
    </S.NavbarContainer>
  );
};

export default Navbar;
