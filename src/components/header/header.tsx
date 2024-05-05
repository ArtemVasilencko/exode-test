import { AppBar, Toolbar } from '@mui/material';
import { MyHeaderLogo } from './header-logo';
import './css/header.css';
import { AppLayout } from '../app-layout/app-layout';

export function MyHeader() {
  return (
    <AppBar position='static' className='header'>
      <AppLayout>
        <Toolbar className='header__toolbar'>
          <MyHeaderLogo />
        </Toolbar>
      </AppLayout>
    </AppBar>
  );
}
