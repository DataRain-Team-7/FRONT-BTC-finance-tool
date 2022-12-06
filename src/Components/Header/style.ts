import styled, { css } from "styled-components";
import topBar from '../../assets/images/topBar.png';
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsGear } from "react-icons/bs";

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
        width: 22%;

            div{
                display:flex;
                flex-direction: row;
                width: 70%;
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