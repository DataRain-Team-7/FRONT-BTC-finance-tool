import styled, { css } from "styled-components";

export const UsersPageContainer = styled.div`
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

export const UsersPageHeader = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const UsersPageTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secundaryColor};
    font-size: 26px;
    font-weight: 600;
    margin: 50px;
    display: flex;
  `}
`;

export const UsersPageContent = styled.div`
  width: 80%;
  height: 80%;
  margin-left: 50px;
`;
