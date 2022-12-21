import styled,{css} from "styled-components";

export const FirstPageCard = styled.form`
    ${({theme})=>css`
        
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
    `}
`