import * as Style from './style'
import topBar from '../../assets/images/topBar.png'

const TopBar = () => {
    return (
        <Style.TopBarContainer>
            <img src={topBar}></img>        
        </Style.TopBarContainer>
    )
}

export default TopBar