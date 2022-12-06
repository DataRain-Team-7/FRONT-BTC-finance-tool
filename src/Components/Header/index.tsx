import * as Style from './style'
import user_default from '../../assets/images/user_default.png'
import logo from '../../assets/images/logo.png'
import { Badge } from '@mui/material';

const Header = () => {



    return (
        <Style.HeaderContainer>
            <section>
                <div className='animate__animated animate__fadeInLeftBig animate__delay-1s'>
                    <div>
                        <img src={user_default}></img>
                        <p>ViniBlue</p>
                        <p className='secondColorElement'>(Admin)</p>
                        <p className='secondColorElement getOut'>| SAIR</p>
                    </div>
                    <Badge badgeContent={2} color="warning" className='badge'>
                        <Style.bell/>{" "}
                    </Badge>
                    <Style.gear/>{" "}
                </div>
                <input 
                    type="text"
                    placeholder='Buscar por cliente, empresa, etc...' 
                    className='animate__animated animate__fadeIn animate__delay-1s'></input>
                <img src={logo}></img>
            </section>      
        </Style.HeaderContainer>
    )
}

export default Header
