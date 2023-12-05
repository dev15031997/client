import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Privateroute from './route/Privateroute'
import Adminroute from './route/Adminroute'
import Userdashboard from './User/Userdashboard'
import Admindashboard from './Admin/Admindashboard'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />

        {/* Private routes */}
        <Route path='/dashboard' element={<Privateroute/>} >
           <Route path='user' element={<Userdashboard/>} />
        </Route>

        <Route path='/dashboard' element={<Adminroute/>} >
          <Route path='admin' element={<Admindashboard/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App