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



