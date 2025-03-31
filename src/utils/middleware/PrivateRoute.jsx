import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      // Auto logout user when token expires
      autoLogout();
      return <Navigate to="/login" replace />;
    }

    // Set a timeout to log out user exactly when the token expires
    useEffect(() => {
      const timeLeft = (decoded.exp * 1000) - Date.now();
      const timer = setTimeout(() => {
        autoLogout();
        window.location.href = "/login"; // Force redirect
      }, timeLeft);

      return () => clearTimeout(timer);
    }, [decoded.exp]);

  } catch (error) {
    autoLogout();
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

const autoLogout = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return;

    await fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    localStorage.removeItem('token');
  } catch (error) {
    console.error('Auto logout failed:', error);
  }
};

export default PrivateRoute;
