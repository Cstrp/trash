import { Alert, AlertTitle, IconButton, Snackbar } from "@mui/material";
import React, { useState } from "react";
import {
  Close,
  Done,
  InfoOutlined,
  ReportGmailerrorred,
  WarningAmber,
} from "@mui/icons-material";
import { CustomSnackBarProps } from "./CustomSnackBarProps";

export const CustomSnackBar = ({ message, variant }: CustomSnackBarProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        severity={variant}
        variant="filled"
        sx={{ width: "100%" }}
        iconMapping={{
          success: <Done fontSize="inherit" />,
          error: <ReportGmailerrorred />,
          info: <InfoOutlined fontSize="inherit" />,
          warning: <WarningAmber />,
        }}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            <Close fontSize="inherit" />
          </IconButton>
        }
      >
        <AlertTitle>{variant?.toUpperCase()}</AlertTitle>
        <strong>{message}</strong>
      </Alert>
    </Snackbar>
  );
};
