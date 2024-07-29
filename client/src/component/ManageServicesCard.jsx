

// import React, { useState } from 'react';
// import { Box, Button, Typography, TextField, IconButton } from '@mui/material';
// import { styled } from '@mui/system';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { useLocation } from 'react-router-dom';

// const StyledCard = styled(Box)(({ theme, fullPage }) => ({
//   backgroundColor: '#389ba7',
//   padding: '16px',
//   borderRadius: '15px',
//   color: '#fff',
//   textAlign: 'center',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   width: fullPage ? '95%' : '500px',
//   height: fullPage ? '80vh' : '320px',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   margin: fullPage ? '16px auto' : 'auto',
//   overflow: fullPage ? 'auto' : 'hidden',
// }));

// const Header = styled(Box)({
//   backgroundColor: '#fff',
//   borderRadius: '15px',
//   width: '270px',
//   padding: '8px',
//   color: '#389ba7',
//   textAlign: 'center',
//   marginBottom: '25px',
// });

// const ServiceList = styled(Box)({
//   width: '90%',
// });

// const ServiceItem = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   marginBottom: '8px',
// });

// const ServiceInput = styled(TextField)({
//   backgroundColor: '#fff',
//   borderRadius: '15px',
//   marginRight: '8px',
//   flexGrow: 1,
// });

// const ServiceButton = styled(Button)({
//   backgroundColor: '#fff',
//   color: '#389ba7',
//   margin: '0 4px',
//   '&:hover': {
//     backgroundColor: '#edf7f8',
//   },
// });

// const AddButton = styled(Button)({
//   backgroundColor: '#fff',
//   color: '#389ba7',
//   marginBottom: '16px',
//   '&:hover': {
//     backgroundColor: '#edf7f8',
//   },
// });

// const Navigation = styled(Box)({
//   display: 'flex',
//   justifyContent: 'space-between',
//   width: '100%',
//   marginTop: '7px',
// });

// const ManageServicesCard = () => {
//   const location = useLocation();
//   const fullPage = location.pathname.includes('/manage-services');

//   const [services, setServices] = useState([
//     { id: 1, name: 'Service 1' },
//     { id: 2, name: 'Service 2' },
//     { id: 3, name: 'Service 3' },
//     { id: 4, name: 'Service 4' },
//     { id: 5, name: 'Service 5' },
//     { id: 6, name: 'Service 6' },
//     { id: 7, name: 'Service 7' },
//     { id: 8, name: 'Service 8' },
//     { id: 9, name: 'Service 9' },
//   ]);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleEdit = (id, newName) => {
//     setServices(services.map(service => (service.id === id ? { ...service, name: newName } : service)));
//   };

//   const handleDelete = (id) => {
//     setServices(services.filter(service => service.id !== id));
//   };

//   const handleAdd = () => {
//     const newService = { id: services.length + 1, name: `Service ${services.length + 1}` };
//     setServices([...services, newService]);
//   };

//   const handleNext = () => {
//     if (fullPage) {
//       if (currentIndex + 9 < services.length) {
//         setCurrentIndex(currentIndex + 9);
//       }
//     } else {
//       if (currentIndex + 4 < services.length) {
//         setCurrentIndex(currentIndex + 4);
//       }
//     }
//   };

//   const handlePrev = () => {
//     if (fullPage) {
//       if (currentIndex - 9 >= 0) {
//         setCurrentIndex(currentIndex - 9);
//       }
//     } else {
//       if (currentIndex - 4 >= 0) {
//         setCurrentIndex(currentIndex - 4);
//       }
//     }
//   };

//   const displayedServices = fullPage
//     ? services.slice(currentIndex, currentIndex + 9)
//     : services.slice(currentIndex, currentIndex + 4);

//   return (
//     <StyledCard fullPage={fullPage}>
//       <Header>
//         <Typography variant="h6">MANAGE SERVICES</Typography>
//       </Header>
      
//       <ServiceList>
//         {displayedServices.map((service) => (
//           <ServiceItem key={service.id}>
//             <ServiceInput
//               variant="outlined"
//               size="small"
//               value={service.name}
//               onChange={(e) => handleEdit(service.id, e.target.value)}
//             />
//             <ServiceButton variant="contained"onClick={handleAdd}>ADD</ServiceButton>
//             <ServiceButton variant="contained" onClick={() => handleEdit(service.id, service.name)}>EDIT</ServiceButton>
//             <ServiceButton variant="contained" onClick={() => handleDelete(service.id)}>DELETE</ServiceButton>
//           </ServiceItem>
//         ))}
//       </ServiceList>
//       <Navigation>
//         <IconButton color="inherit" onClick={handlePrev} disabled={currentIndex === 0}>
//           <ChevronLeftIcon style={{ color: '#fff' }} />
//         </IconButton>
//         <IconButton color="inherit" onClick={handleNext} disabled={currentIndex + (fullPage ? 9 : 3) >= services.length}>
//           <ChevronRightIcon style={{ color: '#fff' }} />
//         </IconButton>
//       </Navigation>
//     </StyledCard>
//   );
// };

