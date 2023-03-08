import { AccountCircle, Add, HelpOutline } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import style from './header.module.scss';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { ModalWindow } from '../ModalWindow/ModalWindow';

export const Header = () => {
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down('md'));

  const [createCourse, setCreateCourse] = useState<boolean>(false);
  const [description, setDescription] = useState<boolean>(false);

  const handleCreateCourse = () => setCreateCourse(!createCourse);
  const handleAppDescription = () => setDescription(!description);

  return (
    <AppBar position='static' className={style.header} sx={{ zIndex: 10 }}>
      <Container maxWidth={'xl'}>
        <Toolbar sx={{ flexDirection: mediaQuery ? 'column' : 'row', alignItems: 'center' }}>
          <Typography variant='h5' color={'text.primary'}>
            Logo
          </Typography>
          {!mediaQuery && (
            <Button
              color='secondary'
              variant={'outlined'}
              className={style.headerBtn}
              endIcon={<Add />}
              onClick={handleCreateCourse}
            >
              Создать курс
            </Button>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color='inherit' onClick={handleAppDescription}>
            <HelpOutline />
          </IconButton>
          <IconButton color='inherit'>
            <AccountCircle />
          </IconButton>
          <DropdownMenu />
        </Toolbar>
      </Container>

      <ModalWindow
        open={createCourse}
        onClose={handleCreateCourse}
        title={'Заголовок для создания курса'}
        submitButtonLabel={'Готово'}
        onSubmit={() => console.log('Hell')}
      >
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea hic laboriosam maiores nam omnis quos
          suscipit temporibus unde vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea hic
          laboriosam maiores nam omnis quos suscipit temporibus unde vel. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloribus ea hic laboriosam maiores nam omnis quos suscipit temporibus unde vel. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Doloribus ea hic laboriosam maiores nam omnis quos suscipit
          temporibus unde vel.
        </Typography>
      </ModalWindow>
      <ModalWindow
        open={description}
        onClose={handleAppDescription}
        title={'Заголовок для описания приложения'}
        submitButtonLabel={'Понятно'}
        onSubmit={() => console.log('is empty')}
      >
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea hic laboriosam maiores nam omnis quos
          suscipit temporibus unde vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea hic
          laboriosam maiores nam omnis quos suscipit temporibus unde vel. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloribus ea hic laboriosam maiores nam omnis quos suscipit temporibus unde vel. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Doloribus ea hic laboriosam maiores nam omnis quos suscipit
          temporibus unde vel.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea hic laboriosam maiores nam omnis quos
          suscipit temporibus unde vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea hic
          laboriosam maiores nam omnis quos suscipit temporibus unde vel. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloribus ea hic laboriosam maiores nam omnis quos suscipit temporibus unde vel. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Doloribus ea hic laboriosam maiores nam omnis quos suscipit
          temporibus unde vel.
        </Typography>
      </ModalWindow>
    </AppBar>
  );
};
