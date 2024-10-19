import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="/" element=""></Route>

          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/course" element={<CoursesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
