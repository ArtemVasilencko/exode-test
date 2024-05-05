import { CountryAppTitle } from './country-app-title';
import { AppLayout } from '../app-layout/app-layout';
import { Box } from '@mui/material';

export function CountryApp() {
  return (
    <AppLayout>
      <Box className='country__app__box'>
        <CountryAppTitle />
      </Box>
    </AppLayout>
  );
}
