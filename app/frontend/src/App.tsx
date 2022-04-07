import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <div className="bg-indigo-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/edit/profile" element={<EditProfile />} />
      </Routes>
    </div>
  );
}
