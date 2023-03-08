import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { sidebarLinks } from './sidebarLinks';

export const Sidebar = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '330px',
        padding: '30px 0',
        borderRadius: '16px',
        bgcolor: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <List sx={{ width: '100%', maxWidth: 360 }}>
        {sidebarLinks.map((link) => (
          <ListItem key={link.link} disablePadding sx={{ '&.Mui-selected': { bgcolor: '#F6F9FC' } }}>
            <ListItemButton sx={{ color: '#666666', borderRadius: '12px' }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <img src={link.icon} alt={link.text} />
              </ListItemIcon>
              <ListItemText primary={link.text} sx={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
