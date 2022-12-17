import * as S from "./style"
import Vini from "../../assets/images/vini.png"

const UserCard = () => {
    return(
        <S.CardContainer>
            <S.CardHeader>
                <S.CardFunction>Administrador</S.CardFunction>
                <div>...</div>
            </S.CardHeader>
            <S.CardImage src={Vini} alt="Imagem perfil"/>
            <S.CardName>Vini</S.CardName>
            <S.CardEmail>vini@blue.com</S.CardEmail>
        </S.CardContainer>
    )
}

export default UserCard;