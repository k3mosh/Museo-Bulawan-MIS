import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import AdminLayout from '../../components/layout/AdminLayout'; 

const PrivateRoute = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  let decoded;
  try {
    decoded = jwtDecode(token);
  } catch (error) {
    console.error("Invalid token, logging out...");
    handleLogout();
    return <Navigate to="/login" replace />;
  }

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    console.warn("Token expired, logging out...");
    handleLogout();
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    const checkTokenExpiration = () => {
      const updatedToken = localStorage.getItem('token');

      if (!updatedToken) {
        console.warn("Token removed, logging out...");
        handleLogout();
        return;
      }

      let updatedDecoded;
      try {
        updatedDecoded = jwtDecode(updatedToken);
      } catch (error) {
        console.error("Invalid token after update, logging out...");
        handleLogout();
        return;
      }

      if (updatedDecoded.exp < Date.now() / 1000) {
        console.warn("Token expired after update, logging out...");
        handleLogout();
      }
    };

    const timeLeft = decoded.exp * 1000 - Date.now();
    const timer = setTimeout(checkTokenExpiration, timeLeft);

    return () => clearTimeout(timer);
  }, [decoded.exp]);

  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};

const handleLogout = async () => {
  try {
    const token = localStorage.getItem('token');
    localStorage.removeItem('token'); // Remove token first

    if (token) {
      await fetch('http://localhost:3000/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    console.error('Logout request failed:', error);
  } finally {
    window.location.href = "/login";
  }
};

export default PrivateRoute;
