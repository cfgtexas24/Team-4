import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CommunityPage from './pages/CommunitiesPage/CommunityPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <>
    <NavigationBar/>
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage/>} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        
        {/* Dashboard Route */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
