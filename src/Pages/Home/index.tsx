import * as Styled from './style'
import Header from '../../components/Header'
import HomeCard from '../../Components/HomeCard'
import AsideBar from '../../Components/AsideBar'


const HomePage = () => {

  return (
    <Styled.HomeContainer>
      <Header/>
      <section className='mainSection'>
        <div className='mainDiv'>
          <div className="AsideBar">
            <AsideBar/>
          </div>
          <div className="HomeCard">
            <HomeCard/>
          </div>
        </div>
      </section>
      
      
      </Styled.HomeContainer>
  )

}

export default HomePage