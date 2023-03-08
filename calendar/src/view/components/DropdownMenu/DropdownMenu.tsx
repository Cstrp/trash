import { Button, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { AccountBox, KeyboardArrowDown, Settings } from '@mui/icons-material';
import { CustomMenu } from './CustomMenu';

export const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant='contained' disableElevation onClick={handleClick} endIcon={<KeyboardArrowDown />}>
        Ilona Mask
      </Button>
      <CustomMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} disableRipple>
          <AccountBox />
          Профиль
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Settings />
          Настройки
        </MenuItem>
      </CustomMenu>
    </>
  );
};
