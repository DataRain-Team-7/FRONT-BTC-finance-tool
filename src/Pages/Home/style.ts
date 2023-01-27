import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
    padding: 0;
    margin: 0;
    user-select: none;
    background-color: #f2f4f6;
    /* display: flex;
    justify-content: center; */

    .mainSection{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .mainDiv{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100vh;
        max-width: 120rem;

        .AsideBar{
            width: 25%;
        }

        .HomeCard{
            width: 75%;
            padding-left: 10px;
        }
    }
`