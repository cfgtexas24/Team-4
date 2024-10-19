import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
