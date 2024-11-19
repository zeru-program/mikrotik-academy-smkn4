import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../frontend/pages/Home"
import DashboardHome from "../frontend/pages/DashboardHome"
import DashboardCms from "../frontend/pages/DashboardCms"

const RouterApp = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<DashboardHome />} />
        <Route path='/dashboard/cms' element={<DashboardCms />} />
      </Routes>
    </Router>
    </>
  )
}

export default RouterApp
