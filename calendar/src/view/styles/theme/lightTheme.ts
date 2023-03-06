import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#10D2D2',
    },
    background: {
      default: '#F7F7F7',
    },
    text: {
      primary: '#203839',
      secondary: '#10D2D2',
    },
    error: {
      main: '#D21010',
    },
    action: {
      disabled: '#B5BDBE',
      selected: '#10D2D2',
    },
  },
});
