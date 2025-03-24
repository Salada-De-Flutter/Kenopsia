import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login-form" element={<Login />} />
      <Route path="/register" element={<Login />} />
    </Routes>
  );
}

export default Router;