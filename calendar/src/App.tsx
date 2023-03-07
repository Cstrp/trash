import { AppBar, Box, Button, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { Calendar, LeftSidebar } from './view/components';
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
      <Box sx={{ maxWidth: '1920px', margin: '0 auto' }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static'>
            <Toolbar>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                LOGO
              </Typography>
              <Button color='inherit'>ACCOUNT</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ maxHeight: '980px', padding: '30px' }}>
          <LeftSidebar />
          <Box sx={{ paddingLeft: '300px' }}>
            <Calendar />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
