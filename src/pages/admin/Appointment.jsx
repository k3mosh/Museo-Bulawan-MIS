import React from 'react'
import AdminNav from '../../components/navbar/AdminNav'

const Appointment = () => {
  return (
    <>
      <div className='w-screen min-h-[79.8rem] h-screen bg-[#F0F0F0] select-none flex pt-[7rem]'>
        <div className='bg-[#1C1B19] w-auto min-h-full h-full min-w-[6rem] sm:min-w-auto'>
          <AdminNav />
        </div>
      </div>
    </>
  )
}

export default Appointment
