import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTeam } from "../../contexts/teamContext";
import * as Style from "./style"

const HomeCard = () => {

  const navigate = useNavigate()
  
  return (
          <Style.HomeContainer>
              <section className="section01">
                <h2>Central de Controle</h2>
                <div className="titles">
                  <p>Cliente</p>
                  <p className="company">Empresa</p>
                  <p className="date">Data de criação</p>
                  <p className="last">Última Edição</p>
                  <p>Status</p>
                </div>           
              </section>
              <section className="section02">
                <div onClick={()=> navigate("/prevenda")}>
                  <p>Darlene Robertson</p>
                  <p>DataRain Blue EdTech</p>
                  <p>23/11/2022</p>
                  <p>23/11/2022</p>
                  <p>Aguardando revisão</p>
                </div>
                <div onClick={()=> navigate("/prevenda")}>
                  <p>Darlene Robertson</p>
                  <p>DataRain Blue EdTech</p>
                  <p>23/11/2022</p>
                  <p>23/11/2022</p>
                  <p>Aguardando revisão</p>
                </div>
                <div onClick={()=> navigate("/prevenda")}>
                  <p>Darlene Robertson</p>
                  <p>DataRain Blue EdTech</p>
                  <p>23/11/2022</p>
                  <p>23/11/2022</p>
                  <p>Aguardando revisão</p>
                </div>
                <div onClick={()=> navigate("/prevenda")}>
                  <p>Darlene Robertson</p>
                  <p>DataRain Blue EdTech</p>
                  <p>23/11/2022</p>
                  <p>23/11/2022</p>
                  <p>Aguardando revisão</p>
                </div>
                <div onClick={()=> navigate("/prevenda")}>
                  <p>Darlene Robertson</p>
                  <p>DataRain Blue EdTech</p>
                  <p>23/11/2022</p>
                  <p>23/11/2022</p>
                  <p>Aguardando revisão</p>
                </div>
                <div onClick={()=> navigate("/prevenda")}>
                  <p>Darlene Robertson</p>
                  <p>DataRain Blue EdTech</p>
                  <p>23/11/2022</p>
                  <p>23/11/2022</p>
                  <p>Aguardando revisão</p>
                </div>
                <div onClick={()=> navigate("/prevenda")}>
                  <p>Darlene Robertson</p>
                  <p>DataRain Blue EdTech</p>
                  <p>23/11/2022</p>
                  <p>23/11/2022</p>
                  <p>Aguardando revisão</p>
                </div>
                <div onClick={()=> navigate("/prevenda")}>
                  <p>Darlene Robertson</p>
                  <p>DataRain Blue EdTech</p>
                  <p>23/11/2022</p>
                  <p>23/11/2022</p>
                  <p>Aguardando revisão</p>
                </div>
                <div onClick={()=> navigate("/prevenda")}>
                  <p>Darlene Robertson</p>
                  <p>DataRain Blue EdTech</p>
                  <p>23/11/2022</p>
                  <p>23/11/2022</p>
                  <p>Aguardando revisão</p>
                </div>
                <div onClick={()=> navigate("/prevenda")}>
                  <p>Darlene Robertson</p>
                  <p>DataRain Blue EdTech</p>
                  <p>23/11/2022</p>
                  <p>23/11/2022</p>
                  <p>Aguardando revisão</p>
                </div>
                <div onClick={()=> navigate("/prevenda")}>
                  <p>Darlene Robertson</p>
                  <p>DataRain Blue EdTech</p>
                  <p>23/11/2022</p>
                  <p>23/11/2022</p>
                  <p>Aguardando revisão</p>
                </div>
                <div onClick={()=> navigate("/prevenda")}>
                  <p>Darlene Robertson</p>
                  <p>DataRain Blue EdTech</p>
                  <p>23/11/2022</p>
                  <p>23/11/2022</p>
                  <p>Aguardando revisão</p>
                </div>
              </section>
          </Style.HomeContainer>  
  );
};

export default HomeCard;
