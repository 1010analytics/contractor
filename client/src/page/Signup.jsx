import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Back from '../images/background1.png'; // Ensure the path is correct

const SignUpBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  maxWidth: 400,
  width: '100%',
  textAlign: 'center',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  border: '2px solid rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    maxWidth: '90%',
  },
}));

const SignUp = () => {
  const [userType, setUserType] = useState('contractor');

  return (
    <Box
      sx={{
        backgroundImage: `url(${Back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <SignUpBox>
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 2 , color:'#389ba7' , fontWeight: 700}}>
          Sign Up
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <RadioGroup
            row
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <FormControlLabel value="contractor" control={<Radio />} label="Contractor" />
            <FormControlLabel value="homeowner" control={<Radio />} label="Homeowner" />
          </RadioGroup>
        </Box>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
            sx={{ mb: 1 }}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            sx={{ mb: 1 }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            sx={{ mb: 1 }}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            margin="normal"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 1 }}
          >
            Submit
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </Box>
      </SignUpBox>
    </Box>
  );
};

export default SignUp;
