import React from 'react'
import LandingNav from '../../components/navbar/LandingNav'

const Appointment = () => {
  return (
    <>
      <div className=' flex flex-col gap-y-4 min-h-fit h-auto w-screen pt-7' >
        <div className='min-h-[10%] w-screen'>
          <LandingNav/>
        </div>

        <div className='w-[140rem] max-w-[140rem] 3xl:max-[180rem] mx-auto h-[200rem] flex min-h-[89%] '>
          {/* actual form here */}
        </div>

      </div>

      <div className='w-screen h-auto min-h-screen'>
        <div className='w-[140rem] max-w-[140rem] 3xl:max-[180rem] mx-auto h-[200rem] flex min-h-screen '>

        </div>

      </div>
     
    </>
  )
}

export default Appointment
