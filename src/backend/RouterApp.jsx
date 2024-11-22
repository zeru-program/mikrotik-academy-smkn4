import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../frontend/pages/Home";
import DashboardHome from "../frontend/pages/DashboardHome";
import DashboardCms from "../frontend/pages/DashboardCms";
import Login from "../frontend/pages/Login";
import DashboardTrainer from "../frontend/pages/DashboardTrainer";
import DashboardAccount from "../frontend/pages/DashboardAccount";
import Logout from '../frontend/pages/Logout';

// Komponen untuk memverifikasi akses
const PrivateRoute = ({ element, ...rest }) => {
  const isLoggedIn = sessionStorage.getItem("hasLogin");
  const userRole = sessionStorage.getItem("role");

  if (!isLoggedIn || (userRole !== "admin" && userRole !== "developer")) {
    return <Navigate to="/" replace />
  }

  return element;
};

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Private Routes */}
        <Route path='/dashboard' element={<PrivateRoute element={<DashboardHome />} />} />
        <Route path='/dashboard/cms' element={<PrivateRoute element={<DashboardCms />} />} />
        <Route path='/dashboard/trainer' element={<PrivateRoute element={<DashboardTrainer />} />} />
        <Route path='/dashboard/account' element={<PrivateRoute element={<DashboardAccount />} />} />
        {/* Private Routes */}
        <Route path='/auth' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;
