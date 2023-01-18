import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const QuestionsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 10rem);
    padding-right: 7rem;
    box-sizing: border-box;


    .section01{
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 40px;
      margin-bottom: 16px;
      p{
      font-size: ${theme.constants.fontHeader};
    }


      h2{
        margin-bottom: 3rem;
        color: ${theme.colors.secundaryColor};
        font-size: ${theme.constants.titleFontSize};
      }

      div{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        padding: 0 7% 0 4.5%;
        box-sizing: border-box;
        font-size: 28px;

        .company{
          margin-left: 10%;
        }

        .last{
          margin-right: 5%;
        }

        .date{
          margin-left: 6%;
        }

      }

    }

    .allQuestions{
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

    .section02{
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 45px;

      p{
      font-size: ${theme.constants.fontBody};
      }

      .title{
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding-right: 84px;
      }

      section{
        width: 100%;
        padding: 0 70px;

        .firstInput{
          width: 100%;
          height: 40px;
          border: none;
          margin: 22px 0;
          border-radius: 5px;
          padding-left: 19px;
          font-size: ${theme.constants.fontBody};

        }

        .cards{
          display: flex;
          justify-content: space-between;

          div{
            display: flex;
            flex-direction: column;
            
            input{
              height: 40px;
              border: none;
              margin-top: 13px;
              border-radius: 5px;
              padding-left: 19px;
            font-size: ${theme.constants.fontBody};

            }
          }

          .first{
            width: 50%;
            margin-right: 2%;

            .newAnswer{
              background-color: #d2d2d2;
            }
            
          }

          .second{
            width: 30%;
            margin-right: 2%;

            .newTeam{
              background-color: #d2d2d2;
            }

            select{
              height: 40px;
              border: none;
              margin-top: 13px;
              border-radius: 5px;

              option{
                width: 100%;
                text-align: center;
                font-size: ${theme.constants.fontBody};

              }

            }
            
          }

          .third{
            width: 20%;

            .newHour{
              background-color: #d2d2d2;
            }

            input{
              text-align: center;
            }
        }
      }
    }

  `}
`;
