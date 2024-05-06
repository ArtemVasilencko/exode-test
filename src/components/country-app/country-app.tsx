import { CountryAppTitle } from './country-app-title';
import { AppLayout } from '../app-layout/app-layout';
import { Box } from '@mui/material';
import { CountryList } from '../country-list/country-list';
import { ChangeEvent, useState } from 'react';
import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_CODE } from '../../query/countries';
import { useLazyQuery, useQuery } from '@apollo/client';
import toast from 'react-hot-toast';
import { toastMessage } from '../../constants/constants';
import test from 'node:test';

export function CountryApp() {
  const [
    getCountryByCode,
    { data: foundedCountryData, loading: foundedCountryLoading }
  ] = useLazyQuery(GET_COUNTRY_BY_CODE);
  const [countryCode, setCountryCode] = useState('');
  const { data: allCountriesData, loading } = useQuery(GET_ALL_COUNTRIES);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountryCode(e.target.value);
  };

  const handleButtonClick = () => {
    if (!countryCode?.length) return toast.error(toastMessage.empty);
    getCountryByCode({
      variables: { countryCode: countryCode.toUpperCase() }
    }).then((item) =>
      item.data?.countries?.length
        ? toast.success(toastMessage.success)
        : toast.error(toastMessage.error)
    );
  };

  const handleClearClick = () => {
    if (!foundedCountryData?.countries?.length)
      return toast(toastMessage.already);
    setCountryCode(() => '');
    getCountryByCode({
      variables: { countryCode }
    });
    toast.success(toastMessage.successUpdated);
  };

  if (loading || foundedCountryLoading)
    return (
      <AppLayout>
        <Box className='country__app__box'>
          <CountryAppTitle
            loading={loading}
            handleChange={handleChange}
            handleButtonClick={handleButtonClick}
            handleClearClick={handleClearClick}
            countryCode={countryCode}
          />
          <h1>Loading...</h1>
        </Box>
      </AppLayout>
    );

  return (
    <AppLayout>
      <Box className='country__app__box'>
        <CountryAppTitle
          loading={loading}
          handleChange={handleChange}
          handleButtonClick={handleButtonClick}
          handleClearClick={handleClearClick}
          countryCode={countryCode}
        />
        <CountryList
          countriesData={
            foundedCountryData?.countries.length
              ? foundedCountryData.countries
              : allCountriesData.countries
          }
        />
      </Box>
    </AppLayout>
  );
}
