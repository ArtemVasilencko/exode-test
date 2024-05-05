import { Box } from '@mui/material';
import { ReactNode } from 'react';
import './css/app-layout.css';

interface AppLayoutPropsI {
  children: ReactNode;
  bgColor?: string;
}

export function AppLayout({ children, bgColor }: AppLayoutPropsI) {
  return (
    <Box className='app__layout' bgcolor={bgColor}>
      {children}
    </Box>
  );
}
