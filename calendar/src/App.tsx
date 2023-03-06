import './view/styles/app.scss';
import { Container, Switch, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { darkTheme, lightTheme } from './view/styles';
import { Calendar } from './view/components';

export const App = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  const handleThemeChanger = (): void => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ background: 'background.default' }}>
        <Switch checked={themeMode === 'dark'} onChange={handleThemeChanger} />
        <Calendar />
      </Container>
    </ThemeProvider>
  );
};
