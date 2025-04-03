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
      
          <div className='w-full h-full p-10 md:p-10'>
              <div className='min-h-[65em] w-full flex flex-col max-w-[90vw] transition-all duration-300 md:min-h-[65em] md:gap-3'>
                  <div className='h-auto flex justify-between w-auto px-4 py-2 '>
                    <div className='text-5xl font-bold md:text-6xl'>
                      Dashboard
                    </div>
                    <div className="relative self-center ">
                      <input
                        type="text"
                        placeholder="Enter Keyword"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-4 pr-10 py-2 w-52 text-black border border-black rounded-lg shadow-sm outline-none sm:w-68 md:w-84"
                      />
                      <i className="fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"></i>
                    </div>
                  </div>

                  <div className='px-4 w-full max-h-[33em] flex mt-5 md:min-h-[30em] bg-blue-200 '>
                    <div className='flex flex-col h-full sm:flex sm:flex-col md:flex md:flex-row w-full gap-4 md:gap-10'>

                      <div className='flex gap-3 h-[14em] w-full sm:max-w-full md:max-w-1/2 md:h-full'>

                        <div className='w-full h-full' >
                          <div className='bg-white h-full p-3 flex flex-col items-start justify-start shadow-lg shadow-gray-400 md:h-[30em] md:p-5 md:gap-4'>
                            <span className='text-3xl md:text-5xl md:font-semibold'>Expected Visitor</span>
                            <span className='text-xl ml-4 md:text-4xl'>1603</span>
                            <div className='w-full h-full flex flex-col justify-center items-center '>
                               <span className='text-5xl md:text-6xl'>80%</span>
                               <span className='text-2xl md:text-4xl'>Present Visitors</span>
                            </div>
                          </div>                       
                        </div>

                        <div className='w-full'>
                          <div className='flex flex-col w-full h-full gap-2 '>
                            <div className='w-full h-1/2 bg-black p-2 flex flex-col shadow-lg'>
                              <div className="w-full h-full flex flex-col justify-start items-center">
                                <div className="w-full h-auto flex justify-start items-center gap-x-3 md:h-full ">
                                  <div className="h-full w-[55%] flex flex-col justify-center items-center text-white font-bold text-center md:pl-10">
                                    <span className="w-full h-1/3 text-2xl flex items-center justify-center md:text-6xl">Present</span>
                                    <span className="w-full h-2/3 text-4xl flex items-center justify-center md:text-6xl">1520</span>
                                  </div>
                                  <div className="h-full w-[60%] flex items-end justify-start pb-2 text-[#D5FFCB]">
                                    <span className="w-full font-bold flex items-center gap-1 text-lg md:text-4xl md:pl-10">
                                      +2.3%
                                      <i className="fas fa-arrow-up text-base"></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="w-full h-1/5 text-[#EAC39C] font-bold flex items-center justify-center">
                                  <span className="w-full flex items-center justify-start pl-1 text-md md:text-4xl  md:pl-8">Compared to last month (1486)</span>
                                </div>
                              </div>
                            </div>
                            <div className='w-full h-1/2 bg-black p-2 flex flex-col shadow-lg'>
                              <div className="w-full h-full flex flex-col justify-start items-center">
                                <div className="w-full h-auto flex justify-start items-center gap-x-3 md:h-full">
                                  <div className="h-full w-[55%] flex flex-col justify-center items-center text-white font-bold text-center md:pl-10 ">
                                    <span className="w-full h-1/3 text-2xl flex items-center justify-center md:text-6xl">Absent</span>
                                    <span className="w-full h-2/3 text-4xl flex items-center justify-center md:text-6xl">83</span>
                                  </div>
                                  <div className="h-full w-[60%] flex items-end justify-start pb-2 text-[#FF3A3A]">
                                    <span className="w-full font-bold flex items-center gap-1 text-lg md:text-4xl md:pl-10">
                                      +3.614%
                                      <i className="fas fa-arrow-up text-base"></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="w-full h-1/5 text-[#EAC39C] font-bold flex items-center justify-center">
                                  <span className="w-full flex items-center justify-start pl-1 text-md md:text-4xl md:pl-8">Compared to last month (80)</span>
                                </div>
                              </div>
                            </div>
                          </div>                      
                        </div>

                      </div>

                      <div className='flex flex-col h-[14em] w-full sm:max-w-full p-3 gap-2 bg-black md:h-[30em] md:gap-5 md:p-4'>
                       <span className='text-3xl font-bold text-white md:text-5xl'>Appointment Rate</span>
                       <div className='h-full w-full bg-white rounded-lg'>
                        
                       </div>
                      </div>
                      </div>
                  </div>

                  <div className='flex flex-col max-h-[33em] sm:flex sm:flex-col md:flex md:flex-row w-full gap-4 px-4 mt-4  md:min-h-[30em] bg-yellow-200'>
                    <div className='w-full h-[19em] flex  gap-2 sm:gap-3 md:h-[28em] md:w-full'>
                      <div className='w-[20em] flex gap-3 sm:w-[26em] md:w-2/3' >
                          <div className='w-[9em] flex flex-col gap-3 text-white sm:min-w-[11em] md:w-[20em]'>
                            <div className='flex flex-col w-full h-1/2 bg-black rounded-xl p-2 justify-start items-start gap-4 '>
                              <span className='text-xl w-full sm:text-2xl'> Present </span>
                              <span className='text-4xl self-center sm:text-5xl'>593</span>
                            </div>
                            <div className='flex flex-col w-full h-1/2 bg-black rounded-xl p-2 justify-start items-start gap-4'>
                              <span className='text-xl w-full '> Approved Visits </span>
                              <span className='text-4xl self-center sm:text-5xl'>593</span>
                            </div>
                          </div>
                          <div className='w-[12em] flex flex-col gap-3 sm:min-w-[14em] '>
                            <div className='h-1/2 pt-6'>
                              <div className="h-full w-full bg-[#EFEEDE] shadow-xl shadow-gray-400 rounded-lg flex flex-row justify-center items-center">
                                <div className="w-2/3 h-full flex flex-col justify-start items-center font-bold">
                                  <div className="w-full flex justify-center items-center p-2">
                                    <span className="text-2xl ">Today</span>
                                  </div>
                                  <div className="w-full h-full flex justify-center items-center ">
                                    <span className="text-4xl  ">423</span>
                                  </div>
                                </div>
                                    <div className="w-2/3 h-full">
                                      <div className="h-full w-full pt-3 pb-2 px-2">
                                        <div className="bg-black w-full h-full rounded-lg flex flex-col justify-center items-center text-[#EAC39C] px-1 font-semibold">
                                          <div className="w-full flex">
                                            <span className="text-md">This Month</span>
                                          </div>
                                          <div className="w-full flex items-center justify-center">
                                            <span className="text-4xl">54</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                            <div className='h-1/2 pt-6 '>
                            <div className="h-full w-full bg-[#EFEEDE] shadow-xl shadow-gray-400 rounded-lg flex flex-row justify-center items-center">
                                <div className="w-2/3 h-full flex flex-col justify-start items-center font-bold">
                                  <div className="w-full flex justify-center items-center p-2">
                                    <span className="text-2xl ">Today</span>
                                  </div>
                                  <div className="w-full h-full flex justify-center items-center ">
                                    <span className="text-4xl  ">423</span>
                                  </div>
                                </div>
                                    <div className="w-2/3 h-full">
                                      <div className="h-full w-full pt-3 pb-2 px-2">
                                        <div className="bg-black w-full h-full rounded-lg flex flex-col justify-center items-center text-[#EAC39C] px-1 font-semibold">
                                          <div className="w-full flex">
                                            <span className="text-md">This Month</span>
                                          </div>
                                          <div className="w-full flex items-center justify-center">
                                            <span className="text-4xl">54</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                          </div>
                      </div>
                      <div className='w-[12em] rounded-xl bg-black'>
                        <div className="w-full h-[15%] flex items-center justify-between px-7 font-bold text-lg">
                          <span className="text-white">Quota</span>
                          <span className="text-[#EAC39C]">68%</span>
                        </div>
                        <div className="w-full h-[93%] px-5 pt-2 pb-9">
                          
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

                    <div className='w-full h-[19em] flex  gap-2 sm:gap-3'>
                      <div className='w-[16em] bg-white shadow-xl flex flex-col px-3 shadow-gray-400 sm:w-[20em]'>
                        <div className='w-full flex justify-between px-4 py-2'>
                          <span className='text-xl font-semibold'>Pending Queries</span>
                          <i className="fas fa-arrow-down text-2xl"></i>
                        </div>
                        <div className='w-full h-0.5 bg-black'></div>
                      </div>
                      <div className='w-[16em] flex flex-col p-4 gap-4 sm:w-[18em]'>
                          <div className='w-full h-1/3 flex justify-start items-center'> 
                            <span className='text-5xl font-semibold'>Walk Ins</span>
                          </div>
                          <div className='w-full h-1/3 bg-white outline-1 outline-black flex items-center justify-between px-4 shadow-lg shadow-gray-400 gap-2 rounded-lg'>
                            <span className='text-2xl font-semibold'>Appointment</span>
                            <div className="w-8 h-8 bg-white  outline-black rounded-md outline-2 flex items-center justify-center">
                              <i className="fas fa-plus text-black text-2xl"></i>
                            </div>
                          </div>
                          <div className='w-full h-1/3 bg-white outline-1 outline-black flex items-center justify-between px-4 shadow-lg shadow-gray-400 gap-2 rounded-lg'>
                            <span className='text-2xl font-semibold'>Donation</span>
                            <div className="w-8 h-8 bg-white  outline-black rounded-md outline-2 flex items-center justify-center">
                              <i className="fas fa-plus text-black text-2xl"></i>
                            </div>
                          </div>
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
