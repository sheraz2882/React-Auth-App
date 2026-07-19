import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LoginComponent } from "./Login";
import { SignupComponent } from "./Signup";
import HomePage from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="*" element={<LoginComponent />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
