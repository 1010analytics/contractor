import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const ServiceCard = ({ service }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={service.image}
        alt={service.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Rating name="read-only" value={service.rating} readOnly />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {service.rating} ({service.reviews} reviews)
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          ${service.price}
        </Typography>
        <Button variant="contained" sx={{ bgcolor: '#B4E380', mt: 2 }}>
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
