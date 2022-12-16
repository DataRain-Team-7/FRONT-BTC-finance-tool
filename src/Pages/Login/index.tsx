import * as Styled from './style'
import LoginCard from '../../Components/LoginCard'
import TopBar from '../../Components/TopBar'

const LoginPage = () => {
  return (
    <Styled.LoginContainer>
      <TopBar/>
      <LoginCard />
      </Styled.LoginContainer>
  )

}

export default LoginPage