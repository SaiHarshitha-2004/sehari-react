import React from 'react'
import Home from '../Client/src/pages/Home.jsx'
import Services from '../Client/src/pages/Services.jsx';
import Login from '../Client/src/pages/Login.jsx';
import {createBrowserRouter , BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from '../Client/src/pages/SignUp.jsx'; 
import HereMap from '../Client/src/Maps/HereMap.jsx';
import DisplayVenues from "../Client/src/HomeComponents/DisplayVenues.jsx";
import {Animations} from '../Client/src/Data/Animations.jsx';
import VenueCard from '../Client/src/HomeComponents/VenueCard.jsx';
import NavBar from '../Client/src/pages/NavBar.jsx';
import Error from '../Client/src/pages/Error.jsx';

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
