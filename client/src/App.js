import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar'; // Adjust the import path as necessary
import Hero from './component/Hero';
import Services from './component/Services';
import Footer from './component/Footer';
// import Home from './pages/Home'; // Create this component
// import About from './pages/About'; // Create this component
// import Services from './pages/Services'; // Create this component
// import Login from './pages/Login'; // Create this component
//import Signup from './pages/Signup'; // Create this component

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
    </Router>
  );
}

export default App;
