// src/pages/ContractorDashboard.js
import React from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Sidebar from './Sidebar';
import ProfileCard from './ProfileCard';
import ManageServicesCard from './ManageServicesCard';
import AppointmentsCard from './AppointmentsCard';
import CalendarCard from './CalendarCard';

const DashboardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#f4f6f8',
  minHeight: '100vh',  // Ensure full height layout
}));

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '300px',
  height: '100%',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(3),
//   overflow: 'auto',  // Handle overflow
  height: '100vh',   // Ensure it takes full height
}));

const ContractorDashboard = () => {
  return (
    <DashboardContainer>
      <ContentContainer>
        <Grid container spacing={5}>
          {/* First Column: ProfileCard and CalendarCard */}
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={5}>
              <Grid item xs={12}>
                <ProfileCard />
              </Grid>
              <Grid item xs={12}>
                 <CalendarCard />
              </Grid>
            </Grid>
          </Grid>

          {/* Second Column: ManageServicesCard and AppointmentsCard */}
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={5}>
              <Grid item xs={12}>
                 <ManageServicesCard />
              </Grid>
              <Grid item xs={12}>
                <AppointmentsCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>
    </DashboardContainer>
  );
};

export default ContractorDashboard;
