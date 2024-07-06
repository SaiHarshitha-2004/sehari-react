import React from "react";
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import HereMap from './Maps/HereMap.jsx';
import DisplayVenues from "./HomeComponents/DisplayVenues.jsx";
import { Animations } from './Data/Animations.jsx';
import VenueCard from './HomeComponents/VenueCard.jsx';
import NavBar from './pages/NavBar.jsx';
import Error from './pages/Error.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
