// src/components/AppointmentsCard.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const StyledCard = styled(Box)({
  backgroundColor: '#389ba7',
  padding: '16px',
  borderRadius: '15px',
  color: '#fff',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '500px',
  height: '320px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Header = styled(Box)({
  backgroundColor: '#fff',
  borderRadius: '15px',
  width: '270px',
  padding: '8px',
  color: '#389ba7',
  textAlign: 'center',
  marginBottom: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const AppointmentList = styled(Box)({
  width: '100%',
});

const AppointmentItem = styled(Box)({
  backgroundColor: '#fff',
  color: '#389ba7',
  borderRadius: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  marginBottom: '8px',
});

const AppointmentInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const DateBadge = styled(Box)({
  backgroundColor: '#389ba7',
  color: '#fff',
  borderRadius: '10px',
  padding: '2px 8px',
  fontSize: '12px',
  marginLeft: '8px',
});

const NavButton = styled(Button)({
  color: '#fff',
  minWidth: '30px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const AppointmentsCard = () => {
  const appointments = [1, 2, 3]; // Placeholder for appointments

  return (
    <StyledCard>
      <Header>
        <Typography variant="h6">APPOINTMENTS</Typography>
        <Box>
          <SearchIcon sx={{ marginRight: '8px' }} />
          <MenuIcon />
        </Box>
      </Header>
      <AppointmentList>
        {appointments.map((appointment) => (
          <AppointmentItem key={appointment}>
            <AppointmentInfo>
              <PersonIcon sx={{ marginRight: '8px' }} />
              <Typography>Profile Management</Typography>
            </AppointmentInfo>
            {appointment === 1 && (
              <DateBadge>25 JULY 2024</DateBadge>
            )}
          </AppointmentItem>
        ))}
      </AppointmentList>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '16px' }}>
        <NavButton>&lt;</NavButton>
        <NavButton>&gt;</NavButton>
      </Box>
    </StyledCard>
  );
};

export default AppointmentsCard;
