import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { CountryI } from '../models/countries-types';
import { CountryCardLanguagesList } from './country-card-languages-list';
import '../css/country-card.css';

export function CountryCard(props: CountryI) {
  return (
    <Card className='country__card' elevation={5}>
      <CardContent>
        <Box className='country__card__info'>
          <Typography variant='h5'>{props.name}</Typography>
          <p>{props.capital}</p>
          <Box className='country__card__languages__box'>
            {!!props.languages.length && <RecordVoiceOverIcon />}
            <CountryCardLanguagesList data={props.languages.slice(0, 2)} />
          </Box>
        </Box>
        <Box display='flex' alignItems='center'>
          <p className='country__card__phone'>
            <PhoneAndroidIcon /> +{props.phone}
          </p>
          <p className='country__card__currency'>
            {props.currency?.split(',').slice(0, 3).join(', ')}
          </p>
        </Box>
      </CardContent>
    </Card>
  );
}
