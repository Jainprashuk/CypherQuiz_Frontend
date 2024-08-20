import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    console.log("i am here");
    
  const token = document.cookie.includes('token'); 

  console.log(token);
  

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
