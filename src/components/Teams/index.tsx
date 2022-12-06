import Navbar from "../Navbar";
import * as S from "./style";
import { teams } from "../../mocks/teams";
import TeamsLi from "../TeamsLi";

const Teams = () => {

  return (
    <>
      <Navbar />
      <S.TeamsContainer>
        <S.TeamsHeader>
          <S.TeamsTitle>Central de Controle - Equipes</S.TeamsTitle>
        </S.TeamsHeader>
        <S.TeamsContent>
          <S.TeamsSubTitle>
            <p>Equipes</p>
            <p>Valor da Hora</p>
          </S.TeamsSubTitle>
          <S.TeamsUl>
            {
              teams.map((element,index) => {
                return <TeamsLi team={element} key={index}/>
              })
            }
          </S.TeamsUl>
        </S.TeamsContent>
      </S.TeamsContainer>
    </>
  );
};

export default Teams;
