import { Typography } from '@mui/material';
import './css/country-app.css';

export function CountryAppTitle() {
  return (
    <Typography className='country__app-title' variant='h5' fontWeight='700'>
      Countries
    </Typography>
  );
}
