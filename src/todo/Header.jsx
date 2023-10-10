import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Typography } from '@mui/material';

const Header = () => {
  return (
    <header className='header'>
        <Typography variant='h5'>SYSTEM LOGO</Typography>
        <div>
            <Button variant='contained' size='large'>Login</Button>
        </div>
    </header>
  )
}

export default Header