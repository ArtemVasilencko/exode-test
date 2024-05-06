import { Box, Typography } from '@mui/material';
import { ExodeIcon } from './icons/exode-icon';

export function MyHeaderLogo() {
  return (
    <Box display='flex' alignItems='center' paddingLeft='12px'>
      <ExodeIcon />
      <Typography variant='h5'>{'xode'}</Typography>
    </Box>
  );
}
