import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useTheme } from '@mui/material/styles';

const ServiceCard = ({ service }) => {
  const theme = useTheme();

  return (
    <Card 
      sx={{
        width: { xs: '100%', sm: 350 }, 
        height: 320, 
        margin: 2, 
        bgcolor: '#389ba7', 
        color: 'white', 
        textAlign: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between'
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {service.title}
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image={service.image}
          alt={service.title}
          sx={{ margin: 'auto', maxHeight: 140 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
          <Rating name="read-only" value={service.rating} readOnly max={1} />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {service.rating} ({service.reviews} reviews)
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ mt: 1 }}>
          ${service.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
