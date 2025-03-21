import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CommunityPage from './pages/CommunitiesPage/CommunityPage';
import ChatPage from './pages/ChatPage/ChatPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import MapPage from './pages/MapPage/MapPage';
import CookingPage from './pages/CookingPage/CookingPage';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import CoursesPage from './pages/FinanceCoursesPage/CoursesPage';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <>
      <Router>
        <NavigationBar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignInPage setIsSignedIn={setIsSignedIn}/>} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/community/cooking-community" element={<CookingPage />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;