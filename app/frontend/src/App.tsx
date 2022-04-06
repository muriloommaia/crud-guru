import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
