import { createTheme } from '@mui/material';
import { breakpoints } from './breakpoints';

export const darkTheme = createTheme({
  ...breakpoints,
  palette: {
    mode: 'dark',
    primary: {
      main: '#203839',
    },
    secondary: {
      main: '#10D2D2',
    },
    background: {
      default: '#1C1C1C',
      paper: '#2A2A2A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A6A6A6',
    },
  },
});
