import React from 'react'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx';
import Issuecertificate from './pages/Issuecertificate.jsx'; 
import ViewCertificate from './pages/View.jsx';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/signup" />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/home'  element={<Home />}/>
      <Route path='/issue' element={<Issuecertificate />}/>
      <Route path='/view/:certificateId' element={<ViewCertificate />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
