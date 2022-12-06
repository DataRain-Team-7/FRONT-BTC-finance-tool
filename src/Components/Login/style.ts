import styled, { css } from "styled-components";

export const LoginContainer = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.constants.titleFontSize};
    background-color: #f2f4f6;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* align-content: center; */
    `}
    `;

export const LoginBox = styled.div`
justify-content: center;
  background-color: white;
  /* margin: 200px; */
  height: 50vh;
  width: 20vw;
  `;
