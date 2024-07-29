import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ServiceCard from './ServiceCard';
import Typography from '@mui/material/Typography';
import Maid from '../images/hero.jpeg';
import Plumber from '../images/plumber.jpg';
import Electic from '../images/electric.jpg';
import Cook from '../images/cook.jpeg';

const services = [
  {
    image: Maid,
    title: 'Home Repairs Maintance',
    
    rating: 4.5,
    reviews: 120,
    price: 100,
  },
  {
    image: Plumber,
    title: 'Cleaning Services',
    
    rating: 4.0,
    reviews: 90,
    price: 150,
  },
  {
    image: Electic,
    title: 'Landscaping And Outdor Services',
    
    rating: 4.0,
    reviews: 90,
    price: 150,
  },
  {
    image: Cook,
    title: 'Renovation And Remodeling',
    
    rating: 4.0,
    reviews: 90,
    price: 150,
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 4, backgroundColor: '#fff' }}>
      <Typography  sx={{ mb: 4, textAlign: 'center' ,color: '#389ba7' , fontSize:'42px' , fontWeight: 700}}>
        Services
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item key={index}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
