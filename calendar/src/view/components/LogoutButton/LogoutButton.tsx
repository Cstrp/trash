import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Logout } from '@mui/icons-material';

export const LogoutButton = () => {
  return (
    <ListItem sx={{ marginTop: 'auto' }}>
      <ListItemButton>
        <ListItemIcon sx={{ opacity: '0.6' }}>
          <Logout />
        </ListItemIcon>
        <ListItemText primary='Выйти' />
      </ListItemButton>
    </ListItem>
  );
};
