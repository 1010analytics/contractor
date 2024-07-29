import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Back from '../images/background1.png';
import { styled } from '@mui/system';

const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${Back})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const LoginBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  border: '2px solid rgba(0, 0, 0, 0.1)',
  maxWidth: 400,
  width: '100%',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    maxWidth: '90%',
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiTabs-flexContainer': {
    justifyContent: 'center',
  },
  '& .MuiTab-root': {
    textTransform: 'none',
    fontWeight: 'bold',
    margin: theme.spacing(0, 1),
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: '#389ba7',
    color: '#fff',
    borderRadius: theme.shape.borderRadius,
  },
}));

const Login = () => {
  const [userType, setUserType] = useState('contractor');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setUserType(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle login authentication goes here

    // Redirect based on userType
    if (userType === 'contractor') {
      navigate('/contractor-dashboard/dasboard');
    } else if (userType === 'homeowner') {
      navigate('/homeowner-dashboard');
    }
  };

  return (
    <BackgroundBox>
      <LoginBox>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <StyledTabs value={userType} onChange={handleChange} centered>
          <StyledTab label="Contractor" value="contractor" />
          <StyledTab label="Homeowner" value="homeowner" />
        </StyledTabs>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Typography
            variant="body2"
            color="textSecondary"
            align="right"
            sx={{ mt: 1, mb: 2, cursor: 'pointer' }}
          >
            Forgot Password
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </LoginBox>
    </BackgroundBox>
  );
};

export default Login;
