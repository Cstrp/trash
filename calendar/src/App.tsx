import { Box, Container, ThemeProvider } from '@mui/material';
import { Calendar, Header, Sidebar } from './view/components';
import { darkTheme, lightTheme } from './view/styles';
import { useState } from 'react';

export const App = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  const handleThemeChanger = (): void => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  console.log(handleThemeChanger);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth={'xl'}>
        <Box sx={{ display: 'flex', flexFlow: 'row nowrap', mt: '30px', mb: '30px' }}>
          <Sidebar />
          <Calendar />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
