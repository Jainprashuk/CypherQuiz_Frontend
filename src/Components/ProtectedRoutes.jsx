import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    console.log("i am here");
    
  const token = document.cookie.includes('token'); 

  console.log(token);

  if (token) {
    return children;
  }else{
    console.log("yeh he dikkat");
    
    return <Navigate to="/login" />
  }
  

  // return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
