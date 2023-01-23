import * as Styled from './style'
import TopBar from '../../components/TopBar'
import RecoverPassword from '../../components/RecoverPasswordCard'

const RecoverPasswordPage = () => {
  return (
    <Styled.RecoverContainer>
      <TopBar/>
      <RecoverPassword/>
    </Styled.RecoverContainer>
  )
}

export default RecoverPasswordPage