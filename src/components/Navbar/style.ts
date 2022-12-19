import styled, { css } from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-attachment: scroll;
  background-color: #f2f4f6;
  height: 100%;
  /* position: relative; */
`;

export const NavbarWrapper = styled.div`
  display: block;
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  height: 70px;
`;

export const NavbarImg = styled.img`
  height: 221px;
  width: 127px;
  margin: 0 auto;
  margin-top: 30px;
`;

export const NavbarContent = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  padding: 10px 0;
  width: 100%;
`;

export const NavbarContentUl = styled.ul`
  display: block;
  list-style: none;
  margin-left: 4vw;
  margin-top: 20px;
`;

export const NavbarContentLi = styled.li`
  ${({ theme }) => css`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    align-items: center;
    cursor: pointer;
    width: 80%;
    height: 50px;
    border-radius: 10px;
    font-size: ${theme.constants.fontBody};
    transition: 0.3s ease-in-out;
    background-color: ${theme.colors.primaryColor};

    span {
      margin-left: 20px;
    }

    :hover {
      background-color: ${theme.colors.tertiaryColor};
      color: ${theme.colors.primaryColor};
    }
  `}
`;
