import { Box, Typography } from '@mui/material';
import { ExodeIcon } from '../../assets/icons/exode-icon';

export function MyHeaderLogo() {
  return (
    <Box display='flex' alignItems='center'>
      <ExodeIcon />
      <Typography variant='h5'>xode</Typography>
    </Box>
  );
}
