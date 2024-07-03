// import React from 'react'
// import Home from '../Client/src/pages/Home.jsx'
// import Services from '../Client/src/pages/Services.jsx';
// import Login from '../Client/src/pages/Login.jsx';
// import {createBrowserRouter , BrowserRouter, Routes, Route } from "react-router-dom";
// import SignUp from '../Client/src/pages/SignUp.jsx'; 
// import HereMap from '../Client/src/Maps/HereMap.jsx';
// import DisplayVenues from "../Client/src/HomeComponents/DisplayVenues.jsx";
// import {Animations} from '../Client/src/Data/Animations.jsx';
// import VenueCard from '../Client/src/HomeComponents/VenueCard.jsx';
// import NavBar from '../Client/src/pages/NavBar.jsx';
// import Error from '../Client/src/pages/Error.jsx';

// const App = () => {
  
//   return (
//     <>
//     <NavBar />
//     <BrowserRouter> 
//       <Routes>
//         <Route path="/" element={ <Home />} />
//         <Route path="/services" element={ <Services /> } />
//         <Route path="/login" element={ <Login /> } />
//         <Route path="/signup" element={ <SignUp /> } />

//         <Route path="/map" element={ <HereMap /> } />
//         <Route path="/displayallvenues" element={ <DisplayVenues /> } />
//         <Route path="/loader" element={ <Animations /> } />
//         <Route path="/venuecard" element={ <VenueCard /> } />
//         <Route path="/*" element={ <Error /> } />

//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App


import React, { createContext} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../Client/src/pages/Home.jsx';
import Services from '../Client/src/pages/Services.jsx';
import Login from '../Client/src/pages/Login.jsx';
import SignUp from '../Client/src/pages/SignUp.jsx';
import HereMap from '../Client/src/Maps/HereMap.jsx';
import DisplayVenues from "../Client/src/HomeComponents/DisplayVenues.jsx";
import { Animations } from '../Client/src/Data/Animations.jsx';
import VenueCard from '../Client/src/HomeComponents/VenueCard.jsx';
import NavBar from '../Client/src/pages/NavBar.jsx';
import Error from '../Client/src/pages/Error.jsx';
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/map",
    element: <HereMap />,
  },
  {
    path: "/displayallvenues",
    element: <DisplayVenues />,
  },
  {
    path: "/loader",
    element: <Animations />,
  },
  {
    path: "/venuecard",
    element: <VenueCard />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const App = () => {
  return (
    <>
<<<<<<< HEAD
        <NavBar />
        <RouterProvider router={router} />
=======
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
>>>>>>> c609266b7e6193e26e0374c0a9a7323248ca0e72
    </>
  );
};

export default App;
