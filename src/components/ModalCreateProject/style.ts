import styled from "styled-components";
import theme from "../../styles/theme";

export const FormCreate = styled.form`
  display: flex;
  width: 90%;
  height: 80%;
  flex-direction: column;
  align-items: center;
`;

//new
export const FormCreateTitle = styled.div`
  border-radius: 15px 15px 0 0;
  display: flex;
  width: 100%;
  height: 4.375rem;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primaryColor};
  margin-bottom: 30px;

  .title-create-project {
    margin-left: 5%;
    font-size: ${theme.constants.fontHeader};
    color: ${theme.colors.fundamentalColor};
  }
`;

export const InputsCreateProject = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  text-align: start;
  width: 80%;
  padding-left: 2%;
  margin-top: 1%;
  margin-bottom: 5px;
  font-size: ${theme.constants.fontHeader};
  color: ${theme.colors.fundamentalColor};
`;

export const InputTextAria = styled.textarea`
  display: block;
  all: unset;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  font-size: ${theme.constants.smallFont};
  padding: 0 9px;
  box-sizing: border-box;
  width: 80%;
  background-color: ${theme.colors.primaryColor};

`;

export const InputCreateTeam = styled.input`
  all: unset;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  font-size: ${theme.constants.fontHeader};
  padding: 0 9px;
  height: 4.5vh;
  box-sizing: border-box;
  width: 80%;
  background-color: ${theme.colors.primaryColor};
`;
