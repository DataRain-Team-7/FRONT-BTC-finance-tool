import * as Style from './style'
import user_default from '../../assets/images/user_default.png'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <Style.HeaderContainer>
            <section>
                {/* <></>campo de busca */}
                <div>
                    <div>
                        <img src={user_default}></img>
                        <p>ViniBlue</p>
                        <p className='secondColorElement'>(Admin)</p>
                        <p className='secondColorElement getOut'>| SAIR</p>
                    </div>
                    <Style.bell/>{" "}
                    <Style.gear/>{" "}
                </div>
                <img src={logo}></img>
            </section>      
        </Style.HeaderContainer>
    )
}

export default Header