import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const AuthFormContainer = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.constants.titleFontSize};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `}
`;

export const AuthForm = styled.form`
  ${({ theme }) => css`
    width: 520px;
    height: 50vh;
    box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
    padding-top: 30px;
    padding-bottom: 20px;
    border-radius: 8px;
    background-color: white;
    `}
    `;

export const AuthFormContent = styled.div`
  ${({ theme }) => css`
  font-size: ${theme.constants.fontBody};
    padding-left: 12%;
    padding-right: 12%;
  `}
`;

export const AuthFormTitle = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: 1em;
    font-size: ${theme.constants.titleFontSize};
    /* font-size: 24px; */
    color: rgb(34, 34, 34);
    font-weight: 800;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: 14px;
    font-weight: 600;
    color: rgb(34, 34, 34);
  `}
`;

export const LinkTo = styled.a`
  ${({ theme }) => css`
  text-decoration: none;
  color: ${theme.colors.secundaryColor};
  `}
`;


export const LembrarMe = styled.h2`
    ${({ theme }) => css`
    font-size: ${theme.constants.fontBody};
    color: gray;
    `}
`;


// export const LoginContainer = styled.div`
//   ${({ theme }) => css`
//   font-size: ${theme.constants.titleFontSize};
//   background-color: #f2f4f6;
//   height: 100vh;
//   width: 100vw;
//   /* display: flex; */
//   /* flex-direction: column; */
//   /* justify-content: center; */
//   `}
//   `;

// export const LoginBox = styled.div`
// ${({ theme }) => css`
//   display: flex;
//   justify-content: center;
//   background-color: white;
//   margin: auto;
//   justify-content: center;
//   height: 50vh;
//   /* width: 200px; */
// `}
// `;
