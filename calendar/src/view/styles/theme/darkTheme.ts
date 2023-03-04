import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#203839",
    },
    secondary: {
      main: "#10D2D2",
    },
    background: {
      default: "#1C1C1C",
      paper: "#2A2A2A",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#A6A6A6",
    },
  },
});
