import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#389ba7',
  padding: theme.spacing(2),
  borderRadius: '16px',
  width: '500px',
  height: '320px',
}));

const Header = styled(Box)({
  backgroundColor: '#fff',
  borderRadius: '15px',
  width: '270px',
  padding: '8px',
  color: '#389ba7',
  textAlign: 'center',
  marginBottom: '16px',
  marginLeft: '110px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const HeaderTitle = styled(Typography)(({ theme }) => ({
  color: '#389ba7',
  
}));

const HeaderIconButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const ProfileList = styled(Box)(({ theme }) => ({
  backgroundColor: '#edf7f8',
  borderRadius: '16px',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const ProfileItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1),
  borderRadius: '8px',
  backgroundColor: '#fff',
}));

const ProfileInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const ProfileText = styled(Typography)(({ theme }) => ({
  color: '#000',
}));

const ProfileCard = () => {
  const initialProfiles = [
    { id: 1, name: 'Profile Management', type: 'company', editable: false },
    { id: 2, name: 'Profile Management', type: 'company', editable: false },
    { id: 3, name: 'Profile Management', type: 'company', editable: false },
    { id: 4, name: 'Profile Management3', type: 'company', editable: false },
    { id: 5, name: 'Profile Management4', type: 'company', editable: false },
    { id: 6, name: 'Profile Management5', type: 'company', editable: false },
  ];

  const [profiles, setProfiles] = useState(initialProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleEditClick = (id) => {
    setProfiles(profiles.map(profile =>
      profile.id === id ? { ...profile, editable: !profile.editable } : profile
    ));
  };

  const handleInputChange = (id, field, value) => {
    setProfiles(profiles.map(profile =>
      profile.id === id ? { ...profile, [field]: value } : profile
    ));
  };

  const handleSaveClick = (id) => {
    setProfiles(profiles.map(profile =>
      profile.id === id ? { ...profile, editable: false } : profile
    ));
  };

  const handleNext = () => {
    if (currentIndex + 3 < profiles.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const displayedProfiles = profiles.slice(currentIndex, currentIndex + 3);

  return (
    <CardContainer>
      <Header>
        <HeaderTitle>PROFILE</HeaderTitle>
        <HeaderIconButtons>
          <IconButton>
            <SearchIcon style={{ color: '#389ba7' }} />
          </IconButton>
          <IconButton>
            <MenuIcon style={{ color: '#389ba7' }} />
          </IconButton>
        </HeaderIconButtons>
      </Header>
      <ProfileList>
        {displayedProfiles.map(profile => (
          <ProfileItem key={profile.id}>
            <ProfileInfo>
              <PersonIcon style={{ color: '#389ba7' }} />
              {profile.editable ? (
                <>
                  <TextField
                    value={profile.name}
                    onChange={(e) => handleInputChange(profile.id, 'name', e.target.value)}
                    size="small"
                  />
                  <TextField
                    value={profile.type}
                    onChange={(e) => handleInputChange(profile.id, 'type', e.target.value)}
                    size="small"
                  />
                </>
              ) : (
                <>
                  <ProfileText>{profile.name}</ProfileText>
                  <ProfileText>{profile.type}</ProfileText>
                </>
              )}
            </ProfileInfo>
            {profile.editable ? (
              <Button onClick={() => handleSaveClick(profile.id)} color="primary">
                Save
              </Button>
            ) : (
              <Button onClick={() => handleEditClick(profile.id)} style={{ cursor: 'pointer' }}>
                update
              </Button>
            )}
          </ProfileItem>
        ))}
      </ProfileList>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        <IconButton color="inherit" onClick={handlePrev} disabled={currentIndex === 0}>
          <ChevronLeftIcon style={{ color: '#fff' ,marginTop: '-15px'}} />
        </IconButton>
        <IconButton color="inherit" onClick={handleNext} disabled={currentIndex + 3 >= profiles.length}>
          <ChevronRightIcon style={{ color: '#fff', marginTop: '-15px' }} />
        </IconButton>
      </Box>
    </CardContainer>
  );
};

export default ProfileCard;
