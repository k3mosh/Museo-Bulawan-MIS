import React from 'react'
import { useState } from 'react';
import AdminNav from '../../components/navbar/AdminNav'

const Dashboard = () => {

  const [search, setSearch] = useState("");

  return (
    <>
      <div className='w-screen min-h-[79.8rem] h-screen bg-[#F0F0F0] flex pt-[7rem]'>
        <div className='bg-[#1C1B19] w-auto min-h-full h-auto min-w-[6rem] sm:min-w-auto'>
          <AdminNav />
          </div>

          <div className='w-full h-full p-7'>
            <div className='w-full flex flex-col xl:flex-row h-1/2'>
            <div className="xl:w-1/2 w-full flex gap-x-2 p-2 sm:h-full h-1/2">
              <div className='h-full min-w-[18rem] md:min-w-[25rem] lg:min-w-[35rem] rounded-lg'> 

              </div>

              <div className='w-full flex-col px-2 gap-y-4 flex h-full'>
                {/* visiors, present, absent */}
                <div className='w-full h-full rounded-lg'>

                </div>

                <div className='w-full h-full rounded-lg'>

                </div>
              </div>
            </div>
            <div className="xl:w-1/2 w-full p-2 sm:h-full h-1/2">
              {/* appointment rate */}
              <div className='w-full h-full rounded-lg'>

              </div>
            </div>
          </div>
            <div className='w-full flex flex-col xl:flex-row h-1/2'>
             <div className="xl:w-1/2 w-ful gap-x-2 flex p-2 sm:h-full h-1/2">
             {/* present, approved visits, qouta */}
              <div className='w-full flex  h-full'>
                <div className='min-w-[12rem] lg:min-w-[23rem] flex flex-col p-2 gap-y-2 h-full'>
                  <div className='h-1/2 w-full rounded-lg'> 

                  </div>
                  <div className='h-1/2 w-full rounded-lg'> 


                  </div>
                </div>
                <div className='w-full flex flex-col p-2 gap-y-2 h-full'>
                <div className='h-1/2 pt-4 pr-4 w-full'> 
                  <div className='w-full h-full rounded-lg'>
                    
                  </div>
                </div>
                <div className='h-1/2 pt-4 pr-4 w-full'> 
                  <div className='w-full h-full rounded-lg'>
                      
                  </div>

                </div>

                </div>
              </div>

              <div className='min-w-[12rem]  md:min-w-[20rem] lg:min-w-[23rem] px-2 h-full'>
                <div className='w-full h-full rounded-lg bg-black shadow-lg shadow-gray-600 flex flex-col gap-y-6 p-6'>
                  <div className='w-full flex justify-between h-auto'>
                    <span className='text-white text-xl sm:text-2xl font-semibold'>Qouta</span>
                    <span className='text-[#EAC39C] text-xl sm:text-2xl font-semibold'>68%</span>
                  </div>
                  Allen Jepte Mateo
<div className="relative w-full h-full bg-white rounded-lg flex flex-col justify-start items-start overflow-hidden">
                            {/* “1000” label at the top */}
                            <div className="w-full h-[32%] p-2 z-10">
                              <span>1000</span>
                            </div>

                            {/* Animated wave container */}
                            <div className="relative w-full h-[68%] text-white flex items-center justify-center z-10 font-bold text-3xl">
                              {/* The number floats above the wave */}
                              <span className="absolute">680</span>

                              {/* SVG “wave” takes the entire bottom area */}
                              <svg
                                className="absolute top-0 left-0 w-full h-full"
                                viewBox="0 0 500 150"
                                preserveAspectRatio="none"
                              >
                                <path
                                  fill="#0066FF"
                                  d="M0,30 C150,0 350,60 500,30 L500,150 L0,150 Z"
                                >
                                  {/* Animate the wave path back and forth */}
                                  <animate
                                    attributeName="d"
                                    dur="4s"
                                    repeatCount="indefinite"
                                    values="
                  M0,30 C150,0 350,60 500,30 L500,150 L0,150 Z;
                  M0,20 C150,40 350,-20 500,20 L500,150 L0,150 Z;
                  M0,30 C150,0 350,60 500,30 L500,150 L0,150 Z
                "
                                  />
                                </path> 
                              </svg>
                            </div>
                          </div>
                </div>
              </div>
             </div>
             <div className="xl:w-1/2 w-full gap-x-6 flex p-5 sm:h-full h-1/2">
              <div className='w-1/2 h-full'>
                <div className='w-full shadow-lg shadow-gray-600 p-4 flex-col flex h-full '>
                  <div className='w-full px-2 flex justify-between items-center py-2 h-auto border-b-2'>
                    <span className='text-lg sm:text-3xl font-semibold'>Pending Queries</span>
                    <i class="fa-solid fa-arrow-down text-sm sm:text-4xl cursor-pointer"></i>
                  </div>
                </div>
              </div>

              <div className='w-1/2 flex flex-col justify-around h-full p-2'>
              <span className='text-2xl sm:text-6xl font-semibold'>Walk-Ins</span>
              <div className='w-full h-fit gap-y-4 flex flex-col'>
              <button className='shadow-lg shadow-gray-600  w-full flex items-center justify-between px-5 sm:px-10  border-3 rounded-lg h-[4rem] sm:h-[8rem]'>
                <span className='sm:text-4xl text-2xl font-semibold'>Appointment</span>
                <i class="fa-regular fa-square-plus text-2xl sm:text-5xl"></i>
              </button>
              <button className='shadow-lg shadow-gray-600  w-full flex items-center justify-between px-5 sm:px-10 border-3 rounded-lg h-[4rem] sm:h-[8rem]'>
                <span className='sm:text-4xl text-2xl font-semibold'>Donation</span>
                <i class="fa-regular fa-square-plus text-2xl sm:text-5xl"></i>
              </button>   
              </div>

              </div>

             </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Dashboard
