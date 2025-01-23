// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  if (!isAuthenticated) {
    // Not authenticated? Go to password page
    return <Navigate to="/password" replace />;
  }

  // Otherwise, render the original children (the protected page)
  return children;
};

export default ProtectedRoute;
