import { useState } from 'react';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import DashboardPage from './pages/DashboardPage/DashboardPage';

import './App.css'

function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage/>} />
        </Routes>
      </Router>       
    </>
  )
}

export default App
