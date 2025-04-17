import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AdminNav from '../../components/navbar/AdminNav'
import CustomDatePicker from '../../components/function/CustomDatePicker'
import { connectWebSocket, closeWebSocket } from '../../utils/websocket'

const Appointment = () => {
  // Track selected date in date picker
  const [selectedDate, setSelectedDate] = useState(new Date())

  // State to hold the fetched list of appointments
  const [appointments, setAppointments] = useState([])


  const fetchAppointments = async () => {
    try {
      // Adjust URL as needed: e.g. '/api/auth/appointment'
      const response = await axios.get('http://localhost:5000/api/auth/appointment')
      setAppointments(response.data)
    } catch (error) {
      console.error('Error fetching appointments:', error)
    }
  }
  // Fetch all appointments from the backend when component mounts
  useEffect(() => {
    fetchAppointments()
    connectWebSocket(fetchAppointments)

    return () => {
      closeWebSocket()
    }
  }, [])

  return (
    <>
      <div className='w-screen min-h-[79.8rem] h-screen bg-[#F0F0F0] select-none flex pt-[7rem]'>
        <div className='bg-[#1C1B19] w-auto min-h-full h-full min-w-[6rem] sm:min-w-auto'>
          <AdminNav />
        </div>
        <div className='w-full min-h-full h-full flex flex-col gap-y-10 px-7 pb-7 pt-[4rem] overflow-scroll'>
          <span className='text-5xl font-semibold'>Appointments</span>
          <div className='w-full h-full flex flex-col xl:flex-row gap-y-5 xl:gap-y-0 xl:gap-x-5 '>
            <div className='min-w-[34rem] h-full flex flex-col gap-y-7'>
              {/* Info bar */}
              <div className='w-full max-w-[35rem] text-gray-500 min-h-[5rem] flex py-2 gap-x-2'>
                <button className='px-4 h-full border-1 border-gray-500 rounded-lg cursor-pointer'>
                  <span className='text-2xl font-semibold'>Forms</span>
                </button>
                <button className='px-4 h-full border-1 border-gray-500 rounded-lg cursor-pointer'>
                  <span className='text-2xl font-semibold'>Attendance</span>
                </button>
                <button className='px-4 h-full border-1 border-gray-500 rounded-lg cursor-pointer'>
                  <span className='text-2xl font-semibold'>Visitor Records</span>
                </button>
              </div>

              <div className='w-full h-full flex flex-col gap-y-[5rem]'>
                <div className='bg-[#161616] px-4 h-[5rem] flex justify-between items-center rounded-sm'>
                  <span className='text-2xl text-white font-semibold'>Total Appointments</span>
                  <div className='w-[6rem] h-[3rem] bg-[#D4DBFF] flex items-center justify-center rounded-md'>
                    {/* Dynamically show the appointment count */}
                    <span className='text-2xl text-black font-semibold'>
                      {appointments.length}
                    </span>
                  </div>
                </div>

                <div className='w-full h-auto flex flex-col gap-y-7'>
                  <span className='text-2xl font-semibold text-[#727272]'>January 8, 2025</span>
                  <div className='w-full h-fit flex justify-between items-center'>
                    <span className='text-2xl font-semibold '>Approved</span>
                    <div className='w-[5rem] h-[2rem] flex items-center bg-[#D4DBFF] rounded-md justify-center'>
                      <span className='text-2xl font-semibold'>580</span>
                    </div>
                  </div>
                  <div className='w-full h-fit flex justify-between items-center'>
                    <span className='text-2xl font-semibold '>Reflected</span>
                    <div className='w-[5rem] h-[2rem] flex items-center bg-[#D4DBFF] rounded-md justify-center'>
                      <span className='text-2xl font-semibold'>13</span>
                    </div>
                  </div>
                  <div className='w-full h-fit flex justify-between items-center'>
                    <span className='text-2xl font-semibold '>Expected Visitors</span>
                    <div className='w-[5rem] h-[2rem] flex items-center bg-[#D4DBFF] rounded-md justify-center'>
                      <span className='text-2xl font-semibold'>1603</span>
                    </div>
                  </div>
                  <div className='w-full h-fit flex justify-between items-center'>
                    <span className='text-2xl font-semibold '>Present</span>
                    <div className='w-[5rem] h-[2rem] flex items-center bg-[#D4DBFF] rounded-md justify-center'>
                      <span className='text-2xl font-semibold'>1523</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION WITH TABLE */}
            <div className='w-full h-full flex flex-col gap-y-7 overflow-x-scroll overflow-y-scroll'>
              {/* Controls above the table */}
              <div className='min-w-[94rem] min-h-[5rem] py-2 flex items-center gap-x-2'>
                <div className='flex-shrink-0'>
                  <CustomDatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    popperPlacement="bottom-start"
                    popperClassName="z-50"
                    customInput={
                      <button className='px-3 h-16 rounded-lg border-1 border-gray-500 cursor-pointer'>
                        <i className="text-gray-500 fa-regular fa-calendar text-4xl"></i>
                      </button>
                    }
                  />
                </div>
                <div className="relative h-full min-w-[20rem]">
                  <i className="text-2xl fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"></i>
                  <input
                    type="text"
                    placeholder="Search History"
                    className="h-full pl-10 pr-3 py-2 border-1 border-gray-500 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="relative h-full min-w-48">
                  <input
                    type="text"
                    placeholder="Filter..."
                    className="pl-4 h-full text-2xl pr-8 py-2 border-1 border-gray-500 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <i className="cursor-pointer text-2xl fas fa-plus absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                </div>
                <div className="relative h-full min-w-48">
                  <select className="appearance-none border-1 border-gray-500 h-full text-2xl rounded-lg text-gray-500 w-full py-2 pl-4 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Actions</option>
                    <option>Action 1</option>
                    <option>Action 2</option>
                  </select>
                  <i className="text-2xl fas fa-caret-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"></i>
                </div>
              </div>

              {/* Table Header */}
              <div className='min-w-[94rem] w-full font-semibold h-fit grid grid-cols-6 justify-between'>
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2 cols-span-1'>
                  <span>Date</span>
                </div>
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2 cols-span-1'>
                  <span>Visitor Name</span>
                </div>
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2 cols-span-1'>
                  <span>Preferred Time</span>
                </div>
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2 cols-span-1'>
                  <span>Status</span>
                </div>
                <div className='text-[#727272] text-2xl border-l-1 px-3 py-2 cols-span-1'>
                  <span>Visitor Count</span>
                </div>
                <div className='text-[#727272] justify-between flex text-2xl border-l-1 pl-3 cols-span-1'>
                  <span className='my-2'>Updated</span>
                </div>
              </div>

              {/* Table Data (Dynamic) */}
              <div className='w-full min-w-[94rem] h-auto flec flex-col border-t-1 border-t-gray-400'>
                {appointments.map((appt) => (
                  <div
                    key={appt.appointment_id}
                    className='min-w-[94rem] text-xl h-fit font-semibold grid grid-cols-6 justify-between cursor-pointer hover:bg-gray-300'
                  >
                    {/* Date */}
                    <div className='px-4 pt-1 pb-3 border-b-1 border-gray-400'>
                      <span>{appt.preferred_date}</span>
                    </div>
                    {/* Visitor Name (check if appt.Visitor exists) */}
                    <div className='px-4 pt-1 pb-3 border-b-1 border-gray-400'>
                      <span>
                        {appt.Visitor?.first_name} {appt.Visitor?.last_name}
                      </span>
                    </div>
                    {/* Preferred Time */}
                    <div className='px-4 pt-1 pb-3 border-b-1 border-gray-400'>
                      <span>{appt.preferred_time}</span>
                    </div>
                    {/* Status (sample: always Confirmed) */}
                    <div className='px-4 py-4 border-b-1 border-gray-400'>
                      <span className='text-white bg-[#4CAF50] rounded-md px-4 py-1'>
                        Confirmed
                      </span>
                    </div>
                    {/* Visitor Count */}
                    <div className='px-4 py-4 border-b-1 border-gray-400'>
                      <span className='text-2xl'>{appt.population_count}</span>
                    </div>
                    {/* Updated (Use creation_date or any updated field) */}
                    <div className='px-4 pt-1 pb-3 flex justify-between border-b-1 border-gray-400'>
                      <span>{appt.creation_date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Appointment
