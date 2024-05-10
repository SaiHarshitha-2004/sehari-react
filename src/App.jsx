import React from 'react'
import Home from './pages/Home'
import Services from "./pages/Services";
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp'; 
import HereMap from './Maps/HereMap';
import DisplayVenues from "./HomeComponents/DisplayVenues";
import {Animations} from './Data/Animations';
import VenueCard from './HomeComponents/VenueCard';
import NavBar from './pages/NavBar';
import Error from './pages/Error';

const App = () => {
  return (
    <>
    <NavBar />
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={ <Home />} />
      <Route path="/services" element={ <Services /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <SignUp /> } />

        <Route path="/map" element={ <HereMap /> } />
        <Route path="/displayallvenues" element={ <DisplayVenues /> } />
        <Route path="/loader" element={ <Animations /> } />
        <Route path="/venuecard" element={ <VenueCard /> } />
        <Route path="/*" element={ <Error /> } />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
