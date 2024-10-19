import { useState } from "react";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import CommunityPage from "./pages/CommunitiesPage/CommunityPage";
import "bootstrap/dist/css/bootstrap.min.css";

import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />
      <p>App</p>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
