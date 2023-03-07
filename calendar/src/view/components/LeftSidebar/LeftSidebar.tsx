import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { sidebarLinks } from 'src/data/utils/sidebarLinks';
import { LogoutButton } from '..';

interface Props {
  window?: () => Window;
}

export const LeftSidebar = (props: Props) => {
  const drawerWidth = 330;

  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      container={container}
      anchor='left'
      variant='permanent'
      sx={{
        '& .MuiDrawer-paper': {
          maxWidth: drawerWidth,
          height: '720px',
          boxSizing: 'border-box',
          paddingLeft: '30px',
          borderRadius: '16px',
          marginTop: '130px',
          marginBottom: '30px',
        },
        paddingTop: '30px',
        paddingBottom: '30px',
        marginLeft: '30px',
        marginRight: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <List
        sx={{ paddingTop: '30px', paddingBottom: '30px', display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        {sidebarLinks.map((link, index) => (
          <ListItem key={index}>
            <ListItemButton sx={{ flexGrow: 1 }}>
              <ListItemIcon sx={{ opacity: '0.6' }}>
                {typeof link.icon === 'string' ? (
                  <img src={link.icon} alt={link.text} width={'30px'} height={'33.33px'} />
                ) : (
                  <link.icon sx={{ width: '32px', height: '33px' }} />
                )}
              </ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <LogoutButton />
      </List>
    </Drawer>
  );
};
