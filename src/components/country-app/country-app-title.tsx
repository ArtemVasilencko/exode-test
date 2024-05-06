import {
  Box,
  IconButton,
  Divider,
  InputBase,
  Paper,
  Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent } from 'react';
import { labels } from '../../constants/constants';
import './css/country-app.css';

interface CountryAppTitlePropsI {
  handleButtonClick: () => void;
  loading: boolean;
  countryCode: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClearClick: () => void;
}

export function CountryAppTitle({
  handleButtonClick,
  loading,
  countryCode,
  handleChange,
  handleClearClick
}: CountryAppTitlePropsI) {
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
      <Paper
        onSubmit={(e) => {
          e.preventDefault();
          handleButtonClick();
        }}
        component='form'
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={labels.searchInput}
          value={countryCode}
          onChange={handleChange}
        />
        <IconButton onClick={handleButtonClick} disabled={loading}>
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
        <IconButton onClick={handleClearClick}>
          <DeleteIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}
