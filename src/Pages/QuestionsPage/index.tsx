import * as Styled from './style'
import Header from '../../components/Header'
import AsideBar from '../../Components/AsideBar'
import QuestionsCard from '../../Components/QuestionsCard'


const QuestionsPage = () => {

  return (
    <Styled.QuestionsContainer>
      <Header/>
      <section className='mainSection'>
        <div className='mainDiv'>
          <div className="AsideBar">
            <AsideBar/>
          </div>
          <div className="HomeCard">
            <QuestionsCard/>
          </div>
        </div>
      </section>
      
      
      </Styled.QuestionsContainer>
  )

}

export default QuestionsPage