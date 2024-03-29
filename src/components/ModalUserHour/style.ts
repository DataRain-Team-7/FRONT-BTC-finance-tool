import styled from "styled-components";
import theme from "../../styles/theme";

export const ButtonsContainer = styled.div`
  height: 4.375rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2%;
  margin-top: 40px;

  .buttonCancel {
    background-color: ${theme.colors.backgroundColor};
    height: 5vh;
    width: 45%;
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
    width: 45%;
    font-weight: 700;
    font-size: ${theme.constants.buttonFontSize};
  }
  .buttonRegister:hover {
    background-color: ${theme.colors.tertiaryColor};
  }
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 700;
`;
