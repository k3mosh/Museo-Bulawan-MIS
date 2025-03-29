import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const LandingFooter = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return isLogin ? null: (
    <>
    <div className='w-screen h-85 bg-[#1C1B19] p-10'>
        <div className='w-full h-full flex flex-col'>
            <div className='h-auto w-full flex flex-col gap-3'>
              <div className='h-full w-full flex items-start justify-start gap-2 pl-4'>
                <div className='w-auto h-9 flex gap-2 items-center'>
                  <NavLink to="/">
                  <span  className='text-white text-xl'>Home</span>
                  </NavLink>
                  <div className='h-full w-0.5 bg-white'></div>
                </div>
                <div className='w-auto h-9 flex gap-2 items-center'>
                  <NavLink to="/content">
                  <span className='text-white text-xl'>News & Events</span>
                  </NavLink>
                  <div className='h-full w-0.5 bg-white'></div>
                </div>
                <div className='w-auto h-9 flex gap-2 items-center'>
                  <NavLink to="/about">
                  <span  className='text-white text-xl'>About us</span>
                  </NavLink>
                </div>
              </div>
              <div className='w-full h-0.5 bg-white'></div>
            </div>
           
            <div className='h-full w-full flex justify-center items-start px-15 pt-6'>
                <div className='w-2/4 h-full flex flex-col justify-start items-start gap-2'>
                  <div className='h-auto w-full flex gap-2 items-center'>
                    <img src="./LOGO.png" alt="" className='h-12 w-auto'/>
                    <span className='text-3xl flex items-center font-bold text-white'>MUSEO BULAWAN</span>
                  </div>

                  <div className='w-full h-auto px-4'>
                  <span className='text-2xl font-[HinaMincho] text-white tracking-widest'>
                Helping us raise awareness regarding Camnortenos identity is crucial, and your support can make a significant difference.
              </span>

                  </div>

                  <div className='h-auto w-full flex px-4'>
                      <div className='w-2/3'>
                        <span className='text-xl text-[#C8C8C8] font-[HinaMincho] tracking-widest'> We gratefully accept donations or just lending of your artifact will greatly help us.</span>
                      </div>
                      <div className='w-1/3 flex items-end pl-4'>

                      <NavLink to="/form">
                        <button className="w-40 h-12 bg-white flex justify-center items-center cursor-pointer hover:bg-gray-100 transition">
                          <span className="text-xl font-semibold">Support Us</span>
                        </button>
                      </NavLink>


                      </div>
                  </div>
                </div>
                <div className='w-1/4 h-full flex flex-col items-start justify-center text-lg pl-22 gap-2 text-white'>
                  <span className='font-bold'>Visit Us</span>

                  <NavLink to="/about">
                  <span>About Us</span>
                  </NavLink>
                  <NavLink to="/appointment"> 
                  <span>Book a Tour</span>
                  </NavLink>
                  <NavLink to="/support"> 
                  <span>Contact Us</span>
                  </NavLink>
                </div>
                <div className='w-1/4 h-full flex flex-col items-start justify-center text-lg  gap-2 text-white'>
                  <span className='font-bold'>Opening Hours</span>
                
                  <span>Camarines Norte Provincial Capitol Grounds, 
                  Daet Philippines</span>
                
                  <span>Open Daily 9:00am-5:00pm,
                  Monday - Friday</span>
              
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LandingFooter
