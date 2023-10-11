import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/auth';

const Header = () => {
    const user = useSelector(state =>  state.auth.user);    
    const dispatch = useDispatch();

    const handeLogin = () => {
      dispatch(login("SaidARSLAN"));
      console.log(user)
    }
    const handleLogout = () => {
      dispatch(logout(false))
    }

  return (
    <header className='header'>
        <Typography variant='h5'>SYSTEM LOGO</Typography>
        <div>
            {user ? <div className='welcome'><Typography variant='h4'>{user}</Typography><Button variant='contained' size='large' onClick={handleLogout}>Logout</Button></div> :  <Button variant='contained' size='large' onClick={handeLogin}>Login</Button>}
        </div>
    </header>
  )
}

export default Header