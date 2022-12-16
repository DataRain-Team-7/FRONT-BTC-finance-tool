import Navbar from "../Navbar";
import * as S from "./style";
import { teams } from "../../mocks/teams";
import TeamsLi from "../TeamsLi";
import toast from "react-hot-toast";
import Header from "../Header";


const Teams = () => {
  const user = true ;
  return (
    <>
     <Header/>
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
            {user ? (
              <S.TeamMockedLi>
                <S.TeamMockedLiContent>
                  <span>Cadastrar outra equipe</span>
                  <span> <S.AddTeamIcon onClick={() => toast.error("Seção em desenvolvimento")}/></span>
                </S.TeamMockedLiContent>
              </S.TeamMockedLi>
            ) : null}
            {teams.map((element, index) => {
              return <TeamsLi team={element} key={index} />;
            })}
          </S.TeamsUl>
        </S.TeamsContent>
      </S.TeamsContainer>
    </>
  );
};

export default Teams;
