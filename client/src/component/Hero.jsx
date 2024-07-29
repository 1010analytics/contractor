import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Image from '../images/background_web_des.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Hero = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        height: '90vh',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography
        sx={{
          mb: 2,
          fontWeight: 700,
          color: '#80C4E9',
          fontSize: isSmallScreen ? '48px' : '72px', // Adjust font size for smaller screens
        }}
      >
        Welcome to <span style={{ color: 'white' }}>XYZ</span>
      </Typography>
      <Typography  sx={{ mb: 4, fontWeight: 700 , fontSize: '32px' }}>
           Your go to platform for 
           <br/>contracting and subcontracting
      </Typography>
      {/* <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          sx={{ bgcolor: '#B4E380', '&:hover': { bgcolor: '#9ACF63' } }}
        >
          <Link to="/login" style={{ textDecoration: 'none', color: 'white', fontWeight: 700 }}>
            Login
          </Link>
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: '#B4E380', '&:hover': { bgcolor: '#9ACF63' } }}
        >
          <Link to="/signup" style={{ textDecoration: 'none', color: 'white', fontWeight: 700 }}>
            Signup
          </Link>
        </Button>
      </Box> */}
    </Box>
  );
};

export default Hero;
