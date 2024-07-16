import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Image from '../images/hero2.png';

const Hero = () => {
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
      <Typography variant="h2" sx={{ mb: 2 , fontWeight: 700}}>
        Welcome to XYZ Company
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 , fontWeight: 700 }}>
        We are happy to help you
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          sx={{ bgcolor: '#B4E380', '&:hover': { bgcolor: '#9ACF63' } }}
        >
          <Link to="/login" style={{ textDecoration: 'none', color: 'white' , fontWeight: 700}}>Login</Link>
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: '#B4E380', '&:hover': { bgcolor: '#9ACF63' } }}
        >
          <Link to="/signup" style={{ textDecoration: 'none', color: 'white' , fontWeight: 700}}>Signup</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
