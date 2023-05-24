import React from 'react'
import { Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Register from '../pages/Register'
import Login from '../pages/Login'



const AppRouter = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default AppRouter
