import { useNavigate } from "react-router-dom";
import * as Style from "./style"
import { useUsers } from "../../contexts/userContext";

interface SearchProp {
  search: string
}

const HomeCard = ({search}: SearchProp) => {

  const { budgets } = useUsers()
  const forms = budgets? budgets.filter((element: any)=>element.client.companyName.toUpperCase().includes(search.toLocaleUpperCase())) : []
  console.log(forms) 

  const navigate = useNavigate()
  
  return (
          <Style.HomeContainer>
              <section className="section01">
                <h2>Central de Controle</h2>
                <section>
                  <div>
                    <p>Cliente</p>
                  </div>
                  <div>
                    <p className="company">Empresa</p>
                  </div>
                  <div>
                    <p className="date">Data de criação</p>
                  </div>
                  <div>
                    <p className="last">Última Edição</p>
                  </div>
                  <div>
                    <p>Status</p>
                  </div>
                </section>           
              </section>
              <section className="section02">
                {forms && forms.map((element: any) => {
                  return(
                    <section key={element.id} onClick={()=> navigate("/prevenda")}>
                      <div>
                        <p>{element.client.companyName}</p>
                      </div>
                      <div>
                        <p>{element.client.companyName}</p>
                      </div>
                      <div>
                        <p>{element.createdAt}</p>
                      </div>
                      <div>
                        <p>{element.updatedAt}</p>
                      </div>
                      <div> 
                        <p>{element.status}</p>
                        {/* request | review | approved */}
                      </div>
                    </section>
                  )
                })}
              </section>
          </Style.HomeContainer>  
  );
};

export default HomeCard;
