import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserLogin from '../pages/auth/UserLogin'
import UserRegister from '../pages/auth/UserRegister'
import PartnerLogin from '../pages/auth/PartnerLogin'
import PartnerRegister from '../pages/auth/PartnerRegister'
import Home from '../pages/general/Home'
import Createfood from '../pages/food-partner/CreateFood'


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/food-partner/register" element={<PartnerRegister />} />
        <Route path="/food-partner/login" element={<PartnerLogin />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/create-food" element={<Createfood/>}/>
      </Routes>
    </Router>
  )
}

export default AppRoutes
