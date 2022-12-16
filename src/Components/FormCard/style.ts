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

export const FormCard = styled.div`
    ${({theme})=>css`
        width: 33vw;
        max-width: 39.5rem;
        height: 85vh;
        box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
        padding: 2.8vw;
        margin-top: -1.5vh;
        border-radius: 16px;
        background-color: white;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        h3{
            text-align: start;
            box-sizing: border-box;
            font-size: ${theme.constants.titleFontSize};
            color: ${theme.colors.fundamentalColor};
            font-weight: 700;
        }

        .Stepper{
            width: 100%;
        }

        form{
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
            height: 75%;

            label{
                font-size: ${theme.constants.smallFont};
                color: ${theme.colors.fundamentalColor};
                margin-top: 0.5rem;
                margin-left: 0.5rem;
            }

            input{
                all: unset;
                border: 1px solid #D1D1D1;
                border-radius: 4px;
                font-size: ${theme.constants.smallFont};
                padding: 11px 9px;
                box-sizing: border-box;
                width: 100%;
                cursor: pointer;
                color: ${theme.colors.inputFontColor};
            }

            div{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                
                p{
                    font-size: ${theme.constants.smallFont};
                    color: ${theme.colors.fundamentalColor};
                    margin-top: 0.5rem;
                }
                .RadioGroup{
                    
                    input{
                        display: none;
                    }
                }
            }

            .buttonDiv{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                

                .buttonEnter{
                    background-color: ${theme.colors.tertiaryColor};
                    height: 3rem;
                    width: 80%;
                    font-size: ${theme.constants.buttonFontSize};
                    
                }
            }
        }
    `}
`