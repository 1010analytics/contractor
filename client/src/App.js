import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Services from './component/Services';
import Footer from './component/Footer';
import Login from './page/Login';
import Signup from './page/Signup';
import ContractorDashboard from './page/ContractorDashboard';
import HomeownerDashboard from './page/HomeownerDashboard';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Footer />
    </>
  );
};

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isDashboardPage = ['/contractor-dashboard', '/homeowner-dashboard'].includes(location.pathname);

  return (
    <>
      {isHomePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contractor-dashboard/*" element={<ContractorDashboard />} />
        <Route path="/homeowner-dashboard/*" element={<HomeownerDashboard />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
