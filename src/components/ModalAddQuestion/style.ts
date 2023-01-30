import styled,{css} from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import theme from "../../styles/theme";

export const AddQuestionContainer = styled.div`
${({theme})=>css`
    width: 50rem;
    height: 40.5rem;
    margin: 0;
    padding: 2.8rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: column;
    user-select: none;


    div{
        width: 100%;
        display: flex;
        display: flex;
        justify-content: flex-start;
        padding: 10px;
    }

    h2{
        font-size: ${theme.constants.titleFontSize};
        color: ${theme.colors.fundamentalColor};
        font-weight: 700;
    }

    section{
        width: 100%;
        height: 70%;
        padding: 0 10%;

        div{
            display: flex;
            flex-direction: column;

            p{
                margin: .5rem;
            }

            input{
                margin: 0.5rem 0;
                min-height: 1.7rem;
                border: none;
                border-radius: 5px;
                background-color: #d2d2d2;
                padding: 0 1rem;
            }
        }

        .handleInput{
            display: flex;
            flex-direction: row;
            height: .5rem;
            width: 100%

        }
        .plus{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                height: 1.7rem;
                border: 1px solid black;
                border-radius: 5px;
                text-align: center;
                font-size: 1.5rem;
                cursor: pointer;
            }

        .answer{
            max-height: 18vh;
            min-height: 18vh;

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
            ::-webkit-scrollbar-thumb:hover {
                background: #ED8107;
            }
        }
    }

    /* section{
        width: 100%;
        margin-top: -1rem;

        p{
            text-align:center;
            width: 100%;
            font-size: ${theme.constants.smallFont};
            color: ${theme.colors.fundamentalColor};
            margin-bottom: 0.5rem;
        }

        input{
            display:flex;
            justify-content: flex-start;
            all: unset;
            border: 1px solid #D1D1D1;
            border-radius: 4px;
            font-size: ${theme.constants.smallFont};
            padding: 11px 15px;
            box-sizing: border-box;
            width: 100%;


            ::-webkit-input-placeholder {
            color: ${theme.colors.inputFontColor};
            text-align: start;
        }
        }
    } */

    .buttonEnter{
          background-color: ${theme.colors.tertiaryColor};
          height: 3rem;
          width: 70%;
          font-size: ${theme.constants.buttonFontSize};
        }
        .buttonEnter:hover{
          background-color: ${theme.colors.tertiaryColor};
        }

`}
`
export const BackArrow = styled(MdArrowBackIos)`
    height: 1.35rem;
    cursor: pointer;
    color: ${theme.colors.secundaryColor}
`