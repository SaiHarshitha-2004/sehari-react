import React from 'react'
import Home from './pages/Home'
import Services from "./pages/Services";
import Testimonals from './pages/Testimonals';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp'; 


const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path="/services" element={ <Services /> } />
        <Route path="/testimonals" element={ <Testimonals /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/signup" element={ <SignUp /> } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
