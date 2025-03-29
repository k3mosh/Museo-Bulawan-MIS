
import React from 'react'
import LandingNav from '../../components/navbar/LandingNav'

const Appointment = () => {
  return (
    <>
      <div className=' flex flex-col gap-y-4 min-h-fit h-auto w-screen pt-7' >
        <div className='min-h-[10%] w-screen'>
          <LandingNav />
        </div>


        <div className='max-w-full h-auto bg-white py-6 font-medium font-[HinaMincho] shadow-lg px-20'>
          <span className='text-5xl'>Appointment Form</span>
        </div>

        <div className='flex-col w-[140rem] 3xl:w-[180rem] mx-auto h-[200rem] flex min-h-[89%] gap-y-10 '>

          <div className='flex flex-row justify-items-start gap-5 me-auto px-20'>
            <div className='flex mx-auto min-w-[30rem] flex-col font-[HindKochi] text-xl'>
              <i className="text-[10rem] fa-regular fa-clock"></i>
              <span className='font-bold'>Museo Bulawan</span>
              <span>Open Daily 9:00am-5:00pm, Monday- Friday,</span>
            </div>
            <div className='flex mx-auto min-w-[30rem] flex-col font-[HindKochi] text-xl'>
              <span className='font-bold'>Museum Location</span>
              <span>Camarines Norte Provincial Capitol Grounds, Daet Philippines</span>
            </div>
          </div>
          <form action="">


          </form>
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
