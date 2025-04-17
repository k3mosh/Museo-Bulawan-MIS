import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import AdminLayout from '../../components/layout/AdminLayout'; 
import axios from 'axios';

const PrivateRoute = () => {
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      let token = localStorage.getItem('token');
      let decoded;

      if (!token) {
        // Try to get token from cookie
        try {
          const res = await axios.get('http://localhost:5000/api/auth/refresh-token', {
            withCredentials: true
          });

          token = res.data.token;
          localStorage.setItem('token', token);
        } catch (err) {
          return handleLogout();
        }
      }

      try {
        decoded = jwtDecode(token);
      } catch (err) {
        console.error("Invalid token, logging out...");
        return handleLogout();
      }

      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        console.warn("Token expired, logging out...");
        return handleLogout();
      }

      // Setup auto-expiry check
      const timeLeft = decoded.exp * 1000 - Date.now();
      setTimeout(() => {
        console.warn("Token expired (timeout), logging out...");
        handleLogout();
      }, timeLeft);

      setValid(true);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) return null;
  if (!valid) return <Navigate to="/login" replace />;

  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};

const handleLogout = async () => {
  try {
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');

    if (token) {
      await fetch('http://localhost:3000/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });
    }
  } catch (error) {
    console.error('Logout request failed:', error);
  } finally {
    window.location.href = "/login";
  }
};

export default PrivateRoute;
