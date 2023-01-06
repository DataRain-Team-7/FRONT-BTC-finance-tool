import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TeamService from "../../services/teams-service";
import { TeamsTypes } from "../../types/interface";
import Header from "../Header";
import Navbar from "../Navbar";
import TeamsLi from "../TeamsLi";
import * as S from "./style";

const Teams = () => {

  const[values, setValues] = useState<TeamsTypes[]>([])

  useEffect(() => {
    getAllTeams()
  },[])

  const getAllTeams = async () =>{
    const res = await TeamService.findAllTeams()
    setValues([...res.data]);
  }


  const user = true;
  return (
    <>
      <Header />
      <S.TeamsAllContainer>
        <S.TeamsNavbar>
          <Navbar />
        </S.TeamsNavbar>
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
                    <span>
                      {" "}
                      <S.AddTeamIcon
                        onClick={() => toast.error("Seção em desenvolvimento")}
                      />
                    </span>
                  </S.TeamMockedLiContent>
                </S.TeamMockedLi>
              ) : null}
              {values.map((element, index) => {
                return <TeamsLi team={element} key={index} />;
              })}
            </S.TeamsUl>
          </S.TeamsContent>
        </S.TeamsContainer>
      </S.TeamsAllContainer>
    </>
  );
};

export default Teams;
