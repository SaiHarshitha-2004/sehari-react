// AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showLogOutPopup, setShowLogOutPopup] = useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);


  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const togglePopup = () => {
    setShowPopup(true);
  };

  const toggleDownPopup = () => {
    setShowPopup(false)
  }

  const toggleLogOutPopup = () => {
    setShowLogOutPopup(true);
  };
  const toggleDownLogOutPopup = () => {
    setShowLogOutPopup(false)
  }
  const toggleSignUpPopup = () => {
    setShowSignUpPopup(true);
  };
  const toggleDownSignUpPopup = () => {
    setShowSignUpPopup(false)
  }

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, login, logout, 
      togglePopup , showPopup , toggleDownPopup , 
      showLogOutPopup , toggleLogOutPopup , toggleDownLogOutPopup ,
      showSignUpPopup , toggleSignUpPopup , toggleDownSignUpPopup }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
