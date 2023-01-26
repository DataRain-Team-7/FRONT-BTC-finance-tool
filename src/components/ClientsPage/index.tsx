import ClientCard from "../ClientCard";

import Header from "../Header";
import Navbar from "../Navbar";
import * as S from "./style";

const ClientsPage = () => {
  return (
    <>
      <Header />
      <S.ClientsAllContent>
        <S.ClientsNavbar>
          <Navbar />
        </S.ClientsNavbar>
        <S.ClientsPageContainer>
          <S.ClientsPageHeader>
            <S.ClientsPageTitle>
              Central de Controle - Clientes
            </S.ClientsPageTitle>
          </S.ClientsPageHeader>
          <S.ClientsPageContent>
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
          </S.ClientsPageContent>
        </S.ClientsPageContainer>
      </S.ClientsAllContent>
    </>
  );
};

export default ClientsPage;
