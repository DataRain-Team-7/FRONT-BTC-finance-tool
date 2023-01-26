import MenuDropdownClient from "../MenuDropdownClient";
import * as S from "./style";



const ClientCard = () => {
  return (
    <S.ClientContainer >
      <S.ClientHeader>
        <span>
          {<MenuDropdownClient/>}
        </span>
      </S.ClientHeader>
      <S.ClientName>Mathias</S.ClientName>
      <S.ClientEmail>mathiassouza10@outlook.test</S.ClientEmail>
      <S.ClientPhone>(11) - 9 9933-9933 </S.ClientPhone>
      <S.ClientMainContact>Adailton</S.ClientMainContact>
    </S.ClientContainer>
  );
};

export default ClientCard;
