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
        <NavBar />
        <RouterProvider router={router} />
    </>
  );
};

export default App;
