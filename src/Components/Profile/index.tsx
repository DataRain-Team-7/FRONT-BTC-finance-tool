import { useState } from "react";
import userDefault from "../../assets/images/default.png";
import { useAuth } from "../../contexts/auth";
import Header from "../Header";
import ModalEditUser from "../ModalEditUser";
import Navbar from "../Navbar";
import * as S from "./style";

const Profile =() => {
    const{ userStorage } = useAuth()
    const[openModal, setOpenModal] = useState<boolean>(false)

    return(
        <>
            <Header/>
            <S.ALlProfilePageContainer>
                <S.ProfileNavbar>
                    <Navbar/>   
                </S.ProfileNavbar>
                <S.ProfilePageContainer>
                    <S.ProfileHeader>
                        <S.ProfileTitle>Perfil do usuário</S.ProfileTitle>
                        <S.ProfileSettings onClick={()=> setOpenModal(!openModal)}/>
                        {
                            openModal ? (
                                <ModalEditUser userStorage={userStorage} openModal={openModal} setOpenModal={setOpenModal}/>
                            ) : null
                        }
                    </S.ProfileHeader>
                    <S.ProfileContent>
                        <S.ProfileCard>
                            <S.ProfileCardImage src={userDefault}/>
                            <S.ProfileCardName>{userStorage.name}</S.ProfileCardName>
                            <S.ProfileCardEmail>{userStorage.email}</S.ProfileCardEmail>
                            <S.ProfileCardPosition>{userStorage.position}</S.ProfileCardPosition>
                        </S.ProfileCard>
                    </S.ProfileContent>
                </S.ProfilePageContainer>
            </S.ALlProfilePageContainer>
        </>
    )
}

export default Profile;