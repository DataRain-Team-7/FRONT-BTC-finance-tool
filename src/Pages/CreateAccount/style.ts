import styled from "styled-components";

export const CreateAccountContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: pink;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginCard = styled.div`
  height: 80%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 40%;
  border-radius: 16px;
  background-color: white;
`;

export const CreateUserTitleContainer = styled.div`
  height: 10%;
  display: flex;
  width: 100%;
  /* background-color: blue; */
  /* box-shadow: 10px; */
  .containerTitle {
    display: flex;
    width: 90%;
    height: 100%;
    /* background-color: red; */
    align-items: center;
    .h1title {
      margin-left: 10%;
    }
  }
  .closeContainerTitle {
    display: flex;
    height: 100%;
    width: 10%;
    justify-content: center;
    align-items: center;
  }
`;

export const UserPhotoContainer = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
  .imagesProfile {
    height: 90%;
    width: 30%;
    border-radius: 100%;
  }
`;

export const InputsContainer = styled.div`
  height: 60%;
  width: 100%;
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Inputs = styled.input`
  height: 12%;
  width: 90%;
  margin: 0px 0px 5px 0px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #D1D1D1;
`;
export const ButtonsContainer = styled.div`
  height: 10%;
  width: 100%;
  /* background-color: purple; */
  display: flex;
  align-items: center;
  justify-content: space-around;

`;

type buttonProp = {
  bgcolor: string;
  color: string;
};
export const Buttons = styled.button<buttonProp>`
  height: 60%;
  width: 30%;
  border-radius: 10px;
  outline: none;
  border: none;
  color: ${(prop)=>prop.color};
  background-color: ${(prop) => prop.bgcolor};
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  transition-duration: 1s;
  font-weight: 300;
  `;


export const InputLabel = styled.label`
    text-align: start;
    width: 87%;
    color:#535353;
`;