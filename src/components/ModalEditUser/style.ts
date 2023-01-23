import styled from "styled-components";
import theme from "../../styles/theme";

export const FormEdit = styled.form`
  display: flex;
  width: 90%;
  height: 80%;
  flex-direction: column;
  align-items: center;
`;

export const LabelEdit =styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    width: 100%;
    margin-right: 10px;
`;

export const InputEditUser = styled.input`
  width: 70%;
  height: 40px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  outline: none;
  padding: 5px;
`;


export const ButtonsContainer = styled.div`
  height: 4.375rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2%;
  margin-top: 5%;

  .buttonCancel {
    background-color: ${theme.colors.backgroundColor};
    height: 5vh;
    width: 30%;
    font-size: ${theme.constants.buttonFontSize};
    font-weight: 700;
    color: ${theme.colors.darkGrey};
  }
  .buttonCancel:hover {
    background-color: ${theme.colors.darkGrey};
    color: ${theme.colors.primaryColor};
  }

  .buttonSave {
    background-color: ${theme.colors.tertiaryColor};
    height: 5vh;
    width: 30%;
    font-weight: 700;
    font-size: ${theme.constants.buttonFontSize};
  }
  .buttonRegister:hover {
    background-color: ${theme.colors.tertiaryColor};
  }
`;
