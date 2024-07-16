import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(500));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{
        width: 250,
        mt: 2,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/services">
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} to="/login">
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={Link} to="/signup">
          <ListItemText primary="Signup" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: '#B4E380' }}>
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Logo</Link>
        </Typography>
        {!isMobile && (
          <Box sx={{ flexGrow: 5, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button color="inherit">
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' , fontWeight: 700 }}>Home</Link>
            </Button>
            <Button color="inherit">
              <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' , fontWeight: 700 }}>About</Link>
            </Button>
            <Button color="inherit">
              <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' , fontWeight: 700 }}>Services</Link>
            </Button>
            <Button color="inherit">
              <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' , fontWeight: 700 }}>Contact Us</Link>
            </Button>
          </Box>
        )}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="secondary">
              <Link to="/login" style={{ textDecoration: 'none', color: '#ffffff' ,fontWeight: 700 }}>Login</Link>
            </Button>
            <Button color="secondary">
              <Link to="/signup" style={{ textDecoration: 'none', color: '#ffffff' , fontWeight: 700}}>Signup</Link>
            </Button>
          </Box>
        )}
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <IconButton onClick={toggleDrawer(false)} sx={{ ml: 'auto', mt: 1 }}>
          <CloseIcon />
        </IconButton>
        {drawerList}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
