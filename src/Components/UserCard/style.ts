import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  ${({theme}) => css`
  background-color: ${theme.colors.primaryColor};
  width: 230px;
  height: 280px;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  `}
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`;

export const CardFunction = styled.p`
  ${({ theme }) => css`
    background-color: ${theme.colors.secundaryColor};
    color: ${theme.colors.primaryColor};
    border-radius: 5px;
    margin-left: 5px;
  `}
`;

export const CardImage = styled.img`
    width: 72px;
    height: 72px;
    border-radius: 50px;
`;

export const CardName = styled.p`
    font-size: 2rem;
    color: #000;
    margin-top: 10px;
`;

export const CardEmail = styled.p`
    font-size: 1rem;
    color: #000;
    margin-top: 15px;
`
