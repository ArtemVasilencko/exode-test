import { memo } from 'react';
import { CountryI } from '../../models/countries-types';
import { CountryCard } from '../country-card/country-card';
import './css/country-list.css';

interface CountryListPropsI {
  countriesData: CountryI[];
}

export const CountryList = memo(function CountryList({
  countriesData
}: CountryListPropsI) {
  return (
    <ul className='country__list'>
      {countriesData?.map((country: CountryI) => (
        <CountryCard key={country.code} {...country} />
      ))}
    </ul>
  );
});
