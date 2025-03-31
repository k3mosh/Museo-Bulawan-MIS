import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import AdminLayout from '../../components/layout/AdminLayout'; // Import AdminLayout

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
    const timeLeft = decoded.exp * 1000 - Date.now();
    const timer = setTimeout(() => {
      handleLogout();
      window.location.href = "/login"; 
    }, timeLeft);

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
    if (token) {
      await fetch('/api/auth/logout', {
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
    localStorage.removeItem('token');
  }
};

export default PrivateRoute;
