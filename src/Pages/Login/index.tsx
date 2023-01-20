import * as Styled from './style'
import LoginCard from '../../components/LoginCard'
import TopBar from '../../components/TopBar'

const LoginPage = () => {
  return (
    <Styled.LoginContainer>
      <TopBar/>
      <LoginCard />
      </Styled.LoginContainer>
  )

}

export default LoginPage