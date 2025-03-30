import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const LandingFooter = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return isLogin ? null: (
    <>
    <div className='w-screen min-h-85 bg-[#1C1B19] py-10 overflow-x-hidden'>
      <div className='max-w-[150rem] 3xl:max-w-[185rem] flex flex-col h-auto min-h-60 mx-auto '>
        <div className='w-full h-12 flex items-center gap-x-4 px-10 border-b-2 border-white'>
          <NavLink to="/">
            <span  className='text-white text-xl'>Home</span>
          </NavLink>
          <div className='h-8 w-0.5 bg-white'></div>
          <NavLink to="/content">
            <span className='text-white text-xl'>News & Events</span>
          </NavLink>
          <div className='h-8 w-0.5 bg-white'></div>
          <NavLink to="/about">
            <span  className='text-white text-xl'>About us</span>
          </NavLink>
        </div>
        <div className='w-full h-auto'>

        </div>
        
      </div>
        
    </div>
    </>
  )
}

export default LandingFooter
