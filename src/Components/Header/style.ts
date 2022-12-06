import styled, { css } from "styled-components";
import topBar from '../../assets/images/topBar.png';
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsGear } from "react-icons/bs";
import 'animate.css';

export const HeaderContainer = styled.div`

${({theme})=>css`
    background: url(${topBar});
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content:center;
    user-select: none;

    section{
        width: 100%;
        max-width: 120rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 4rem;

        

        img{
            height: 3rem;
            filter: drop-shadow( 1px 1px 4px #fff);
        }


        div{
        display:flex;
        justify-content: space-between;
        flex-direction:row;
        color: ${theme.colors.primaryColor};
        align-items: center;
        width: 30%;
        max-width: 23rem;

            div{
                display:flex;
                flex-direction: row;
                width: 80%;
                max-width: 17rem;
            }

            img{
                height: 2.5rem;
                border: 2px solid white;
                border-radius: 50%
            }

            p{
                font-size: ${theme.constants.fontHeader}
            }

            .secondColorElement{
                color: ${theme.colors.tertiaryColor}
            }

            .getOut{
                cursor:pointer
            }


    }
        .badge{
            margin-top:0.2rem;
        }

        input{
            width: 33%;
            height: 1.5rem;
            outline: 0;
            border: none;
            border-radius: 0.75rem;
            text-align: center;
            margin-left: -10%;
        }
    }
    `}
    
    `
export const bell=styled(IoMdNotificationsOutline)`
    height: 1.9rem;
    cursor: pointer;
`

export const gear=styled(BsGear)`
    height: 1.6rem;
    cursor: pointer;

`