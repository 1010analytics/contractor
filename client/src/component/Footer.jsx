import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import { Email, Phone, Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#B4E380', color: 'white', p: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom sx={{fontWeight:700}}>
            Quick Links
          </Typography>
          <Link href="/" color="inherit" sx={{ display: 'block', mb: 1  }}>Home</Link>
          <Link href="/about" color="inherit" sx={{ display: 'block', mb: 1 }}>About</Link>
          <Link href="/services" color="inherit" sx={{ display: 'block', mb: 1  }}>Services</Link>
          <Link href="/contact" color="inherit" sx={{ display: 'block', mb: 1 }}>Contact</Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom sx={{fontWeight:700}}>
            Contact
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Email sx={{ mr: 1 }} />
            <Typography variant="body1">info@xyzcompany.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Phone sx={{ mr: 1 }} />
            <Typography variant="body1">+1 234 567 890</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography variant="h6" gutterBottom sx={{fontWeight:700}}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'start', gap: 1 }}>
            <IconButton color="inherit" href="https://facebook.com" target="_blank" rel="noopener">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank" rel="noopener">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank" rel="noopener">
              <Instagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box mt={4} textAlign="center">
        <Typography variant="body2">&copy; 2024 XYZ Company. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
