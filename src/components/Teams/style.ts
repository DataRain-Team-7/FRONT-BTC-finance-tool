import styled, { css } from "styled-components";

export const TeamsContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundColor};
    display: flex;
    flex-direction: column;
    width: 75vw;
    height: 100vh;
    margin-left: 25vw;
    flex: 1;
    position: relative;
  `}
`;
export const TeamsHeader = styled.div`
  display: flex;
  justify-content: f;
`;

export const TeamsTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secundaryColor};
    font-size: 26px;
    font-weight: 600;
    margin: 50px;
    display: flex;
  `}
`;

export const TeamsContent = styled.div`
  width: 80%;
  height: 80%;
  margin-left: 50px;
`;

export const TeamsSubTitle = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  margin: 20px 0;

  p {
    font-size: 1.1rem;
  }
`;

export const TeamsUl = styled.ul`
  list-style: none;
  display: block;
`;

export const TeamsLi = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 20px;
    width: 90%;
    height: 50px;
    border-radius: 8px;
    background-color: ${theme.colors.primaryColor};
    font-size: ${theme.constants.fontBody};

    span {
      margin-left: 20%;
    }
  `}
`;

export const MenuDropdown = styled.button`
  background-color: transparent;
  position: relative;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

export const LiContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DropdownUl = styled.ul`
  position: fixed;
  right: 20vw;
  display: block;
  list-style: none;
  width: 150px;
  height: 74px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const DropdownLi = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 45%;

    :hover {
      background-color: ${theme.colors.terceryColor};
    }
  `}
`;
