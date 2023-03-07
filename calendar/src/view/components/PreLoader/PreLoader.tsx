import { Box, CircularProgress } from '@mui/material';

export const PreLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CircularProgress color={'secondary'} />
    </Box>
  );
};
