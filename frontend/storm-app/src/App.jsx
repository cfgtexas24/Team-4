import { useState } from 'react';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CommunityPage from './pages/CommunitiesPage/CommunityPage';
import ChatPage from './pages/ChatPage/ChatPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
  return (
    <>
      <Router>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </Router>       
    </>
  )
}

export default App;