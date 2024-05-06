import { useQuery } from '@apollo/client';
import { Box, TextField, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { labels } from '../../constants/constants';
import { GET_COUNTRY_BY_CODE } from '../../query/countries';
import './css/country-app.css';

export function CountryAppTitle() {
  const [countryCode, setCountryCode] = useState('');
  const { data } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: { countryCode }
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountryCode(e.target.value);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Box className='country__app__title__box'>
      <Typography
        className='country__app-title'
        variant='h5'
        fontWeight='700'
        marginRight='15px'
      >
        Countries
      </Typography>
      <TextField
        value={countryCode}
        onChange={handleChange}
        label={labels.searchInput}
        fullWidth
      />
    </Box>
  );
}
