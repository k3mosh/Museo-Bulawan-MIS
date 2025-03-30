import React from 'react'

import AdminNav from '../../components/navbar/AdminNav'

const Dashboard = () => {

 

  return (
    <>
      <div className='w-full h-screen bg-white pt-24 flex'>
        <div className='bg-[#1C1B19] w-1/6 h-full py-20 px-10'>
          <AdminNav />
        </div>
      </div>
    </>
  )
}

export default Dashboard
