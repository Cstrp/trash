import { TabTypes } from '../../../data/enums';
import React from 'react';
import { Button, IconButton, Stack } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface TabButtonProps {
  selectedTab: TabTypes;
  handleTabReset?: () => void;
}

export const TabButton = ({ selectedTab, handleTabReset }: TabButtonProps) => {
  return (
    <>
      {selectedTab !== TabTypes.DAY && (
        <Stack
          direction={'row'}
          sx={{
            maxWidth: '245px',
            margin: 0,
            p: '16px 32px',
            gap: '32px',
            backgroundColor: 'background.default',
          }}
        >
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <Button sx={{ color: 'text.primary' }} onClick={handleTabReset} disableRipple>
            Сегодня
          </Button>
          <IconButton>
            <ChevronRight />
          </IconButton>
        </Stack>
      )}
    </>
  );
};
