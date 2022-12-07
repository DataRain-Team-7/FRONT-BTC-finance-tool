import * as Styled from './style'
import TopBar from '../../Components/TopBar'
import CreateAccountCard from '../../Components/CreateAccount'


const CreateAccount = () => {
  return (
    <Styled.CreateAccountContainer>
      <TopBar/>
      <CreateAccountCard />
      </Styled.CreateAccountContainer>
  )
}

export default CreateAccount