import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const isAuth = true;
export const PrivateRoute = () => {
  return isAuth ? <Outlet/> : <Navigate to={'/login'} />;
};
