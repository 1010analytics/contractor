// // src/components/Sidebar.js
// import React from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import { styled } from '@mui/system';
// import Profile from '../images/profile1.png';
// import SettingsIcon from '@mui/icons-material/Settings';
// import LogoutIcon from '@mui/icons-material/Logout';

// const SidebarContainer = styled(Box)(({ theme }) => ({
//   width: '300px',
//   height: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   padding: 0,
// }));

// const TopSection = styled(Box)(({ theme }) => ({
//   backgroundColor: '#389ba7',
//   padding: theme.spacing(2),
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   paddingBottom: theme.spacing(2),
// }));

// const BottomSection = styled(Box)(({ theme }) => ({
//   backgroundColor: '#edf7f8',
//   flex: 1,
//   padding: theme.spacing(2),
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
// }));

// const MenuButton = styled(Button)(({ theme }) => ({
//   color: '#fff',
//   marginBottom: theme.spacing(2),
//   justifyContent: 'center',
//   textTransform: 'none',
//   borderRadius: '25px',
//   backgroundColor: '#389ba7',
//   width: '200px',
//   '&:hover': {
//     backgroundColor: '#317a8a',
//   },
// }));

// const ProfileContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   marginTop: theme.spacing(4),
//   marginBottom: theme.spacing(2),
// }));

// const Sidebar = () => {
//   return (
//     <SidebarContainer>
//       <TopSection>
//         <ProfileContainer>
//           <img src={Profile} alt="Contractor" style={{ width: '150px', height: '100px', borderRadius: '50%' }} />
//           <Typography variant="h6" align="center" sx={{ mt: 2, fontWeight: 700 }}>Contractor</Typography>
//         </ProfileContainer>
//       </TopSection>
//       <BottomSection>
//         <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <MenuButton fullWidth>Dashboard</MenuButton>
//           <MenuButton fullWidth>Verify Contractors</MenuButton>
//           <MenuButton fullWidth>Manage Services</MenuButton>
//         </Box>
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <MenuButton fullWidth startIcon={<SettingsIcon />}>Settings</MenuButton>
//           <MenuButton fullWidth startIcon={<LogoutIcon />}>Logout</MenuButton>
//         </Box>
//       </BottomSection>
//     </SidebarContainer>
//   );
// };

// export default Sidebar;


// src/components/Sidebar.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Profile from '../images/profile1.png';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '300px',
  height: '110vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 0,
  position: 'static',
}));

const TopSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#389ba7',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: theme.spacing(2),
}));

const BottomSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#edf7f8',
  flex: 1,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const MenuButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  marginBottom: theme.spacing(2),
  justifyContent: 'center',
  textTransform: 'none',
  borderRadius: '25px',
  backgroundColor: '#389ba7',
  width: '200px',
  '&:hover': {
    backgroundColor: '#317a8a',
  },
}));

const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
}));

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <TopSection>
        <ProfileContainer>
          <img src={Profile} alt="Contractor" style={{ width: '150px', height: '100px', borderRadius: '50%' }} />
          <Typography variant="h6" align="center" sx={{ mt: 2, fontWeight: 700 }}>Contractor</Typography>
        </ProfileContainer>
      </TopSection>
      <BottomSection>
        <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MenuButton fullWidth onClick={() => navigate('/contractor-dashboard/dashboard')}>Dashboard</MenuButton>
          <MenuButton fullWidth onClick={() => navigate('/contractor-dashboard/manage-services')}>Manage Services</MenuButton>
          <MenuButton fullWidth onClick={() => navigate('/contractor-dashboard/appointments')}>Appointments</MenuButton>
          {/* <MenuButton fullWidth onClick={() => navigate('/contractor-dashboard/calendar')}>Calendar</MenuButton> */}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MenuButton fullWidth startIcon={<SettingsIcon />}>Settings</MenuButton>
          <MenuButton fullWidth startIcon={<LogoutIcon />}>Logout</MenuButton>
        </Box>
      </BottomSection>
    </SidebarContainer>
  );
};

export default Sidebar;
