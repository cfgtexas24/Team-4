import { useState } from 'react';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CommunityPage from './pages/CommunitiesPage/CommunityPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </Router>       
    </>
  )
}

export default App;