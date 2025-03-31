import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // jwt-decode is typically a default export
import axios from 'axios';

const AdminNav = () => {
  const navigate = useNavigate();
  const linkClasses = "w-fit sm:w-full flex flex-row justify-start bg-[#1C1B19] items-center gap-3 rounded-2xl p-2 h-[60px] cursor-pointer";
  const activeClasses = "bg-white text-black"; 

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      navigate('/login');
      return;
    }
  
    try {
      // Trigger the logout endpoint on your backend with the token in the header
      await axios.post(
        'http://localhost:5000/api/auth/logout',
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error('Logout error:', error.response ? error.response.data : error.message);
    } finally {
      // Clear stored authentication data
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      // Redirect to the login page
      navigate('/login');
    }
  };

  const token = localStorage.getItem('token');
  let role = 'unknown';
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      role = decodedToken.role || 'unknown';
      localStorage.setItem('role', role);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }
  
  return (
    <div className='bg-[#1C1B19] h-full min-w-full flex flex-col items-center justify-between'>
      <div className='h-auto min-h-[58rem] w-fit sm:w-full font-hind-kochi text-2xl font-bold flex flex-col gap-y-4'>
        <NavLink to="/admin/dashboard" className={({ isActive }) => `relative group ${linkClasses} ${isActive ? activeClasses : "text-white"}`}>
          {({ isActive }) => (
            <>
              <img src="/src/assets/dashboard_icon.png" alt="dashboard" className={`h-auto w-[40px] filter brightness-1 ${isActive ? "invert-1" : "invert"}`} />
              <span className='hidden sm:block'>Dashboard</span>
              <span class="absolute  left-full mr-2 hidden group-hover:flex bg-gray-800 sm:text-transparent sm:bg-transparent text-white text-2xl rounded py-1 px-2 w-max">
                Dashboard
              </span>
            </>
          )}
        </NavLink>

        <NavLink to="/admin/acquisition" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : "text-white"}`}>
          {({ isActive }) => (
            <>
              <img src="/src/assets/donation.png" alt="donation" className={`h-auto w-[40px] filter brightness-1 ${isActive ? "invert-1" : "invert"}`} />
              <span className='hidden sm:block'>Acquisition</span>
            </>
          )}
        </NavLink>

        <NavLink to="/admin/artifact" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : "text-white"}`}>
          {({ isActive }) => (
            <>
              <img src="/src/assets/artifact.png" alt="artifact" className={`h-auto w-[40px] filter brightness-1 ${isActive ? "invert-1" : "invert"}`} />
              <span className='hidden sm:block'>Artifact</span>
            </>
          )}
        </NavLink>

        <NavLink to="/admin/appointment" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : "text-white"}`}>
          {({ isActive }) => (
            <>
              <img src="/src/assets/appointment.png" alt="appointment" className={`h-auto w-[40px] filter brightness-1 ${isActive ? "invert-1" : "invert"}`} />
              <span className='hidden sm:block'>Appointment</span>
            </>
          )}
        </NavLink>

        <NavLink to="/admin/article" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : "text-white"}`}>
          {({ isActive }) => (
            <>
              <img src="/src/assets/article.png" alt="article" className={`h-auto w-[40px] filter brightness-1 ${isActive ? "invert-1" : "invert"}`} />
              <span className='hidden sm:block'>Article</span>
            </>
          )}
        </NavLink>

        {role === "admin" && (
          <>
            <NavLink to="/admin/log" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : "text-white"}`}>
              {({ isActive }) => (
                <>
                  <img src="/src/assets/article.png" alt="logs" className={`h-auto w-[40px] filter brightness-1 ${isActive ? "invert-1" : "invert"}`} />
                  <span className='hidden sm:block'>Logs</span>
                </>
              )}
            </NavLink>

            <NavLink to="/admin/user" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : "text-white"}`}>
              {({ isActive }) => (
                <>
                  <img src="/src/assets/article.png" alt="user" className={`h-auto w-[40px] filter brightness-1 ${isActive ? "invert-1" : "invert"}`} />
                  <span className='hidden sm:block'>User</span>
                </>
              )}
            </NavLink>
          </>
        )}
      </div>

      <button onClick={handleLogout} className="font-hind-kochi text-2xl font-bold w-full flex flex-row justify-center items-center gap-3 text-white cursor-pointer hover:bg-red-900 transition p-3 rounded-2xl">
        <img src="/src/assets/logout.png" alt="logout" className="h-auto w-[40px]" />
        <span className='hidden sm:block'>Logout</span>
      </button>
    </div>
  );
};

export default AdminNav;
