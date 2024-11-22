import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../frontend/pages/Home"
import DashboardHome from "../frontend/pages/DashboardHome"
import DashboardCms from "../frontend/pages/DashboardCms"
import Login from "../frontend/pages/Login"
import DashboardTrainer from "../frontend/pages/DashboardTrainer"
import DashboardAccount from "../frontend/pages/DashboardAccount"

const RouterApp = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<DashboardHome />} />
        <Route path='/dashboard/cms' element={<DashboardCms />} />
        <Route path='/dashboard/trainer' element={<DashboardTrainer />} />
        <Route path='/dashboard/account' element={<DashboardAccount />} />
        <Route path='/auth' element={<Login/>} />
         </Routes>
    </Router>
    </>
  )
}

export default RouterApp
