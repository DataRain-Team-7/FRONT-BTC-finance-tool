import styled, { css } from "styled-components";
import { AiOutlineSetting } from "react-icons/ai";

export const ALlProfilePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const ProfileNavbar = styled.div`
  width: 25%;
`;

export const ProfilePageContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundColor};
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 100vh;
    position: relative;
  `}
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ProfileTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secundaryColor};
    font-size: 26px;
    font-weight: 600;
    margin: 50px;
    display: flex;
  `}
`;

export const ProfileContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    width: 80%;
    height: 80%;
    border-radius: 10px;
    margin-bottom: 50px;
  `}
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
`;

export const ProfileCardImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50px;
  margin-bottom: 20px;
`;
export const ProfileCardName = styled.p`
  font-size: 2rem;
  color: #000;
  margin-bottom: 20px;
`;
export const ProfileCardEmail = styled.p`
  font-size: 1rem;
  color: #000;
  margin-bottom: 20px;
`;
export const ProfileCardPosition = styled.p`
  font-size: 1rem;
  color: #000;
  margin-bottom: 20px;
`;
export const ProfileCardRole = styled.p`
  font-size: 1rem;
  color: #000;
  margin-bottom: 20px;
`;

export const ProfileSettings = styled(AiOutlineSetting)`
  ${({ theme }) => css`
    width: 1.5rem;
    height: 4.2rem;
    cursor: pointer;
    margin-left: 1rem;
    color: ${theme.colors.secundaryColor};
  `}
`;
