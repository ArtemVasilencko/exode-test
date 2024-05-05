import { AppBar, Toolbar } from '@mui/material';
import { MyHeaderLogo } from './header-logo';
import './css/header.css';

export function MyHeader() {
  return (
    <AppBar className='header'>
      <Toolbar>
        <MyHeaderLogo />
      </Toolbar>
    </AppBar>
  );
}
