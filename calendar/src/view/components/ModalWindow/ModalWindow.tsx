import { Close } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ModalWindowProps } from './modalWindowProps';
import React from 'react';

export const ModalWindow = ({
  open,
  submitButtonLabel,
  onSubmit,
  onClose,
  title,
  children,
}: ModalWindowProps): JSX.Element => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
      <DialogTitle>
        <Box display='flex' alignItems='center'>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton onClick={handleClose} sx={{ mr: -1, ml: 1 }}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleSubmit} variant='contained' color='primary'>
          {submitButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
