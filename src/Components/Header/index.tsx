import { Badge } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import logo from '../../assets/images/logo.png';
import user_default from '../../assets/images/user_default.png';
import { useAuth } from '../../contexts/auth';
import * as Style from './style';

const Header = () => {

    const { userStorage } = useAuth()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
      };

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
                <img src={logo} onClick={handleClick}></img>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </section>      
        </Style.HeaderContainer>
    )
}

export default Header

