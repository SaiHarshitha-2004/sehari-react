import React from 'react'
import Home from './pages/Home'
import Services from "./pages/Services";
import Testimonals from './pages/Testimonals';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp'; 
import HereMap from './Maps/HereMap';


const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/services" element={ <Services /> } />
        <Route path="/testimonals" element={ <Testimonals /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <SignUp /> } />

        <Route path="/maps" element={ <HereMap /> } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
