import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LoginComponent } from "./Login";
import { SignupComponent } from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="*" element={<LoginComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
