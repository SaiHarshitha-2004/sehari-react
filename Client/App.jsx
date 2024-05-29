import React from 'react'
import Home from '../Client/src/pages/Home'
import Services from '../Client/src/pages/Services';
import Login from '../Client/src/pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from '../Client/src/pages/SignUp'; 
import HereMap from '../Client/src/Maps/HereMap';
import DisplayVenues from "../Client/src/HomeComponents/DisplayVenues";
import {Animations} from '../Client/src/Data/Animations';
import VenueCard from '../Client/src/HomeComponents/VenueCard';
import NavBar from '../Client/src/pages/NavBar.jsx';
import Error from '../Client/src/pages/Error';
import axios from "axios" ;

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


