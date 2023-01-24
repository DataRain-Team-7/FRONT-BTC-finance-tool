import * as Styled from './style'
import TopBar from '../../components/TopBar'
import RecoverPassword from '../../components/RecoverPasswordCard'
import React from "react";

const RecoverPasswordPage = () => {
  return (
    <Styled.RecoverContainer>
      <TopBar/>
      <RecoverPassword/>
    </Styled.RecoverContainer>
  )
}

export default RecoverPasswordPage