import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#10D2D2",
    },
    background: {
      default: "#F7F7F7",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#203839",
      secondary: "#6B6B6B",
      disabled: "#ffffff",
    },
    error: {
      main: "#D21010",
    },
  },
});
