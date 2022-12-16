import * as Styled from './style'
import TopBar from '../../Components/TopBar'
import RecoverPassword from '../../Components/RecoverPasswordCard'

const RecoverPasswordPage = () => {
  return (
    <Styled.RecoverContainer>
      <TopBar/>
      <RecoverPassword/>
    </Styled.RecoverContainer>
  )
}

export default RecoverPasswordPage