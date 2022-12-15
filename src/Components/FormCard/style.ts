import styled, { css } from "styled-components";

export const FormCardContainer = styled.div`
    ${({theme})=>css`
        font-size: ${theme.constants.titleFontSize};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100vh - 5.3rem);
    `}
`