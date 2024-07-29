// src/components/CalendarCard.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const StyledCalendarCard = styled(Box)({
  backgroundColor: '#389ba7',
  padding: '15px',
  borderRadius: '15px',
  color: '#fff',
  width: '500px', // Fixed width
  height: '320px', // Fixed height
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
  justifyContent: 'center',
  margin: '0 auto',
});

const CalendarContainer = styled(Box)({
  flex: 1,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
});

const StyledCalendar = styled(Calendar)({
  width: '100%',
  border: '1px solid #317a8a', // Added border to the calendar
  borderRadius: '10px',
  fontFamily: 'Roboto',

  '& .react-calendar__tile': {
    borderRadius: '10px',
    padding: '5px',
    textAlign: 'center',
  },

  '& .react-calendar__tile--active': {
    background: '#317a8a',
    color: '#fff',
    fontWeight: 'bold',
  },

  '& .react-calendar__tile--now': {
    background: '#edf7f8',
    color: '#389ba7',
    fontWeight: 'bold',
  },

  '& .react-calendar__month-view__weekdays__weekday': {
    fontWeight: 'bold',
    color: '#000', // Changed color to black for better visibility
  },

  '& .react-calendar__navigation button': {
    color: '#000', // Changed color to black for better visibility
    fontWeight: 'bold', // Made the text bolder
    minWidth: '44px',
    background: 'none',
    fontSize: '14px',
    marginTop: '8px',
    padding: '0',
  },

  '& .react-calendar__navigation__label': {
    color: '#000', // Changed color to black for better visibility
    fontWeight: 'bold', // Made the text bolder
  },

  '& .react-calendar__navigation__arrow': {
    color: '#000', // Changed color to black for better visibility
  }
});

const CalendarCard = () => {
  const [value, onChange] = React.useState(new Date());

  return (
    <StyledCalendarCard>
      <Header>
        <Typography variant="h5">CALENDAR</Typography>
      </Header>
      <Typography variant="body1" sx={{ mb: 2 }}>
        CALENDAR INTERFACE SET AVAILABILITY
      </Typography>
      <CalendarContainer>
        <StyledCalendar onChange={onChange} value={value} />
      </CalendarContainer>
    </StyledCalendarCard>
  );
};

export default CalendarCard;