// export default ManageServicesCard;


import React, { useState } from 'react';
import { Box, Button, Typography, TextField, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useLocation } from 'react-router-dom';

const StyledCard = styled(Box)(({ theme, fullPage }) => ({
  backgroundColor: '#389ba7',
  padding: '16px',
  borderRadius: '15px',
  color: '#fff',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: fullPage ? '95%' : '500px',
  height: fullPage ? '80vh' : '320px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: fullPage ? '16px auto' : 'auto',
 
}));

const Header = styled(Box)({
  backgroundColor: '#fff',
  borderRadius: '15px',
  width: '270px',
  padding: '8px',
  color: '#389ba7',
  textAlign: 'center',
  marginBottom: '25px',
});

const ServiceList = styled(Box)({
  width: '90%',
});

const ServiceItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '12px',
});

const ServiceInput = styled(TextField)({
  backgroundColor: '#fff',
  borderRadius: '15px',
  marginRight: '8px',
  flexGrow: 1,
});

const ServiceButton = styled(Button)({
  backgroundColor: '#fff',
  color: '#389ba7',
  margin: '0 4px',
  '&:hover': {
    backgroundColor: '#edf7f8',
  },
});

const AddButton = styled(Button)({
  backgroundColor: '#fff',
  color: '#389ba7',
  marginBottom: '16px',
  '&:hover': {
    backgroundColor: '#edf7f8',
  },
});

const Navigation = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '7px',
});

const ManageServicesCard = () => {
  const location = useLocation();
  const fullPage = location.pathname.includes('/manage-services');

  const [services, setServices] = useState([
    { id: 1, name: 'Service 1' },
    { id: 2, name: 'Service 2' },
    { id: 3, name: 'Service 3' },
    { id: 4, name: 'Service 4' },
    { id: 5, name: 'Service 5' },
    { id: 6, name: 'Service 6' },
    { id: 7, name: 'Service 7' },
    { id: 8, name: 'Service 8' },
    { id: 9, name: 'Service 9' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleEdit = (id, newName) => {
    setServices(services.map(service => (service.id === id ? { ...service, name: newName } : service)));
  };

  const handleDelete = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const handleAdd = () => {
    const newService = { id: services.length + 1, name: '' };
    setServices([...services, newService]);
  };

  const handleNext = () => {
    if (fullPage) {
      if (currentIndex + 9 < services.length) {
        setCurrentIndex(currentIndex + 9);
      }
    } else {
      if (currentIndex + 4 < services.length) {
        setCurrentIndex(currentIndex + 4);
      }
    }
  };

  const handlePrev = () => {
    if (fullPage) {
      if (currentIndex - 9 >= 0) {
        setCurrentIndex(currentIndex - 9);
      }
    } else {
      if (currentIndex - 4 >= 0) {
        setCurrentIndex(currentIndex - 4);
      }
    }
  };

  const displayedServices = fullPage
    ? services.slice(currentIndex, currentIndex + 9)
    : services.slice(currentIndex, currentIndex + 4);

  return (
    <StyledCard fullPage={fullPage}>
      <Header>
        <Typography variant="h6">MANAGE SERVICES</Typography>
      </Header>
      
      <ServiceList>
        {displayedServices.map((service) => (
          <ServiceItem key={service.id}>
            <ServiceInput
              variant="outlined"
              size="small"
              value={service.name}
              onChange={(e) => handleEdit(service.id, e.target.value)}
            />
            <ServiceButton variant="contained" onClick={handleAdd}>ADD</ServiceButton>
            <ServiceButton variant="contained" onClick={() => handleEdit(service.id, service.name)}>EDIT</ServiceButton>
            <ServiceButton variant="contained" onClick={() => handleDelete(service.id)}>DELETE</ServiceButton>
          </ServiceItem>
        ))}
      </ServiceList>
     
      <Navigation>
        <IconButton color="inherit" onClick={handlePrev} disabled={currentIndex === 0}>
          <ChevronLeftIcon style={{ color: '#fff' }} />
        </IconButton>
        <IconButton color="inherit" onClick={handleNext} disabled={currentIndex + (fullPage ? 9 : 4) >= services.length}>
          <ChevronRightIcon style={{ color: '#fff' }} />
        </IconButton>
      </Navigation>
    </StyledCard>
  );
};

export default ManageServicesCard;

