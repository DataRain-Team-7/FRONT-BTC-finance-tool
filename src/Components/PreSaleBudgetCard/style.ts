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

    .title{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 1rem;
        h2{
            width: 25%;
        }
        .fisrth2{
            width: 50%;
        }
        
        
    }

    .summary{
        display: flex;
        justify-content: space-between;
        height: 50%;
        overflow-y: scroll;
            ::-webkit-scrollbar {
                width: 10px;
            }
            ::-webkit-scrollbar-track {
                background: ${theme.colors.inputFontColor};
                border-radius:5px;
            }
            ::-webkit-scrollbar-thumb {
                background: ${theme.colors.tertiaryColor};
                border-radius:5px;
            }
            /* ::-webkit-scrollbar-thumb:hover {
                background: #555;
            } */
            


        .questions{
            width: 50%;
            
            div{
                margin-left: 1rem;
                height: 10vh;
                
                p{
                    margin: .5rem 0;
                    margin-left: 1rem;
                }
            }
        }

        .hours, .value{
            width: 25%;

            h2{
                margin-bottom: 3vh;
            }
            p{
                margin-left: 1rem;
                height: 10vh;  
            }
        }

        
    }

    textarea{
                    margin-left: 1px;
                    resize: none;
                    width: 100%;
                    height: 9vh;
                    padding: 5px;
                    background-color: #f2f4f6;
                    border: none;
                }

                .extract{
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-evenly;
        }
    
  `}`;