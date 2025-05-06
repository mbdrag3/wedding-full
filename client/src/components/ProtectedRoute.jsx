// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function decodeJWT(token) {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

const ProtectedRoute = ({ children }) => {
  const { pathname } = useLocation();
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/password" replace />;
  }

  const decoded = decodeJWT(token);
  if (!decoded) {
    localStorage.removeItem('token');
    return <Navigate to="/password" replace />;
  }

  const now = Date.now() / 1000;
  if (decoded.exp < now) {
    localStorage.removeItem('token');
    return <Navigate to="/password" replace />;
  }

  return children;
};

export default ProtectedRoute;
