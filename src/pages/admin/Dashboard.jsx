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
            <div className="xl:w-1/2 w-full xl:h-full h-1/2">
            
            </div>
            <div className="xl:w-1/2 w-full xl:h-full h-1/2">
            
            </div>
          </div>
            <div className='w-full flex flex-col xl:flex-row h-1/2'>
             <div className="xl:w-1/2 w-full xl:h-full h-1/2">
             
             </div>
             <div className="xl:w-1/2 w-full xl:h-full h-1/2">
             
             </div>

              
            </div>
          </div>
          
      </div>
    </>
  )
}

export default Dashboard
