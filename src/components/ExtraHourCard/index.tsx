import { useNavigate } from "react-router-dom";
import * as Style from "./style"
import { useUsers } from "../../contexts/userContext";
import { useAuth } from "../../contexts/auth";
import { useEffect } from "react";
import { Button } from "@mui/material";

// useEffect(()=> {},[])

const ExtraHourCard = () => {
  
  return (
          <Style.ExtraHourContainer>
              <section className="section01">
                <h2>Pedidos de hora extra</h2>            
              </section>
              <section className="section02">
              <section>
                  <div>
                    <h2>Colaborador</h2>
                    <h2>Projeto</h2>
                    <h2>Cliente</h2>
                  </div>
                  <div>
                    <p>Joao Pedro</p>
                    <p>Projeto 01</p>
                    <p>Joao corporation</p>
                  </div>
                  <div>
                    <p className="explanation">Comentário de requisiçao de hora extra</p>
                  </div>
                  <div className="botton">
                    <Button  variant="contained" className="buttonEnter" onClick={()=>{}}>Aprovar pedido</Button>
                    <Button  variant="contained" className="buttonEnter reprove" onClick={()=>{}}>Negar pedido</Button>
                  </div>
                </section>
                <section>
                  <div>
                    <h2>Colaborador</h2>
                    <h2>Projeto</h2>
                    <h2>Cliente</h2>
                  </div>
                  <div>
                    <p>Joao Pedro</p>
                    <p>Projeto 01</p>
                    <p>Joao corporation</p>
                  </div>
                  <div>
                    <p className="explanation">Comentário de requisiçao de hora extra</p>
                  </div>
                  <div className="botton">
                    <Button  variant="contained" className="buttonEnter" onClick={()=>{}}>Aprovar pedido</Button>
                    <Button  variant="contained" className="buttonEnter reprove" onClick={()=>{}}>Negar pedido</Button>
                  </div>
                </section>
                <section>
                  <div>
                    <h2>Colaborador</h2>
                    <h2>Projeto</h2>
                    <h2>Cliente</h2>
                  </div>
                  <div>
                    <p>Joao Pedro</p>
                    <p>Projeto 01</p>
                    <p>Joao corporation</p>
                  </div>
                  <div>
                    <p className="explanation">Comentário de requisiçao de hora extra</p>
                  </div>
                  <div className="botton">
                    <Button  variant="contained" className="buttonEnter" onClick={()=>{}}>Aprovar pedido</Button>
                    <Button  variant="contained" className="buttonEnter reprove" onClick={()=>{}}>Negar pedido</Button>
                  </div>
                </section>
              </section>
          </Style.ExtraHourContainer>  
  );
};

export default ExtraHourCard;
