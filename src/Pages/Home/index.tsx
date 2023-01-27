import Header from '../../components/Header';
import HomeCard from '../../components/HomeCard';
import Navbar from '../../components/Navbar';
import * as Styled from './style';


const HomePage = () => {
  return (
    <Styled.HomeContainer>
      <Header />
      <section className="mainSection">
        <div className="mainDiv">
          <div className="AsideBar">
            <Navbar />
          </div>
          <div className="HomeCard">
            <HomeCard />
          </div>
        </div>
      </section>
    </Styled.HomeContainer>
  );
};

export default HomePage;
