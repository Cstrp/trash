import { Menu, MenuProps, styled } from '@mui/material';

export const CustomMenu = styled((props: MenuProps) => <Menu elevation={0} {...props} />)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    padding: '5px',
    marginTop: theme.spacing(2),
    minWidth: 180,
    color: 'text.primary',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: 'secondary',
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: 'action.disabled',
      },
    },
  },
}));
