import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const LandingFooter = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return isLogin ? null: (
    <>
    <div className='w-screen min-h-85 bg-[#1C1B19] py-10 overflow-x-hidden'>
      <div className='max-w-[140rem] 3xl:max-w-[185rem] flex flex-col h-auto min-h-60 mx-auto '>
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
        <div className='w-full h-full  flex flex-col sm:flex-row pt-6'>
          <div className='w-full h-full min-h-[18rem]  bg-amber-500 px-10'>  

            <div className='w-full min-h-[6rem] gap-x-4 flex items-center h-full'> 
              <img src="./LOGO.png" alt="Museo Bulawan Logo" className='w-[6rem]'/>
              <span className='text-6xl font-bold text-white'>MUSEO BULAWAN</span>
            </div>

            <div className='w-full min-h-[7rem] p-3 h-full'> 

              <span className='font-300 text-4xl text-white font-serif'>
                Helping us raise awareness regarding Camnortenos identity is crucial, and your support can make a significant difference.
              </span>

            </div>
            <div className='w-full min-h-[5rem] h-full'> 



            </div>


          </div>
          <div className='w-full h-full min-h-[18rem] bg-amber-600'>

          </div>
        </div>
        
      </div>
        
    </div>
    </>
  )
}

export default LandingFooter
