import React, { createContext} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
