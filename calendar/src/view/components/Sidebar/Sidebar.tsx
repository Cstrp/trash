import React from 'react';
import { Divider, List } from '@mui/material';

export const Sidebar = () => {
  return (
    <Divider
      style={{
        width: '330px',
        maxHeight: '920px',
        padding: '30px',
        borderRadius: '16px',
      }}
    >
      <List></List>
    </Divider>
  );
};
