import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_ALL_COUNTRIES } from '../../query/countries';
import { CountryCard } from './country-card/country-card';
import './css/country-list.css';
import { CountryI } from './models/countries-types';

export function CountryList() {
  const { data, loading } = useQuery(GET_ALL_COUNTRIES);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <ul className='country__list'>
      {data.countries.map((country: CountryI) => (
        <CountryCard key={country.code} {...country} />
      ))}
    </ul>
  );
}
