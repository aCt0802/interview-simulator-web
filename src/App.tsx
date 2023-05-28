import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Signin } from './pages/signin';
import { Signup } from './pages/signup';

function App() {
  return (
    <div className='h-screen w-screen'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to={"signin"} />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
