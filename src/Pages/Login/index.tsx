import * as Styled from './style'
import Login from '../../Components/Login'
import TopBar from '../../Components/TopBar'

const LoginPage = () => {
  return (
    <Styled.LoginContainer>
      <TopBar/>
      <Login />
      </Styled.LoginContainer>
  )

}

export default LoginPage