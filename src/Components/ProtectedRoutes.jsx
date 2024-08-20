import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  console.log("i am here");

  // Retrieve the token from sessionStorage
  const token = sessionStorage.getItem('token'); 

  console.log(token);

  // If token exists, render the children (protected routes), otherwise redirect to login
  if (token) {
    return children;
  } else {
    console.log("yeh he dikkat");
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
