import { useState } from 'react';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import DashboardPage from './pages/DashboardPage/DashboardPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage/>} />
        </Routes>
      </Router>       
    </>
  )
}

export default App
