import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" sx = {{background:"#ebecf1",boxShadow:'0px 0px 0px 0px'}}>
        <Toolbar>
        <Box sx={{ display: { xs: 'block', md: 'none' }, mr: 'auto'  }}>
            <IconButton
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color: '#676565' }}>
            My App
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px' }}>
      <List sx={{ display: 'flex' }}>
      
      {/* <Link href='/'> */}
        <ListItem button sx={{color: '#676565' }}>
          <ListItemText  primary="HOME" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
      {/* </Link> */}
      
        <ListItem button sx={{ color: '#676565' }}>
          <ListItemText primary="ABOUT" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
        <ListItem button sx={{ color: '#676565' }}>
          <ListItemText primary="SKILLS" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
        <ListItem button sx={{ color: '#676565' }}>
          <ListItemText primary="PROJECTS" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
        <ListItem button sx={{ color: '#676565' }}>
          <ListItemText primary="CONTACTS" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
      </List>
    </Box>

        </Toolbar>
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>


        <Box sx={{ overflowY: 'auto' }}>
          <List >
          <ListItem button sx={{color: '#676565' }}>
          <ListItemText  primary="HOME" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
        <ListItem button sx={{ color: '#676565' }}>
          <ListItemText primary="ABOUT" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
        <ListItem button sx={{ color: '#676565' }}>
          <ListItemText primary="SKILLS" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
        <ListItem button sx={{ color: '#676565' }}>
          <ListItemText primary="PROJECTS" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
        <ListItem button sx={{ color: '#676565' }}>
          <ListItemText primary="CONTACTS" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
          </List>
        </Box>
      </Drawer>
      <DrawerHeader />
    </>
  );
};

export default Navbar;
