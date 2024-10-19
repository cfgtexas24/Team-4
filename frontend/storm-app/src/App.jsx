import { useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom"; // Import Router components
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import CommunityPage from "./pages/CommunitiesPage/CommunityPage";
import "bootstrap/dist/css/bootstrap.min.css";

import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import CoursesPage from "./pages/FinanceCoursesPage/CoursesPage";

import "./App.css";

function App() {
  return (
    <>
      <p>App</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/course" element={<CoursesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
