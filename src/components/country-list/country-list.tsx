import { useQuery } from '@apollo/client';
import { GET_ALL_COUNTRIES } from '../../query/countries';
import { useEffect } from 'react';
import { CountryI } from './models/countries-types';

export function CountryList() {
  const { data, loading } = useQuery(GET_ALL_COUNTRIES);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <ul>
      {data.countries.map((item: CountryI) => (
        <li key={item.code}>{item.name}</li>
      ))}
    </ul>
  );
}
