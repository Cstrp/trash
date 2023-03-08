import { ReactNode, useState } from 'react';
import { ErrorSharp } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

export const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  const [hasError, setHasError] = useState(false);

  const handleOnError = () => {
    setHasError(true);
  };

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column',
        width: '100%',
        height: '40vw',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography onError={handleOnError} variant={'h3'} sx={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
        <ErrorSharp sx={{ mt: 2.2 }} onError={handleOnError}>
          {children}
        </ErrorSharp>
        Ой, что-то пошло не так 💥 KABOOM 💥
      </Typography>
    </Box>
  );
};
