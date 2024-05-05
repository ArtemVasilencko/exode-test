import { Box } from '@mui/material';
import { ReactNode } from 'react';
import './css/app-layout.css';

interface AppLayoutPropsI {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutPropsI) {
  return <Box className='app__layout'>{children}</Box>;
}
