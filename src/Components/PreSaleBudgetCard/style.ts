import styled, { css } from "styled-components"

export const PreSaleBudgetContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 15px;
    width: 55%;
    height: 82.5vh;
    margin-top: 3.5vh;
    background-color: ${theme.colors.primaryColor};
    padding: 3%;
    box-sizing: border-box;

    .client{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }

    .summary{
        display: flex;
        justify-content: space-between;

        .questions{
            width: 50%;
        }

        .hours{
            width: 25%;
        }

        .value{
            width: 25%;
        }
    }
    
  `}`;