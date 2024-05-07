import { memo } from 'react';
import { CountryI } from '../../models/countries-types';
import { CountryCard } from '../country-card/country-card';
import './css/country-list.css';
import { Box, Skeleton } from '@mui/material';

interface CountryListPropsI {
  countriesData: CountryI[];
  loading: boolean;
}

export const CountryList = memo(function CountryList({
  countriesData,
  loading
}: CountryListPropsI) {
  if (loading) {
    return (
      <ul className='country__list'>
        {Array.from({ length: 10 }, () => Math.random()).map((item) => (
          <Box key={item} padding='5px' marginBottom='5px'>
            <Skeleton animation='wave' variant='rectangular' height={150} />
            <Skeleton animation='wave' />
          </Box>
        ))}
      </ul>
    );
  }

  return (
    <ul className='country__list'>
      {countriesData?.map((country: CountryI) => (
        <CountryCard key={country.code} {...country} />
      ))}
    </ul>
  );
});
