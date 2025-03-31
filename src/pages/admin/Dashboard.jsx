import React from 'react'

import AdminNav from '../../components/navbar/AdminNav'

const Dashboard = () => {

 

  return (
    <>
      <div className='w-screen h-auto min-h-screen bg-white pt-24 flex'>
        <div className='bg-[#1C1B19] w-auto h-full min-h-[60rem] py-20 px-5 sm:px-10'>
          <AdminNav />
        </div>
      </div>
    </>
  )
}

export default Dashboard
