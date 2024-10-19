<<<<<<< HEAD
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import { useState } from 'react';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import DashboardPage from './pages/DashboardPage/DashboardPage';
>>>>>>> a1712541a52728ed6c9566eadcc546a9039f5390

import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

import "./App.css";

function App() {
  return (
    <>
<<<<<<< HEAD
      <p>App</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=""></Route>

          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
        </Routes>
      </BrowserRouter>
=======
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage/>} />
        </Routes>
      </Router>       
>>>>>>> a1712541a52728ed6c9566eadcc546a9039f5390
    </>
  );
}

export default App;
