import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Download } from '@mui/icons-material';
import Button from '@mui/material/Button';
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
import { Link } from 'react-scroll';

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
    <a href='/Resume.pdf' download style={{textDecoration:'none'}}>



    <Button
      variant="outlined"
      startIcon={<Download />}
      sx={{color:"#5c58da",border:"1px solid #5c58da",borderRadius:'2rem',boxShadow: '5px 6px 10px rgba(0, 0, 0, 0.1)',transition: "transform 0.5s","&:hover": {transform: "scale(1.1)"}}}
    >
      Resume
    </Button>
    </a>

          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px' }}>
      <List sx={{ display: 'flex' }}>
      
      <Link to='home' smooth>
        <ListItem button sx={{color: '#676565' }}>
          <ListItemText  primary="HOME" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
      </Link>

      <Link  to='about' smooth>
        <ListItem button sx={{ color: '#676565' }}>
          <ListItemText primary="ABOUT" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
        </Link>
      <Link  to='skills' smooth>
        <ListItem button sx={{ color: '#676565' }}>
          <ListItemText primary="SKILLS" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
        </Link>
      <Link  to='contact' smooth>
        <ListItem button sx={{ color: '#676565' }}>
          <ListItemText primary="CONTACTS" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
        </Link>
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
        <List>
      <Link to='home' smooth>
        <ListItem button sx={{color: '#676565' }}>
          <ListItemText  primary="HOME" sx={{'& .MuiTypography-root': {fontSize: '12px'},fontWeight:'600'}}/>
        </ListItem>
      </Link>

      <Link  to='about' smooth>
        <ListItem button sx={{ color: '#676565' }}>
          <ListItemText primary="ABOUT" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
        </Link>
      <Link  to='skills' smooth>
        <ListItem button sx={{ color: '#676565' }}>
          <ListItemText primary="SKILLS" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
        </Link>
      <Link  to='contact' smooth>
        <ListItem button sx={{ color: '#676565' }}>
          <ListItemText primary="CONTACTS" sx={{'& .MuiTypography-root': {fontSize: '12px',},}}/>
        </ListItem>
        </Link>
      </List>
        </Box>
      </Drawer>
      <DrawerHeader />
    </>
  );
};

export default Navbar;
