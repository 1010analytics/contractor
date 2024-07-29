// // src/pages/ContractorDashboard.js
// import React from 'react';
// import { Box, Grid } from '@mui/material';
// import { styled } from '@mui/system';
// import Sidebar from '../component/Sidebar'; // Ensure path is correct
// import ProfileCard from '../component/ProfileCard';
// import Dashboard from '../component/Dashboard';
// import ManageServicesCard from '../component/ManageServicesCard';
// import AppointmentsCard from '../component/AppointmentsCard';
// import CalendarCard from '../component/CalendarCard';
// import { Routes, Route } from 'react-router-dom';

// const DashboardContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   backgroundColor: '#f4f6f8',
//   minHeight: '100vh',
// }));

// const ContentContainer = styled(Box)(({ theme }) => ({
//   flex: 1,
//   padding: theme.spacing(3),
// }));

// const ContractorDashboard = () => {
//   return (
//     <DashboardContainer>
//       <Sidebar /> {/* Sidebar included here */}
//       <ContentContainer>
//         <Routes>
//           <Route path="dashboard" element={<Dashboard/>} />
//           <Route path="manage-services" element={<ManageServicesCard />} />
//           <Route path="appointments" element={<AppointmentsCard />} />
//           <Route path="calendar" element={<CalendarCard />} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </ContentContainer>
//     </DashboardContainer>
//   );
// };

// export default ContractorDashboard;


// src/pages/ContractorDashboard.js
import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../component/Sidebar'; // Ensure path is correct
import ProfileCard from '../component/ProfileCard';
import Dashboard from '../component/Dashboard';
import ManageServicesCard from '../component/ManageServicesCard';
import AppointmentsCard from '../component/AppointmentsCard';
import CalendarCard from '../component/CalendarCard';

const DashboardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#f4f6f8',
  minHeight: '100vh',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(3),
}));

const ContractorDashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar /> {/* Sidebar included here */}
      <ContentContainer>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="manage-services" element={<ManageServicesCard />} />
          <Route path="appointments" element={<AppointmentsCard />} />
          <Route path="calendar" element={<CalendarCard />} />
          {/* Add more routes as needed */}
        </Routes>
      </ContentContainer>
    </DashboardContainer>
  );
};

export default ContractorDashboard;
