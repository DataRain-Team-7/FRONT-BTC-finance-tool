import { useState } from 'react';
import AsideBar from '../../components/AsideBar';
import Header from '../../components/Header';
import HomeCard from '../../components/HomeCard';
import * as Styled from './style';


const ExtraHour = () => {

  const [ search , setSearch ] = useState<string>("")

  return (
    <Styled.ExtraHourContainer>
      <Header setSearch={setSearch}/>
      <section className="mainSection">
        <div className="mainDiv">
          <div className="AsideBar">
            <AsideBar />
          </div>
          <div className="HomeCard">
            <HomeCard search={search}/>
          </div>
        </div>
      </section>
    </Styled.ExtraHourContainer>
  );
};

export default ExtraHour;
