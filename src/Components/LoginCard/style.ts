import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const LoginContainer = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.constants.titleFontSize};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 5.3rem);
  `}
`;

export const LoginCard = styled.div`
  ${({ theme }) => css`
    width: 33rem;
    height: 37.5rem;
    box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
    padding: 3.5rem;
    margin-top: -2.5rem;
    border-radius: 16px;
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    form{
      display: flex;
      flex-direction: column;
      height: 70%;
      justify-content: space-between;

      section{
        display: flex;
        align-items:center;
        justify-content: center;
        height: 40%;
        width: 100%;

        .buttonEnter{
          background-color: ${theme.colors.tertiaryColor};
          height: 3rem;
          width: 80%;
          font-size: ${theme.constants.buttonFontSize};
        }
        .buttonEnter:hover{
          background-color: ${theme.colors.tertiaryColor};
        }
      }

    }

    .inputContainer{
      display: flex;
      flex-direction: column;
      

      .textInput{
        width: 100%;
        all: unset;
        border: 1px solid #D1D1D1;
        border-radius: 4px;
        font-size: ${theme.constants.smallFont};
        padding: 11px 9px;

        ::-webkit-input-placeholder {
          color: ${theme.colors.inputFontColor};
        }
      }

      .checkInput{
        height: 24px;
        width: 24px;
        background-color: red;
      }

      .checkInput:hover {
        background-color: red;
      }
    }

    .forgotPassawordContainer{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 9px;
      box-sizing: border-box;
      margin-top: 3%;

      div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 33%;

        input{
          cursor: pointer;
        }
      }
      
    }

    .bottonContainer{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 13%;

      .or{
        width: 100%;
        display: flex;
        align-items: center;
        color: ${theme.colors.darkGrey};

        p{
          margin: 0 15px;
          font-size: ${theme.constants.buttonFontSize};
          font-weight: 500;
        }
      }
      
    }
    
    `}
    `;

export const Title = styled.h3`
  ${({ theme }) => css`
    text-align: start;
    padding-left: 0.5rem;
    box-sizing: border-box;
    font-size: ${theme.constants.titleFontSize};
    color: ${theme.colors.fundamentalColor};
    font-weight: 700;
  `}
`;

export const Label = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.fundamentalColor};
    font-size: ${theme.constants.smallFont};
    font-weight: 400;
    margin-left: 7px;
  `}
`;

export const NewAccount = styled.p`
  ${({ theme }) => css`
  color: ${theme.colors.secundaryColor};
  font-size: ${theme.constants.smallFont};
  cursor: pointer;
  `}
`;

export const ForgotPassword = styled.h2`
    color: ${theme.colors.secundaryColor};
    font-size: ${theme.constants.smallFont};
    font-weight: 500;
    cursor: pointer;
`


export const RemindMe = styled.h2`
    ${({ theme }) => css`
    font-size: ${theme.constants.smallFont};
    color: ${theme.colors.darkGrey};
    `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    height: 0.9px;
    width: 50%;
    align-items:center;
    background-color: ${theme.colors.darkGrey};
    margin: 0px 5px 0px 0px;
  `}
`;


